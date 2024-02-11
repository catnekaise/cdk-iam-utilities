import { ClaimsUtility, IClaimsContext } from './claims';
import { PolicyVariable } from './policy-variable';

export interface IIamResourcePath {
  toString(): string;
}

export abstract class IamResourcePathBuilder implements IIamResourcePath {

  protected constructor(protected readonly path: string[]) {
  }

  toString(): string {
    return this.path.join('/');
  }

  protected appendPolicyVariable(policyVariable: PolicyVariable): string[] {
    return [...this.path, policyVariable.toString()];
  }

  protected appendText(...values: string[]): string[] {
    return [...this.path, ...values];
  }

}

export interface ClaimsIamResourcePathBuilderSettings {
  readonly claimsContext: IClaimsContext;
}

export abstract class ClaimsIamResourcePathBuilder extends IamResourcePathBuilder {

  protected constructor(protected readonly options: ClaimsIamResourcePathBuilderSettings, path: string[]) {
    super(path);
  }

  protected appendClaim(...claims: string[]): string[] {

    const input: string[] = [];

    const {
      mappedClaims,
      knownClaims,
    } = this.options.claimsContext;

    for (const val of claims) {

      const claimObj = mappedClaims.claims.filter(x => x.name === val || x.tagName === val);

      if (claimObj.length === 0) {
        throw new Error(`Claim "${val}" has not been mapped`);
      } else if (claimObj.length > 1) {
        throw new Error(`Claim "${val}" was found both as a claim and tag name in different mapped claims`);
      }

      if (knownClaims && !knownClaims.includes(val)) {
        throw new Error(`Known claims does not include the claim "${val}`);
      }

      input.push(PolicyVariable.principalTag(ClaimsUtility.forContext(this.options.claimsContext).tagNameForClaim(val)).toString());
    }

    return [...this.path, ...input];

  }

  protected appendValue(...values: string[]): string[] {

    const input: string[] = [];

    const {
      mappedClaims,
      knownClaims,
    } = this.options.claimsContext;

    for (const val of values) {

      const isKnownClaim = knownClaims.includes(val);
      const mappedClaim = mappedClaims.claims.find(x => x.name === val);

      if (mappedClaim) {
        input.push(PolicyVariable.principalTag(ClaimsUtility.forContext(this.options.claimsContext).tagNameForClaim(val)).toString());

        continue;
      } else if (!mappedClaim && isKnownClaim) {
        throw new Error('Cannot use value() with strings that are same value as a known claim. Add string with text() instead.');
      }

      input.push(val);
    }

    return [...this.path, ...input];
  }


}

export class GenericClaimsIamResourcePathBuilder extends ClaimsIamResourcePathBuilder {

  static create(claimsContext: IClaimsContext): GenericClaimsIamResourcePathBuilder {
    return new GenericClaimsIamResourcePathBuilder({ claimsContext }, []);
  }

  private constructor(options: ClaimsIamResourcePathBuilderSettings, path: string[]) {
    super(options, path);
  }

  claim(claim: string, ...additionalClaims: string[]): GenericClaimsIamResourcePathBuilder {
    return new GenericClaimsIamResourcePathBuilder(this.options, this.appendClaim(claim, ...additionalClaims));
  }

  value(value: string, ...additionalValues: string[]): GenericClaimsIamResourcePathBuilder {
    return new GenericClaimsIamResourcePathBuilder(this.options, this.appendValue(value, ...additionalValues));
  }

  text(value: string, ...additionalValues: string[]): GenericClaimsIamResourcePathBuilder {
    return new GenericClaimsIamResourcePathBuilder(this.options, this.appendText(value, ...additionalValues));
  }

  policyVariable(value: PolicyVariable): GenericClaimsIamResourcePathBuilder {
    return new GenericClaimsIamResourcePathBuilder(this.options, this.appendPolicyVariable(value));
  }
}
