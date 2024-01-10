import { Annotations } from 'aws-cdk-lib';
import * as iam from 'aws-cdk-lib/aws-iam';
import { Construct } from 'constructs';
import { IClaimsContext } from './claims';
import { ConditionOperator, OperatorUtils } from './condition-operator';
import { ConditionKey } from './keys';
import { PolicyType } from './policy-type';

export enum ConstraintPolicyMutationType {
  CONDITION = 'condition'
}

export interface ConstraintPolicyMutation {
  readonly type: ConstraintPolicyMutationType;
  readonly operator: ConditionOperator;
  readonly key: ConditionKey;
  readonly value: any[];
  /** @experimental **/
  readonly order?: number;
  /** @experimental **/
  readonly strategy?: string;
  /** @experimental **/
  readonly actionsMatchService?: string;
}

export abstract class Constraint {

  protected constructor() {
  }

  abstract assemble(scope: Construct, context: ConstraintAssembleContext): ConstraintPolicyMutation[];

  protected isNotNullCondition(key: ConditionKey): ConstraintPolicyMutation {
    return {
      type: ConstraintPolicyMutationType.CONDITION,
      key,
      operator: ConditionOperator.NULL,
      value: ['false'],
    };
  }
}

export interface ConstraintAssembleContext {
  readonly claimsContext?: IClaimsContext;
  readonly effect: iam.Effect;
  readonly policyType: PolicyType;
}

export interface ConstraintsBuilderSettings {
  readonly claimsContext?: IClaimsContext;
}

export interface IConstraintsBuilder {
  get constraints(): Constraint[];
}

export abstract class ConstraintsBuilder implements IConstraintsBuilder {

  private readonly _constraints: Constraint[] = [];
  public readonly settings: ConstraintsBuilderSettings;

  protected constructor(settings?: ConstraintsBuilderSettings) {
    this.settings = settings ?? {};
  }

  get constraints(): Constraint[] {
    return this._constraints;
  }

  add(constraint: Constraint, ...additionalConstraints: Constraint[]): this {

    this._constraints.push(constraint, ...additionalConstraints);

    return this;
  }
}

export interface ConstraintUtilitySettings {
  readonly policyType: PolicyType;
  readonly claimsContext?: IClaimsContext;
  readonly appendConditionValues?: boolean;
}

export class ConstraintsUtility {

  static forConstraints(constraints: Constraint[]): ConstraintsUtility {
    return new ConstraintsUtility(constraints);
  }

  private constructor(private readonly constraints: Constraint[]) {
  }

  appendPolicy(scope: Construct, settings: ConstraintUtilitySettings, policyStatement: iam.PolicyStatement): void {

    const context: ConstraintAssembleContext = {
      effect: iam.Effect.ALLOW,
      policyType: settings.policyType,
      claimsContext: settings.claimsContext,
    };

    let mutations: ConstraintPolicyMutation[] = [];

    for (const constraint of this.constraints) {

      const mu = constraint.assemble(scope, context);
      mutations.push(...mu);
    }

    mutations = mutationsSort(mutations);

    for (let i = 0; i < mutations.length; i++) {
      const mutation = mutations[i];

      // Currently only implemented and supported type.
      if (mutation.type !== ConstraintPolicyMutationType.CONDITION) {
        continue;
      }

      if (mutation.strategy &&
        mutation.strategy === 'fallback' &&
        mutations.find((x, i2) => x.key.toString() === mutation.key.toString() && i2 < i)
      ) {

        if (typeof mutation.order !== 'number') {
          Annotations.of(scope).addError('Do not assemble condition mutations with the fallback strategy without defining an order');
        }

        continue;
      }

      if (OperatorUtils.operatorIsSupported(mutation.key.settings.supportedOperators, mutation.operator) === false) {
        Annotations.of(scope).addError(`Unsupported operator used for ConditionKey ${mutation.operator}`);
      }

      if (mutation.actionsMatchService) {
        for (const action of policyStatement.actions) {
          if (!action.toLocaleLowerCase().startsWith(`${mutation.actionsMatchService.toLocaleLowerCase()}:`)) {
            Annotations.of(scope).addWarning(`Attempting to add condition ${mutation.key.toString()} to this policy cause problems as the policy contains permissions not matching the service prefix ${mutation.actionsMatchService}`);
          }
        }
      }

      const conditionKey = mutation.key.toString();
      const operatorKey = mutation.operator.toString();

      policyStatement.addCondition(operatorKey, {});

      let existingValues: any;

      if (settings.appendConditionValues) {
        existingValues = policyStatement.conditions[operatorKey][conditionKey];
      } else {
        existingValues = undefined;
      }

      const value: { [key: string]: any } = {};

      if (Array.isArray(existingValues)) {
        value[conditionKey] = existingValues;
      } else if (existingValues !== undefined) {
        value[conditionKey] = [existingValues];
      } else {
        value[conditionKey] = [];
      }

      if (!OperatorUtils.arraySupport(mutation.operator) && mutation.value.length === 1 && !existingValues) {
        value[conditionKey] = mutation.value[0];
      } else {
        value[conditionKey].push(...mutation.value);
      }

      policyStatement.addCondition(operatorKey, value);
    }
  }

  appendGrant(scope: Construct, settings: ConstraintUtilitySettings, grant: iam.Grant): void {

    if (grant.principalStatements.length === 0 && grant.resourceStatements.length === 0) {
      throw new Error('No policy statements found in the grant');
    }

    const statements: iam.PolicyStatement[] = [...grant.principalStatements, ...grant.resourceStatements];

    for (const stmt of statements) {
      this.appendPolicy(scope, settings, stmt);
    }
  }
}

function mutationSort(m1: ConstraintPolicyMutation, m2: ConstraintPolicyMutation): number {

  const p1 = m1.order ?? 0;
  const p2 = m2.order ?? 0;

  if (p1 === p2) {
    return 0;
  }

  if (p1 > p2) {
    return 1;
  }

  return -1;
}

function mutationsSort(mutations: ConstraintPolicyMutation[]): ConstraintPolicyMutation[] {

  const groupings: { [key: string]: { [key2: string]: ConstraintPolicyMutation[] } } = {};

  for (let mutation of mutations) {

    const operator = mutation.operator.toString();
    const conditionKey = mutation.key.toString();

    if (!groupings[operator]) {
      groupings[operator] = {};
    }

    if (!groupings[operator][conditionKey]) {
      groupings[operator][conditionKey] = [];
    }

    groupings[operator][conditionKey].push(mutation);
  }

  const output: ConstraintPolicyMutation[] = [];

  for (const operator of Object.keys(groupings).sort((x, y) => x > y ? 1 : -1)) {

    const conditions = groupings[operator];

    for (const conditionKey of Object.keys(conditions).sort((x, y) => x > y ? 1 : -1)) {
      output.push(...conditions[conditionKey].sort(mutationSort));
    }
  }

  return output;
}
