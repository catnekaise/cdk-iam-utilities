# API Reference <a name="API Reference" id="api-reference"></a>


## Structs <a name="Structs" id="Structs"></a>

### Claim <a name="Claim" id="@catnekaise/cdk-iam-utilities.Claim"></a>

#### Initializer <a name="Initializer" id="@catnekaise/cdk-iam-utilities.Claim.Initializer"></a>

```typescript
import { Claim } from '@catnekaise/cdk-iam-utilities'

const claim: Claim = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@catnekaise/cdk-iam-utilities.Claim.property.name">name</a></code> | <code>string</code> | Name represents the original value of the claim/attribute. |
| <code><a href="#@catnekaise/cdk-iam-utilities.Claim.property.tagName">tagName</a></code> | <code>string</code> | Tag Name is name of the tag corresponding to name. |

---

##### `name`<sup>Required</sup> <a name="name" id="@catnekaise/cdk-iam-utilities.Claim.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name represents the original value of the claim/attribute.

---

##### `tagName`<sup>Required</sup> <a name="tagName" id="@catnekaise/cdk-iam-utilities.Claim.property.tagName"></a>

```typescript
public readonly tagName: string;
```

- *Type:* string

Tag Name is name of the tag corresponding to name.

It can either match name or be a different value

---

### ClaimsIamResourcePathBuilderSettings <a name="ClaimsIamResourcePathBuilderSettings" id="@catnekaise/cdk-iam-utilities.ClaimsIamResourcePathBuilderSettings"></a>

#### Initializer <a name="Initializer" id="@catnekaise/cdk-iam-utilities.ClaimsIamResourcePathBuilderSettings.Initializer"></a>

```typescript
import { ClaimsIamResourcePathBuilderSettings } from '@catnekaise/cdk-iam-utilities'

const claimsIamResourcePathBuilderSettings: ClaimsIamResourcePathBuilderSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@catnekaise/cdk-iam-utilities.ClaimsIamResourcePathBuilderSettings.property.claimsContext">claimsContext</a></code> | <code><a href="#@catnekaise/cdk-iam-utilities.IClaimsContext">IClaimsContext</a></code> | *No description.* |

---

##### `claimsContext`<sup>Required</sup> <a name="claimsContext" id="@catnekaise/cdk-iam-utilities.ClaimsIamResourcePathBuilderSettings.property.claimsContext"></a>

```typescript
public readonly claimsContext: IClaimsContext;
```

- *Type:* <a href="#@catnekaise/cdk-iam-utilities.IClaimsContext">IClaimsContext</a>

---

### ConditionKeySettings <a name="ConditionKeySettings" id="@catnekaise/cdk-iam-utilities.ConditionKeySettings"></a>

#### Initializer <a name="Initializer" id="@catnekaise/cdk-iam-utilities.ConditionKeySettings.Initializer"></a>

```typescript
import { ConditionKeySettings } from '@catnekaise/cdk-iam-utilities'

const conditionKeySettings: ConditionKeySettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@catnekaise/cdk-iam-utilities.ConditionKeySettings.property.supportedOperators">supportedOperators</a></code> | <code>string[]</code> | *No description.* |

---

##### `supportedOperators`<sup>Required</sup> <a name="supportedOperators" id="@catnekaise/cdk-iam-utilities.ConditionKeySettings.property.supportedOperators"></a>

```typescript
public readonly supportedOperators: string[];
```

- *Type:* string[]

---

### ConstraintAssembleContext <a name="ConstraintAssembleContext" id="@catnekaise/cdk-iam-utilities.ConstraintAssembleContext"></a>

#### Initializer <a name="Initializer" id="@catnekaise/cdk-iam-utilities.ConstraintAssembleContext.Initializer"></a>

```typescript
import { ConstraintAssembleContext } from '@catnekaise/cdk-iam-utilities'

const constraintAssembleContext: ConstraintAssembleContext = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@catnekaise/cdk-iam-utilities.ConstraintAssembleContext.property.effect">effect</a></code> | <code>aws-cdk-lib.aws_iam.Effect</code> | *No description.* |
| <code><a href="#@catnekaise/cdk-iam-utilities.ConstraintAssembleContext.property.policyType">policyType</a></code> | <code><a href="#@catnekaise/cdk-iam-utilities.PolicyType">PolicyType</a></code> | *No description.* |
| <code><a href="#@catnekaise/cdk-iam-utilities.ConstraintAssembleContext.property.claimsContext">claimsContext</a></code> | <code><a href="#@catnekaise/cdk-iam-utilities.IClaimsContext">IClaimsContext</a></code> | *No description.* |

---

##### `effect`<sup>Required</sup> <a name="effect" id="@catnekaise/cdk-iam-utilities.ConstraintAssembleContext.property.effect"></a>

```typescript
public readonly effect: Effect;
```

- *Type:* aws-cdk-lib.aws_iam.Effect

---

##### `policyType`<sup>Required</sup> <a name="policyType" id="@catnekaise/cdk-iam-utilities.ConstraintAssembleContext.property.policyType"></a>

```typescript
public readonly policyType: PolicyType;
```

- *Type:* <a href="#@catnekaise/cdk-iam-utilities.PolicyType">PolicyType</a>

---

##### `claimsContext`<sup>Optional</sup> <a name="claimsContext" id="@catnekaise/cdk-iam-utilities.ConstraintAssembleContext.property.claimsContext"></a>

```typescript
public readonly claimsContext: IClaimsContext;
```

- *Type:* <a href="#@catnekaise/cdk-iam-utilities.IClaimsContext">IClaimsContext</a>

---

### ConstraintPolicyMutation <a name="ConstraintPolicyMutation" id="@catnekaise/cdk-iam-utilities.ConstraintPolicyMutation"></a>

#### Initializer <a name="Initializer" id="@catnekaise/cdk-iam-utilities.ConstraintPolicyMutation.Initializer"></a>

```typescript
import { ConstraintPolicyMutation } from '@catnekaise/cdk-iam-utilities'

const constraintPolicyMutation: ConstraintPolicyMutation = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@catnekaise/cdk-iam-utilities.ConstraintPolicyMutation.property.key">key</a></code> | <code><a href="#@catnekaise/cdk-iam-utilities.ConditionKey">ConditionKey</a></code> | *No description.* |
| <code><a href="#@catnekaise/cdk-iam-utilities.ConstraintPolicyMutation.property.operator">operator</a></code> | <code><a href="#@catnekaise/cdk-iam-utilities.ConditionOperator">ConditionOperator</a></code> | *No description.* |
| <code><a href="#@catnekaise/cdk-iam-utilities.ConstraintPolicyMutation.property.type">type</a></code> | <code><a href="#@catnekaise/cdk-iam-utilities.ConstraintPolicyMutationType">ConstraintPolicyMutationType</a></code> | *No description.* |
| <code><a href="#@catnekaise/cdk-iam-utilities.ConstraintPolicyMutation.property.value">value</a></code> | <code>any[]</code> | *No description.* |
| <code><a href="#@catnekaise/cdk-iam-utilities.ConstraintPolicyMutation.property.actionsMatchService">actionsMatchService</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@catnekaise/cdk-iam-utilities.ConstraintPolicyMutation.property.order">order</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@catnekaise/cdk-iam-utilities.ConstraintPolicyMutation.property.strategy">strategy</a></code> | <code>string</code> | *No description.* |

---

##### `key`<sup>Required</sup> <a name="key" id="@catnekaise/cdk-iam-utilities.ConstraintPolicyMutation.property.key"></a>

```typescript
public readonly key: ConditionKey;
```

- *Type:* <a href="#@catnekaise/cdk-iam-utilities.ConditionKey">ConditionKey</a>

---

##### `operator`<sup>Required</sup> <a name="operator" id="@catnekaise/cdk-iam-utilities.ConstraintPolicyMutation.property.operator"></a>

```typescript
public readonly operator: ConditionOperator;
```

- *Type:* <a href="#@catnekaise/cdk-iam-utilities.ConditionOperator">ConditionOperator</a>

---

##### `type`<sup>Required</sup> <a name="type" id="@catnekaise/cdk-iam-utilities.ConstraintPolicyMutation.property.type"></a>

```typescript
public readonly type: ConstraintPolicyMutationType;
```

- *Type:* <a href="#@catnekaise/cdk-iam-utilities.ConstraintPolicyMutationType">ConstraintPolicyMutationType</a>

---

##### `value`<sup>Required</sup> <a name="value" id="@catnekaise/cdk-iam-utilities.ConstraintPolicyMutation.property.value"></a>

```typescript
public readonly value: any[];
```

- *Type:* any[]

---

##### `actionsMatchService`<sup>Optional</sup> <a name="actionsMatchService" id="@catnekaise/cdk-iam-utilities.ConstraintPolicyMutation.property.actionsMatchService"></a>

```typescript
public readonly actionsMatchService: string;
```

- *Type:* string

---

##### `order`<sup>Optional</sup> <a name="order" id="@catnekaise/cdk-iam-utilities.ConstraintPolicyMutation.property.order"></a>

```typescript
public readonly order: number;
```

- *Type:* number

---

##### `strategy`<sup>Optional</sup> <a name="strategy" id="@catnekaise/cdk-iam-utilities.ConstraintPolicyMutation.property.strategy"></a>

```typescript
public readonly strategy: string;
```

- *Type:* string

---

### ConstraintsBuilderSettings <a name="ConstraintsBuilderSettings" id="@catnekaise/cdk-iam-utilities.ConstraintsBuilderSettings"></a>

#### Initializer <a name="Initializer" id="@catnekaise/cdk-iam-utilities.ConstraintsBuilderSettings.Initializer"></a>

```typescript
import { ConstraintsBuilderSettings } from '@catnekaise/cdk-iam-utilities'

const constraintsBuilderSettings: ConstraintsBuilderSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@catnekaise/cdk-iam-utilities.ConstraintsBuilderSettings.property.claimsContext">claimsContext</a></code> | <code><a href="#@catnekaise/cdk-iam-utilities.IClaimsContext">IClaimsContext</a></code> | *No description.* |

---

##### `claimsContext`<sup>Optional</sup> <a name="claimsContext" id="@catnekaise/cdk-iam-utilities.ConstraintsBuilderSettings.property.claimsContext"></a>

```typescript
public readonly claimsContext: IClaimsContext;
```

- *Type:* <a href="#@catnekaise/cdk-iam-utilities.IClaimsContext">IClaimsContext</a>

---

### ConstraintUtilitySettings <a name="ConstraintUtilitySettings" id="@catnekaise/cdk-iam-utilities.ConstraintUtilitySettings"></a>

#### Initializer <a name="Initializer" id="@catnekaise/cdk-iam-utilities.ConstraintUtilitySettings.Initializer"></a>

```typescript
import { ConstraintUtilitySettings } from '@catnekaise/cdk-iam-utilities'

const constraintUtilitySettings: ConstraintUtilitySettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@catnekaise/cdk-iam-utilities.ConstraintUtilitySettings.property.policyType">policyType</a></code> | <code><a href="#@catnekaise/cdk-iam-utilities.PolicyType">PolicyType</a></code> | *No description.* |
| <code><a href="#@catnekaise/cdk-iam-utilities.ConstraintUtilitySettings.property.appendConditionValues">appendConditionValues</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#@catnekaise/cdk-iam-utilities.ConstraintUtilitySettings.property.claimsContext">claimsContext</a></code> | <code><a href="#@catnekaise/cdk-iam-utilities.IClaimsContext">IClaimsContext</a></code> | *No description.* |

---

##### `policyType`<sup>Required</sup> <a name="policyType" id="@catnekaise/cdk-iam-utilities.ConstraintUtilitySettings.property.policyType"></a>

```typescript
public readonly policyType: PolicyType;
```

- *Type:* <a href="#@catnekaise/cdk-iam-utilities.PolicyType">PolicyType</a>

---

##### `appendConditionValues`<sup>Optional</sup> <a name="appendConditionValues" id="@catnekaise/cdk-iam-utilities.ConstraintUtilitySettings.property.appendConditionValues"></a>

```typescript
public readonly appendConditionValues: boolean;
```

- *Type:* boolean

---

##### `claimsContext`<sup>Optional</sup> <a name="claimsContext" id="@catnekaise/cdk-iam-utilities.ConstraintUtilitySettings.property.claimsContext"></a>

```typescript
public readonly claimsContext: IClaimsContext;
```

- *Type:* <a href="#@catnekaise/cdk-iam-utilities.IClaimsContext">IClaimsContext</a>

---

### PassClaimsConstraintSettings <a name="PassClaimsConstraintSettings" id="@catnekaise/cdk-iam-utilities.PassClaimsConstraintSettings"></a>

#### Initializer <a name="Initializer" id="@catnekaise/cdk-iam-utilities.PassClaimsConstraintSettings.Initializer"></a>

```typescript
import { PassClaimsConstraintSettings } from '@catnekaise/cdk-iam-utilities'

const passClaimsConstraintSettings: PassClaimsConstraintSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@catnekaise/cdk-iam-utilities.PassClaimsConstraintSettings.property.allowAnyTags">allowAnyTags</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#@catnekaise/cdk-iam-utilities.PassClaimsConstraintSettings.property.claims">claims</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@catnekaise/cdk-iam-utilities.PassClaimsConstraintSettings.property.specificallyAllowedTags">specificallyAllowedTags</a></code> | <code>string[]</code> | *No description.* |

---

##### `allowAnyTags`<sup>Required</sup> <a name="allowAnyTags" id="@catnekaise/cdk-iam-utilities.PassClaimsConstraintSettings.property.allowAnyTags"></a>

```typescript
public readonly allowAnyTags: boolean;
```

- *Type:* boolean

---

##### `claims`<sup>Required</sup> <a name="claims" id="@catnekaise/cdk-iam-utilities.PassClaimsConstraintSettings.property.claims"></a>

```typescript
public readonly claims: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `specificallyAllowedTags`<sup>Optional</sup> <a name="specificallyAllowedTags" id="@catnekaise/cdk-iam-utilities.PassClaimsConstraintSettings.property.specificallyAllowedTags"></a>

```typescript
public readonly specificallyAllowedTags: string[];
```

- *Type:* string[]

---

## Classes <a name="Classes" id="Classes"></a>

### AwsFederatedProviderConditionKey <a name="AwsFederatedProviderConditionKey" id="@catnekaise/cdk-iam-utilities.AwsFederatedProviderConditionKey"></a>

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@catnekaise/cdk-iam-utilities.AwsFederatedProviderConditionKey.toString">toString</a></code> | *No description.* |
| <code><a href="#@catnekaise/cdk-iam-utilities.AwsFederatedProviderConditionKey.toCognitoIdentityConstraint">toCognitoIdentityConstraint</a></code> | *No description.* |
| <code><a href="#@catnekaise/cdk-iam-utilities.AwsFederatedProviderConditionKey.toConstraint">toConstraint</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@catnekaise/cdk-iam-utilities.AwsFederatedProviderConditionKey.toString"></a>

```typescript
public toString(): string
```

##### `toCognitoIdentityConstraint` <a name="toCognitoIdentityConstraint" id="@catnekaise/cdk-iam-utilities.AwsFederatedProviderConditionKey.toCognitoIdentityConstraint"></a>

```typescript
public toCognitoIdentityConstraint(): Constraint
```

##### `toConstraint` <a name="toConstraint" id="@catnekaise/cdk-iam-utilities.AwsFederatedProviderConditionKey.toConstraint"></a>

```typescript
public toConstraint(operator: ConditionOperator, value: string, additionalValues: string): GenericConstraint
```

###### `operator`<sup>Required</sup> <a name="operator" id="@catnekaise/cdk-iam-utilities.AwsFederatedProviderConditionKey.toConstraint.parameter.operator"></a>

- *Type:* <a href="#@catnekaise/cdk-iam-utilities.ConditionOperator">ConditionOperator</a>

---

###### `value`<sup>Required</sup> <a name="value" id="@catnekaise/cdk-iam-utilities.AwsFederatedProviderConditionKey.toConstraint.parameter.value"></a>

- *Type:* string

---

###### `additionalValues`<sup>Required</sup> <a name="additionalValues" id="@catnekaise/cdk-iam-utilities.AwsFederatedProviderConditionKey.toConstraint.parameter.additionalValues"></a>

- *Type:* string

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@catnekaise/cdk-iam-utilities.AwsFederatedProviderConditionKey.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@catnekaise/cdk-iam-utilities.AwsFederatedProviderConditionKey.property.settings">settings</a></code> | <code><a href="#@catnekaise/cdk-iam-utilities.ConditionKeySettings">ConditionKeySettings</a></code> | *No description.* |

---

##### `name`<sup>Required</sup> <a name="name" id="@catnekaise/cdk-iam-utilities.AwsFederatedProviderConditionKey.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `settings`<sup>Required</sup> <a name="settings" id="@catnekaise/cdk-iam-utilities.AwsFederatedProviderConditionKey.property.settings"></a>

```typescript
public readonly settings: ConditionKeySettings;
```

- *Type:* <a href="#@catnekaise/cdk-iam-utilities.ConditionKeySettings">ConditionKeySettings</a>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@catnekaise/cdk-iam-utilities.AwsFederatedProviderConditionKey.property.Create">Create</a></code> | <code><a href="#@catnekaise/cdk-iam-utilities.AwsFederatedProviderConditionKey">AwsFederatedProviderConditionKey</a></code> | *No description.* |

---

##### `Create`<sup>Required</sup> <a name="Create" id="@catnekaise/cdk-iam-utilities.AwsFederatedProviderConditionKey.property.Create"></a>

```typescript
public readonly Create: AwsFederatedProviderConditionKey;
```

- *Type:* <a href="#@catnekaise/cdk-iam-utilities.AwsFederatedProviderConditionKey">AwsFederatedProviderConditionKey</a>

---

### AwsPrincipalTagConditionKey <a name="AwsPrincipalTagConditionKey" id="@catnekaise/cdk-iam-utilities.AwsPrincipalTagConditionKey"></a>

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@catnekaise/cdk-iam-utilities.AwsPrincipalTagConditionKey.toString">toString</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@catnekaise/cdk-iam-utilities.AwsPrincipalTagConditionKey.toString"></a>

```typescript
public toString(): string
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@catnekaise/cdk-iam-utilities.AwsPrincipalTagConditionKey.tag">tag</a></code> | *No description.* |

---

##### `tag` <a name="tag" id="@catnekaise/cdk-iam-utilities.AwsPrincipalTagConditionKey.tag"></a>

```typescript
import { AwsPrincipalTagConditionKey } from '@catnekaise/cdk-iam-utilities'

AwsPrincipalTagConditionKey.tag(tagName: string)
```

###### `tagName`<sup>Required</sup> <a name="tagName" id="@catnekaise/cdk-iam-utilities.AwsPrincipalTagConditionKey.tag.parameter.tagName"></a>

- *Type:* string

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@catnekaise/cdk-iam-utilities.AwsPrincipalTagConditionKey.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@catnekaise/cdk-iam-utilities.AwsPrincipalTagConditionKey.property.settings">settings</a></code> | <code><a href="#@catnekaise/cdk-iam-utilities.ConditionKeySettings">ConditionKeySettings</a></code> | *No description.* |

---

##### `name`<sup>Required</sup> <a name="name" id="@catnekaise/cdk-iam-utilities.AwsPrincipalTagConditionKey.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `settings`<sup>Required</sup> <a name="settings" id="@catnekaise/cdk-iam-utilities.AwsPrincipalTagConditionKey.property.settings"></a>

```typescript
public readonly settings: ConditionKeySettings;
```

- *Type:* <a href="#@catnekaise/cdk-iam-utilities.ConditionKeySettings">ConditionKeySettings</a>

---


### AwsRequestTagConditionKey <a name="AwsRequestTagConditionKey" id="@catnekaise/cdk-iam-utilities.AwsRequestTagConditionKey"></a>

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@catnekaise/cdk-iam-utilities.AwsRequestTagConditionKey.toString">toString</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@catnekaise/cdk-iam-utilities.AwsRequestTagConditionKey.toString"></a>

```typescript
public toString(): string
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@catnekaise/cdk-iam-utilities.AwsRequestTagConditionKey.tag">tag</a></code> | *No description.* |

---

##### `tag` <a name="tag" id="@catnekaise/cdk-iam-utilities.AwsRequestTagConditionKey.tag"></a>

```typescript
import { AwsRequestTagConditionKey } from '@catnekaise/cdk-iam-utilities'

AwsRequestTagConditionKey.tag(tagName: string)
```

###### `tagName`<sup>Required</sup> <a name="tagName" id="@catnekaise/cdk-iam-utilities.AwsRequestTagConditionKey.tag.parameter.tagName"></a>

- *Type:* string

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@catnekaise/cdk-iam-utilities.AwsRequestTagConditionKey.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@catnekaise/cdk-iam-utilities.AwsRequestTagConditionKey.property.settings">settings</a></code> | <code><a href="#@catnekaise/cdk-iam-utilities.ConditionKeySettings">ConditionKeySettings</a></code> | *No description.* |

---

##### `name`<sup>Required</sup> <a name="name" id="@catnekaise/cdk-iam-utilities.AwsRequestTagConditionKey.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `settings`<sup>Required</sup> <a name="settings" id="@catnekaise/cdk-iam-utilities.AwsRequestTagConditionKey.property.settings"></a>

```typescript
public readonly settings: ConditionKeySettings;
```

- *Type:* <a href="#@catnekaise/cdk-iam-utilities.ConditionKeySettings">ConditionKeySettings</a>

---


### AwsResourceTagConditionKey <a name="AwsResourceTagConditionKey" id="@catnekaise/cdk-iam-utilities.AwsResourceTagConditionKey"></a>

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@catnekaise/cdk-iam-utilities.AwsResourceTagConditionKey.toString">toString</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@catnekaise/cdk-iam-utilities.AwsResourceTagConditionKey.toString"></a>

```typescript
public toString(): string
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@catnekaise/cdk-iam-utilities.AwsResourceTagConditionKey.tag">tag</a></code> | *No description.* |

---

##### `tag` <a name="tag" id="@catnekaise/cdk-iam-utilities.AwsResourceTagConditionKey.tag"></a>

```typescript
import { AwsResourceTagConditionKey } from '@catnekaise/cdk-iam-utilities'

AwsResourceTagConditionKey.tag(tagName: string)
```

###### `tagName`<sup>Required</sup> <a name="tagName" id="@catnekaise/cdk-iam-utilities.AwsResourceTagConditionKey.tag.parameter.tagName"></a>

- *Type:* string

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@catnekaise/cdk-iam-utilities.AwsResourceTagConditionKey.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@catnekaise/cdk-iam-utilities.AwsResourceTagConditionKey.property.settings">settings</a></code> | <code><a href="#@catnekaise/cdk-iam-utilities.ConditionKeySettings">ConditionKeySettings</a></code> | *No description.* |

---

##### `name`<sup>Required</sup> <a name="name" id="@catnekaise/cdk-iam-utilities.AwsResourceTagConditionKey.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `settings`<sup>Required</sup> <a name="settings" id="@catnekaise/cdk-iam-utilities.AwsResourceTagConditionKey.property.settings"></a>

```typescript
public readonly settings: ConditionKeySettings;
```

- *Type:* <a href="#@catnekaise/cdk-iam-utilities.ConditionKeySettings">ConditionKeySettings</a>

---


### AwsSourceVpcConditionKey <a name="AwsSourceVpcConditionKey" id="@catnekaise/cdk-iam-utilities.AwsSourceVpcConditionKey"></a>

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@catnekaise/cdk-iam-utilities.AwsSourceVpcConditionKey.toString">toString</a></code> | *No description.* |
| <code><a href="#@catnekaise/cdk-iam-utilities.AwsSourceVpcConditionKey.toVpcConstraint">toVpcConstraint</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@catnekaise/cdk-iam-utilities.AwsSourceVpcConditionKey.toString"></a>

```typescript
public toString(): string
```

##### `toVpcConstraint` <a name="toVpcConstraint" id="@catnekaise/cdk-iam-utilities.AwsSourceVpcConditionKey.toVpcConstraint"></a>

```typescript
public toVpcConstraint(vpc: IVpc): GenericConstraint
```

###### `vpc`<sup>Required</sup> <a name="vpc" id="@catnekaise/cdk-iam-utilities.AwsSourceVpcConditionKey.toVpcConstraint.parameter.vpc"></a>

- *Type:* aws-cdk-lib.aws_ec2.IVpc

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@catnekaise/cdk-iam-utilities.AwsSourceVpcConditionKey.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@catnekaise/cdk-iam-utilities.AwsSourceVpcConditionKey.property.settings">settings</a></code> | <code><a href="#@catnekaise/cdk-iam-utilities.ConditionKeySettings">ConditionKeySettings</a></code> | *No description.* |

---

##### `name`<sup>Required</sup> <a name="name" id="@catnekaise/cdk-iam-utilities.AwsSourceVpcConditionKey.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `settings`<sup>Required</sup> <a name="settings" id="@catnekaise/cdk-iam-utilities.AwsSourceVpcConditionKey.property.settings"></a>

```typescript
public readonly settings: ConditionKeySettings;
```

- *Type:* <a href="#@catnekaise/cdk-iam-utilities.ConditionKeySettings">ConditionKeySettings</a>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@catnekaise/cdk-iam-utilities.AwsSourceVpcConditionKey.property.Create">Create</a></code> | <code><a href="#@catnekaise/cdk-iam-utilities.AwsSourceVpcConditionKey">AwsSourceVpcConditionKey</a></code> | *No description.* |

---

##### `Create`<sup>Required</sup> <a name="Create" id="@catnekaise/cdk-iam-utilities.AwsSourceVpcConditionKey.property.Create"></a>

```typescript
public readonly Create: AwsSourceVpcConditionKey;
```

- *Type:* <a href="#@catnekaise/cdk-iam-utilities.AwsSourceVpcConditionKey">AwsSourceVpcConditionKey</a>

---

### BoolConditionKey <a name="BoolConditionKey" id="@catnekaise/cdk-iam-utilities.BoolConditionKey"></a>

#### Initializers <a name="Initializers" id="@catnekaise/cdk-iam-utilities.BoolConditionKey.Initializer"></a>

```typescript
import { BoolConditionKey } from '@catnekaise/cdk-iam-utilities'

new BoolConditionKey(name: string, settings: ConditionKeySettings)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@catnekaise/cdk-iam-utilities.BoolConditionKey.Initializer.parameter.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@catnekaise/cdk-iam-utilities.BoolConditionKey.Initializer.parameter.settings">settings</a></code> | <code><a href="#@catnekaise/cdk-iam-utilities.ConditionKeySettings">ConditionKeySettings</a></code> | *No description.* |

---

##### `name`<sup>Required</sup> <a name="name" id="@catnekaise/cdk-iam-utilities.BoolConditionKey.Initializer.parameter.name"></a>

- *Type:* string

---

##### `settings`<sup>Required</sup> <a name="settings" id="@catnekaise/cdk-iam-utilities.BoolConditionKey.Initializer.parameter.settings"></a>

- *Type:* <a href="#@catnekaise/cdk-iam-utilities.ConditionKeySettings">ConditionKeySettings</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@catnekaise/cdk-iam-utilities.BoolConditionKey.toString">toString</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@catnekaise/cdk-iam-utilities.BoolConditionKey.toString"></a>

```typescript
public toString(): string
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@catnekaise/cdk-iam-utilities.BoolConditionKey.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@catnekaise/cdk-iam-utilities.BoolConditionKey.property.settings">settings</a></code> | <code><a href="#@catnekaise/cdk-iam-utilities.ConditionKeySettings">ConditionKeySettings</a></code> | *No description.* |

---

##### `name`<sup>Required</sup> <a name="name" id="@catnekaise/cdk-iam-utilities.BoolConditionKey.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `settings`<sup>Required</sup> <a name="settings" id="@catnekaise/cdk-iam-utilities.BoolConditionKey.property.settings"></a>

```typescript
public readonly settings: ConditionKeySettings;
```

- *Type:* <a href="#@catnekaise/cdk-iam-utilities.ConditionKeySettings">ConditionKeySettings</a>

---


### BoolConstraint <a name="BoolConstraint" id="@catnekaise/cdk-iam-utilities.BoolConstraint"></a>

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@catnekaise/cdk-iam-utilities.BoolConstraint.assemble">assemble</a></code> | *No description.* |

---

##### `assemble` <a name="assemble" id="@catnekaise/cdk-iam-utilities.BoolConstraint.assemble"></a>

```typescript
public assemble(scope: Construct, context: ConstraintAssembleContext): ConstraintPolicyMutation[]
```

###### `scope`<sup>Required</sup> <a name="scope" id="@catnekaise/cdk-iam-utilities.BoolConstraint.assemble.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `context`<sup>Required</sup> <a name="context" id="@catnekaise/cdk-iam-utilities.BoolConstraint.assemble.parameter.context"></a>

- *Type:* <a href="#@catnekaise/cdk-iam-utilities.ConstraintAssembleContext">ConstraintAssembleContext</a>

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@catnekaise/cdk-iam-utilities.BoolConstraint.whenFalse">whenFalse</a></code> | *No description.* |
| <code><a href="#@catnekaise/cdk-iam-utilities.BoolConstraint.whenTrue">whenTrue</a></code> | *No description.* |

---

##### `whenFalse` <a name="whenFalse" id="@catnekaise/cdk-iam-utilities.BoolConstraint.whenFalse"></a>

```typescript
import { BoolConstraint } from '@catnekaise/cdk-iam-utilities'

BoolConstraint.whenFalse(key: ConditionKey, ifExists?: boolean)
```

###### `key`<sup>Required</sup> <a name="key" id="@catnekaise/cdk-iam-utilities.BoolConstraint.whenFalse.parameter.key"></a>

- *Type:* <a href="#@catnekaise/cdk-iam-utilities.ConditionKey">ConditionKey</a>

---

###### `ifExists`<sup>Optional</sup> <a name="ifExists" id="@catnekaise/cdk-iam-utilities.BoolConstraint.whenFalse.parameter.ifExists"></a>

- *Type:* boolean

---

##### `whenTrue` <a name="whenTrue" id="@catnekaise/cdk-iam-utilities.BoolConstraint.whenTrue"></a>

```typescript
import { BoolConstraint } from '@catnekaise/cdk-iam-utilities'

BoolConstraint.whenTrue(key: ConditionKey, ifExists?: boolean)
```

###### `key`<sup>Required</sup> <a name="key" id="@catnekaise/cdk-iam-utilities.BoolConstraint.whenTrue.parameter.key"></a>

- *Type:* <a href="#@catnekaise/cdk-iam-utilities.ConditionKey">ConditionKey</a>

---

###### `ifExists`<sup>Optional</sup> <a name="ifExists" id="@catnekaise/cdk-iam-utilities.BoolConstraint.whenTrue.parameter.ifExists"></a>

- *Type:* boolean

---



### CalledViaConstraint <a name="CalledViaConstraint" id="@catnekaise/cdk-iam-utilities.CalledViaConstraint"></a>

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@catnekaise/cdk-iam-utilities.CalledViaConstraint.assemble">assemble</a></code> | *No description.* |

---

##### `assemble` <a name="assemble" id="@catnekaise/cdk-iam-utilities.CalledViaConstraint.assemble"></a>

```typescript
public assemble(scope: Construct, context: ConstraintAssembleContext): ConstraintPolicyMutation[]
```

###### `scope`<sup>Required</sup> <a name="scope" id="@catnekaise/cdk-iam-utilities.CalledViaConstraint.assemble.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `context`<sup>Required</sup> <a name="context" id="@catnekaise/cdk-iam-utilities.CalledViaConstraint.assemble.parameter.context"></a>

- *Type:* <a href="#@catnekaise/cdk-iam-utilities.ConstraintAssembleContext">ConstraintAssembleContext</a>

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@catnekaise/cdk-iam-utilities.CalledViaConstraint.calledVia">calledVia</a></code> | *No description.* |
| <code><a href="#@catnekaise/cdk-iam-utilities.CalledViaConstraint.calledViaFirst">calledViaFirst</a></code> | *No description.* |
| <code><a href="#@catnekaise/cdk-iam-utilities.CalledViaConstraint.calledViaFirstAndLast">calledViaFirstAndLast</a></code> | *No description.* |
| <code><a href="#@catnekaise/cdk-iam-utilities.CalledViaConstraint.calledViaLast">calledViaLast</a></code> | *No description.* |

---

##### `calledVia` <a name="calledVia" id="@catnekaise/cdk-iam-utilities.CalledViaConstraint.calledVia"></a>

```typescript
import { CalledViaConstraint } from '@catnekaise/cdk-iam-utilities'

CalledViaConstraint.calledVia(service: CalledViaServicePrincipal)
```

###### `service`<sup>Required</sup> <a name="service" id="@catnekaise/cdk-iam-utilities.CalledViaConstraint.calledVia.parameter.service"></a>

- *Type:* <a href="#@catnekaise/cdk-iam-utilities.CalledViaServicePrincipal">CalledViaServicePrincipal</a>

---

##### `calledViaFirst` <a name="calledViaFirst" id="@catnekaise/cdk-iam-utilities.CalledViaConstraint.calledViaFirst"></a>

```typescript
import { CalledViaConstraint } from '@catnekaise/cdk-iam-utilities'

CalledViaConstraint.calledViaFirst(service: CalledViaServicePrincipal)
```

###### `service`<sup>Required</sup> <a name="service" id="@catnekaise/cdk-iam-utilities.CalledViaConstraint.calledViaFirst.parameter.service"></a>

- *Type:* <a href="#@catnekaise/cdk-iam-utilities.CalledViaServicePrincipal">CalledViaServicePrincipal</a>

---

##### `calledViaFirstAndLast` <a name="calledViaFirstAndLast" id="@catnekaise/cdk-iam-utilities.CalledViaConstraint.calledViaFirstAndLast"></a>

```typescript
import { CalledViaConstraint } from '@catnekaise/cdk-iam-utilities'

CalledViaConstraint.calledViaFirstAndLast(firstService: CalledViaServicePrincipal, lastService: CalledViaServicePrincipal)
```

###### `firstService`<sup>Required</sup> <a name="firstService" id="@catnekaise/cdk-iam-utilities.CalledViaConstraint.calledViaFirstAndLast.parameter.firstService"></a>

- *Type:* <a href="#@catnekaise/cdk-iam-utilities.CalledViaServicePrincipal">CalledViaServicePrincipal</a>

---

###### `lastService`<sup>Required</sup> <a name="lastService" id="@catnekaise/cdk-iam-utilities.CalledViaConstraint.calledViaFirstAndLast.parameter.lastService"></a>

- *Type:* <a href="#@catnekaise/cdk-iam-utilities.CalledViaServicePrincipal">CalledViaServicePrincipal</a>

---

##### `calledViaLast` <a name="calledViaLast" id="@catnekaise/cdk-iam-utilities.CalledViaConstraint.calledViaLast"></a>

```typescript
import { CalledViaConstraint } from '@catnekaise/cdk-iam-utilities'

CalledViaConstraint.calledViaLast(service: CalledViaServicePrincipal)
```

###### `service`<sup>Required</sup> <a name="service" id="@catnekaise/cdk-iam-utilities.CalledViaConstraint.calledViaLast.parameter.service"></a>

- *Type:* <a href="#@catnekaise/cdk-iam-utilities.CalledViaServicePrincipal">CalledViaServicePrincipal</a>

---



### ClaimConstraint <a name="ClaimConstraint" id="@catnekaise/cdk-iam-utilities.ClaimConstraint"></a>

#### Initializers <a name="Initializers" id="@catnekaise/cdk-iam-utilities.ClaimConstraint.Initializer"></a>

```typescript
import { ClaimConstraint } from '@catnekaise/cdk-iam-utilities'

new ClaimConstraint(operator: ConditionOperator, claim: string, values: string[])
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@catnekaise/cdk-iam-utilities.ClaimConstraint.Initializer.parameter.operator">operator</a></code> | <code><a href="#@catnekaise/cdk-iam-utilities.ConditionOperator">ConditionOperator</a></code> | *No description.* |
| <code><a href="#@catnekaise/cdk-iam-utilities.ClaimConstraint.Initializer.parameter.claim">claim</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@catnekaise/cdk-iam-utilities.ClaimConstraint.Initializer.parameter.values">values</a></code> | <code>string[]</code> | *No description.* |

---

##### `operator`<sup>Required</sup> <a name="operator" id="@catnekaise/cdk-iam-utilities.ClaimConstraint.Initializer.parameter.operator"></a>

- *Type:* <a href="#@catnekaise/cdk-iam-utilities.ConditionOperator">ConditionOperator</a>

---

##### `claim`<sup>Required</sup> <a name="claim" id="@catnekaise/cdk-iam-utilities.ClaimConstraint.Initializer.parameter.claim"></a>

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="@catnekaise/cdk-iam-utilities.ClaimConstraint.Initializer.parameter.values"></a>

- *Type:* string[]

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@catnekaise/cdk-iam-utilities.ClaimConstraint.assemble">assemble</a></code> | *No description.* |

---

##### `assemble` <a name="assemble" id="@catnekaise/cdk-iam-utilities.ClaimConstraint.assemble"></a>

```typescript
public assemble(scope: Construct, context: ConstraintAssembleContext): ConstraintPolicyMutation[]
```

###### `scope`<sup>Required</sup> <a name="scope" id="@catnekaise/cdk-iam-utilities.ClaimConstraint.assemble.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `context`<sup>Required</sup> <a name="context" id="@catnekaise/cdk-iam-utilities.ClaimConstraint.assemble.parameter.context"></a>

- *Type:* <a href="#@catnekaise/cdk-iam-utilities.ConstraintAssembleContext">ConstraintAssembleContext</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@catnekaise/cdk-iam-utilities.ClaimConstraint.property.claim">claim</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@catnekaise/cdk-iam-utilities.ClaimConstraint.property.operator">operator</a></code> | <code><a href="#@catnekaise/cdk-iam-utilities.ConditionOperator">ConditionOperator</a></code> | *No description.* |
| <code><a href="#@catnekaise/cdk-iam-utilities.ClaimConstraint.property.values">values</a></code> | <code>string[]</code> | *No description.* |

---

##### `claim`<sup>Required</sup> <a name="claim" id="@catnekaise/cdk-iam-utilities.ClaimConstraint.property.claim"></a>

```typescript
public readonly claim: string;
```

- *Type:* string

---

##### `operator`<sup>Required</sup> <a name="operator" id="@catnekaise/cdk-iam-utilities.ClaimConstraint.property.operator"></a>

```typescript
public readonly operator: ConditionOperator;
```

- *Type:* <a href="#@catnekaise/cdk-iam-utilities.ConditionOperator">ConditionOperator</a>

---

##### `values`<sup>Required</sup> <a name="values" id="@catnekaise/cdk-iam-utilities.ClaimConstraint.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---


### ClaimsIamResourcePathBuilder <a name="ClaimsIamResourcePathBuilder" id="@catnekaise/cdk-iam-utilities.ClaimsIamResourcePathBuilder"></a>

#### Initializers <a name="Initializers" id="@catnekaise/cdk-iam-utilities.ClaimsIamResourcePathBuilder.Initializer"></a>

```typescript
import { ClaimsIamResourcePathBuilder } from '@catnekaise/cdk-iam-utilities'

new ClaimsIamResourcePathBuilder(options: ClaimsIamResourcePathBuilderSettings, path: string[])
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@catnekaise/cdk-iam-utilities.ClaimsIamResourcePathBuilder.Initializer.parameter.options">options</a></code> | <code><a href="#@catnekaise/cdk-iam-utilities.ClaimsIamResourcePathBuilderSettings">ClaimsIamResourcePathBuilderSettings</a></code> | *No description.* |
| <code><a href="#@catnekaise/cdk-iam-utilities.ClaimsIamResourcePathBuilder.Initializer.parameter.path">path</a></code> | <code>string[]</code> | *No description.* |

---

##### `options`<sup>Required</sup> <a name="options" id="@catnekaise/cdk-iam-utilities.ClaimsIamResourcePathBuilder.Initializer.parameter.options"></a>

- *Type:* <a href="#@catnekaise/cdk-iam-utilities.ClaimsIamResourcePathBuilderSettings">ClaimsIamResourcePathBuilderSettings</a>

---

##### `path`<sup>Required</sup> <a name="path" id="@catnekaise/cdk-iam-utilities.ClaimsIamResourcePathBuilder.Initializer.parameter.path"></a>

- *Type:* string[]

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@catnekaise/cdk-iam-utilities.ClaimsIamResourcePathBuilder.toString">toString</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@catnekaise/cdk-iam-utilities.ClaimsIamResourcePathBuilder.toString"></a>

```typescript
public toString(): string
```




### ClaimsUtility <a name="ClaimsUtility" id="@catnekaise/cdk-iam-utilities.ClaimsUtility"></a>

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@catnekaise/cdk-iam-utilities.ClaimsUtility.principalTagCondition">principalTagCondition</a></code> | *No description.* |
| <code><a href="#@catnekaise/cdk-iam-utilities.ClaimsUtility.requestTagCondition">requestTagCondition</a></code> | *No description.* |
| <code><a href="#@catnekaise/cdk-iam-utilities.ClaimsUtility.tagName">tagName</a></code> | *No description.* |
| <code><a href="#@catnekaise/cdk-iam-utilities.ClaimsUtility.tagNameForClaim">tagNameForClaim</a></code> | *No description.* |

---

##### `principalTagCondition` <a name="principalTagCondition" id="@catnekaise/cdk-iam-utilities.ClaimsUtility.principalTagCondition"></a>

```typescript
public principalTagCondition(claim: string): AwsPrincipalTagConditionKey
```

###### `claim`<sup>Required</sup> <a name="claim" id="@catnekaise/cdk-iam-utilities.ClaimsUtility.principalTagCondition.parameter.claim"></a>

- *Type:* string

---

##### `requestTagCondition` <a name="requestTagCondition" id="@catnekaise/cdk-iam-utilities.ClaimsUtility.requestTagCondition"></a>

```typescript
public requestTagCondition(claim: string): AwsRequestTagConditionKey
```

###### `claim`<sup>Required</sup> <a name="claim" id="@catnekaise/cdk-iam-utilities.ClaimsUtility.requestTagCondition.parameter.claim"></a>

- *Type:* string

---

##### `tagName` <a name="tagName" id="@catnekaise/cdk-iam-utilities.ClaimsUtility.tagName"></a>

```typescript
public tagName(scope: Construct, claim: string): string
```

###### `scope`<sup>Required</sup> <a name="scope" id="@catnekaise/cdk-iam-utilities.ClaimsUtility.tagName.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `claim`<sup>Required</sup> <a name="claim" id="@catnekaise/cdk-iam-utilities.ClaimsUtility.tagName.parameter.claim"></a>

- *Type:* string

---

##### `tagNameForClaim` <a name="tagNameForClaim" id="@catnekaise/cdk-iam-utilities.ClaimsUtility.tagNameForClaim"></a>

```typescript
public tagNameForClaim(claim: string): string
```

###### `claim`<sup>Required</sup> <a name="claim" id="@catnekaise/cdk-iam-utilities.ClaimsUtility.tagNameForClaim.parameter.claim"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@catnekaise/cdk-iam-utilities.ClaimsUtility.forContext">forContext</a></code> | *No description.* |

---

##### `forContext` <a name="forContext" id="@catnekaise/cdk-iam-utilities.ClaimsUtility.forContext"></a>

```typescript
import { ClaimsUtility } from '@catnekaise/cdk-iam-utilities'

ClaimsUtility.forContext(context: IClaimsContext)
```

###### `context`<sup>Required</sup> <a name="context" id="@catnekaise/cdk-iam-utilities.ClaimsUtility.forContext.parameter.context"></a>

- *Type:* <a href="#@catnekaise/cdk-iam-utilities.IClaimsContext">IClaimsContext</a>

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@catnekaise/cdk-iam-utilities.ClaimsUtility.property.knownClaims">knownClaims</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@catnekaise/cdk-iam-utilities.ClaimsUtility.property.mappedClaims">mappedClaims</a></code> | <code><a href="#@catnekaise/cdk-iam-utilities.IMappedClaims">IMappedClaims</a></code> | *No description.* |

---

##### `knownClaims`<sup>Required</sup> <a name="knownClaims" id="@catnekaise/cdk-iam-utilities.ClaimsUtility.property.knownClaims"></a>

```typescript
public readonly knownClaims: string[];
```

- *Type:* string[]

---

##### `mappedClaims`<sup>Required</sup> <a name="mappedClaims" id="@catnekaise/cdk-iam-utilities.ClaimsUtility.property.mappedClaims"></a>

```typescript
public readonly mappedClaims: IMappedClaims;
```

- *Type:* <a href="#@catnekaise/cdk-iam-utilities.IMappedClaims">IMappedClaims</a>

---


### ConditionKey <a name="ConditionKey" id="@catnekaise/cdk-iam-utilities.ConditionKey"></a>

#### Initializers <a name="Initializers" id="@catnekaise/cdk-iam-utilities.ConditionKey.Initializer"></a>

```typescript
import { ConditionKey } from '@catnekaise/cdk-iam-utilities'

new ConditionKey(name: string, settings: ConditionKeySettings)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@catnekaise/cdk-iam-utilities.ConditionKey.Initializer.parameter.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@catnekaise/cdk-iam-utilities.ConditionKey.Initializer.parameter.settings">settings</a></code> | <code><a href="#@catnekaise/cdk-iam-utilities.ConditionKeySettings">ConditionKeySettings</a></code> | *No description.* |

---

##### `name`<sup>Required</sup> <a name="name" id="@catnekaise/cdk-iam-utilities.ConditionKey.Initializer.parameter.name"></a>

- *Type:* string

---

##### `settings`<sup>Required</sup> <a name="settings" id="@catnekaise/cdk-iam-utilities.ConditionKey.Initializer.parameter.settings"></a>

- *Type:* <a href="#@catnekaise/cdk-iam-utilities.ConditionKeySettings">ConditionKeySettings</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@catnekaise/cdk-iam-utilities.ConditionKey.toString">toString</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@catnekaise/cdk-iam-utilities.ConditionKey.toString"></a>

```typescript
public toString(): string
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@catnekaise/cdk-iam-utilities.ConditionKey.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@catnekaise/cdk-iam-utilities.ConditionKey.property.settings">settings</a></code> | <code><a href="#@catnekaise/cdk-iam-utilities.ConditionKeySettings">ConditionKeySettings</a></code> | *No description.* |

---

##### `name`<sup>Required</sup> <a name="name" id="@catnekaise/cdk-iam-utilities.ConditionKey.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `settings`<sup>Required</sup> <a name="settings" id="@catnekaise/cdk-iam-utilities.ConditionKey.property.settings"></a>

```typescript
public readonly settings: ConditionKeySettings;
```

- *Type:* <a href="#@catnekaise/cdk-iam-utilities.ConditionKeySettings">ConditionKeySettings</a>

---


### Constraint <a name="Constraint" id="@catnekaise/cdk-iam-utilities.Constraint"></a>

#### Initializers <a name="Initializers" id="@catnekaise/cdk-iam-utilities.Constraint.Initializer"></a>

```typescript
import { Constraint } from '@catnekaise/cdk-iam-utilities'

new Constraint()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@catnekaise/cdk-iam-utilities.Constraint.assemble">assemble</a></code> | *No description.* |

---

##### `assemble` <a name="assemble" id="@catnekaise/cdk-iam-utilities.Constraint.assemble"></a>

```typescript
public assemble(scope: Construct, context: ConstraintAssembleContext): ConstraintPolicyMutation[]
```

###### `scope`<sup>Required</sup> <a name="scope" id="@catnekaise/cdk-iam-utilities.Constraint.assemble.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `context`<sup>Required</sup> <a name="context" id="@catnekaise/cdk-iam-utilities.Constraint.assemble.parameter.context"></a>

- *Type:* <a href="#@catnekaise/cdk-iam-utilities.ConstraintAssembleContext">ConstraintAssembleContext</a>

---




### ConstraintsBuilder <a name="ConstraintsBuilder" id="@catnekaise/cdk-iam-utilities.ConstraintsBuilder"></a>

- *Implements:* <a href="#@catnekaise/cdk-iam-utilities.IConstraintsBuilder">IConstraintsBuilder</a>

#### Initializers <a name="Initializers" id="@catnekaise/cdk-iam-utilities.ConstraintsBuilder.Initializer"></a>

```typescript
import { ConstraintsBuilder } from '@catnekaise/cdk-iam-utilities'

new ConstraintsBuilder(settings?: ConstraintsBuilderSettings)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@catnekaise/cdk-iam-utilities.ConstraintsBuilder.Initializer.parameter.settings">settings</a></code> | <code><a href="#@catnekaise/cdk-iam-utilities.ConstraintsBuilderSettings">ConstraintsBuilderSettings</a></code> | *No description.* |

---

##### `settings`<sup>Optional</sup> <a name="settings" id="@catnekaise/cdk-iam-utilities.ConstraintsBuilder.Initializer.parameter.settings"></a>

- *Type:* <a href="#@catnekaise/cdk-iam-utilities.ConstraintsBuilderSettings">ConstraintsBuilderSettings</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@catnekaise/cdk-iam-utilities.ConstraintsBuilder.add">add</a></code> | *No description.* |

---

##### `add` <a name="add" id="@catnekaise/cdk-iam-utilities.ConstraintsBuilder.add"></a>

```typescript
public add(constraint: Constraint, additionalConstraints: Constraint): ConstraintsBuilder
```

###### `constraint`<sup>Required</sup> <a name="constraint" id="@catnekaise/cdk-iam-utilities.ConstraintsBuilder.add.parameter.constraint"></a>

- *Type:* <a href="#@catnekaise/cdk-iam-utilities.Constraint">Constraint</a>

---

###### `additionalConstraints`<sup>Required</sup> <a name="additionalConstraints" id="@catnekaise/cdk-iam-utilities.ConstraintsBuilder.add.parameter.additionalConstraints"></a>

- *Type:* <a href="#@catnekaise/cdk-iam-utilities.Constraint">Constraint</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@catnekaise/cdk-iam-utilities.ConstraintsBuilder.property.constraints">constraints</a></code> | <code><a href="#@catnekaise/cdk-iam-utilities.Constraint">Constraint</a>[]</code> | *No description.* |
| <code><a href="#@catnekaise/cdk-iam-utilities.ConstraintsBuilder.property.settings">settings</a></code> | <code><a href="#@catnekaise/cdk-iam-utilities.ConstraintsBuilderSettings">ConstraintsBuilderSettings</a></code> | *No description.* |

---

##### `constraints`<sup>Required</sup> <a name="constraints" id="@catnekaise/cdk-iam-utilities.ConstraintsBuilder.property.constraints"></a>

```typescript
public readonly constraints: Constraint[];
```

- *Type:* <a href="#@catnekaise/cdk-iam-utilities.Constraint">Constraint</a>[]

---

##### `settings`<sup>Required</sup> <a name="settings" id="@catnekaise/cdk-iam-utilities.ConstraintsBuilder.property.settings"></a>

```typescript
public readonly settings: ConstraintsBuilderSettings;
```

- *Type:* <a href="#@catnekaise/cdk-iam-utilities.ConstraintsBuilderSettings">ConstraintsBuilderSettings</a>

---


### ConstraintsUtility <a name="ConstraintsUtility" id="@catnekaise/cdk-iam-utilities.ConstraintsUtility"></a>

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@catnekaise/cdk-iam-utilities.ConstraintsUtility.appendGrant">appendGrant</a></code> | *No description.* |
| <code><a href="#@catnekaise/cdk-iam-utilities.ConstraintsUtility.appendPolicy">appendPolicy</a></code> | *No description.* |

---

##### `appendGrant` <a name="appendGrant" id="@catnekaise/cdk-iam-utilities.ConstraintsUtility.appendGrant"></a>

```typescript
public appendGrant(scope: Construct, settings: ConstraintUtilitySettings, grant: Grant): void
```

###### `scope`<sup>Required</sup> <a name="scope" id="@catnekaise/cdk-iam-utilities.ConstraintsUtility.appendGrant.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `settings`<sup>Required</sup> <a name="settings" id="@catnekaise/cdk-iam-utilities.ConstraintsUtility.appendGrant.parameter.settings"></a>

- *Type:* <a href="#@catnekaise/cdk-iam-utilities.ConstraintUtilitySettings">ConstraintUtilitySettings</a>

---

###### `grant`<sup>Required</sup> <a name="grant" id="@catnekaise/cdk-iam-utilities.ConstraintsUtility.appendGrant.parameter.grant"></a>

- *Type:* aws-cdk-lib.aws_iam.Grant

---

##### `appendPolicy` <a name="appendPolicy" id="@catnekaise/cdk-iam-utilities.ConstraintsUtility.appendPolicy"></a>

```typescript
public appendPolicy(scope: Construct, settings: ConstraintUtilitySettings, policyStatement: PolicyStatement): void
```

###### `scope`<sup>Required</sup> <a name="scope" id="@catnekaise/cdk-iam-utilities.ConstraintsUtility.appendPolicy.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `settings`<sup>Required</sup> <a name="settings" id="@catnekaise/cdk-iam-utilities.ConstraintsUtility.appendPolicy.parameter.settings"></a>

- *Type:* <a href="#@catnekaise/cdk-iam-utilities.ConstraintUtilitySettings">ConstraintUtilitySettings</a>

---

###### `policyStatement`<sup>Required</sup> <a name="policyStatement" id="@catnekaise/cdk-iam-utilities.ConstraintsUtility.appendPolicy.parameter.policyStatement"></a>

- *Type:* aws-cdk-lib.aws_iam.PolicyStatement

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@catnekaise/cdk-iam-utilities.ConstraintsUtility.forConstraints">forConstraints</a></code> | *No description.* |

---

##### `forConstraints` <a name="forConstraints" id="@catnekaise/cdk-iam-utilities.ConstraintsUtility.forConstraints"></a>

```typescript
import { ConstraintsUtility } from '@catnekaise/cdk-iam-utilities'

ConstraintsUtility.forConstraints(constraints: Constraint[])
```

###### `constraints`<sup>Required</sup> <a name="constraints" id="@catnekaise/cdk-iam-utilities.ConstraintsUtility.forConstraints.parameter.constraints"></a>

- *Type:* <a href="#@catnekaise/cdk-iam-utilities.Constraint">Constraint</a>[]

---



### DateConstraint <a name="DateConstraint" id="@catnekaise/cdk-iam-utilities.DateConstraint"></a>

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@catnekaise/cdk-iam-utilities.DateConstraint.assemble">assemble</a></code> | *No description.* |

---

##### `assemble` <a name="assemble" id="@catnekaise/cdk-iam-utilities.DateConstraint.assemble"></a>

```typescript
public assemble(scope: Construct, context: ConstraintAssembleContext): ConstraintPolicyMutation[]
```

###### `scope`<sup>Required</sup> <a name="scope" id="@catnekaise/cdk-iam-utilities.DateConstraint.assemble.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `context`<sup>Required</sup> <a name="context" id="@catnekaise/cdk-iam-utilities.DateConstraint.assemble.parameter.context"></a>

- *Type:* <a href="#@catnekaise/cdk-iam-utilities.ConstraintAssembleContext">ConstraintAssembleContext</a>

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@catnekaise/cdk-iam-utilities.DateConstraint.betweenDates">betweenDates</a></code> | *No description.* |
| <code><a href="#@catnekaise/cdk-iam-utilities.DateConstraint.greaterThan">greaterThan</a></code> | *No description.* |
| <code><a href="#@catnekaise/cdk-iam-utilities.DateConstraint.lessThan">lessThan</a></code> | *No description.* |

---

##### `betweenDates` <a name="betweenDates" id="@catnekaise/cdk-iam-utilities.DateConstraint.betweenDates"></a>

```typescript
import { DateConstraint } from '@catnekaise/cdk-iam-utilities'

DateConstraint.betweenDates(key: ConditionKey, from: Date, to: Date)
```

###### `key`<sup>Required</sup> <a name="key" id="@catnekaise/cdk-iam-utilities.DateConstraint.betweenDates.parameter.key"></a>

- *Type:* <a href="#@catnekaise/cdk-iam-utilities.ConditionKey">ConditionKey</a>

---

###### `from`<sup>Required</sup> <a name="from" id="@catnekaise/cdk-iam-utilities.DateConstraint.betweenDates.parameter.from"></a>

- *Type:* Date

---

###### `to`<sup>Required</sup> <a name="to" id="@catnekaise/cdk-iam-utilities.DateConstraint.betweenDates.parameter.to"></a>

- *Type:* Date

---

##### `greaterThan` <a name="greaterThan" id="@catnekaise/cdk-iam-utilities.DateConstraint.greaterThan"></a>

```typescript
import { DateConstraint } from '@catnekaise/cdk-iam-utilities'

DateConstraint.greaterThan(key: ConditionKey, date: Date)
```

###### `key`<sup>Required</sup> <a name="key" id="@catnekaise/cdk-iam-utilities.DateConstraint.greaterThan.parameter.key"></a>

- *Type:* <a href="#@catnekaise/cdk-iam-utilities.ConditionKey">ConditionKey</a>

---

###### `date`<sup>Required</sup> <a name="date" id="@catnekaise/cdk-iam-utilities.DateConstraint.greaterThan.parameter.date"></a>

- *Type:* Date

---

##### `lessThan` <a name="lessThan" id="@catnekaise/cdk-iam-utilities.DateConstraint.lessThan"></a>

```typescript
import { DateConstraint } from '@catnekaise/cdk-iam-utilities'

DateConstraint.lessThan(key: ConditionKey, date: Date)
```

###### `key`<sup>Required</sup> <a name="key" id="@catnekaise/cdk-iam-utilities.DateConstraint.lessThan.parameter.key"></a>

- *Type:* <a href="#@catnekaise/cdk-iam-utilities.ConditionKey">ConditionKey</a>

---

###### `date`<sup>Required</sup> <a name="date" id="@catnekaise/cdk-iam-utilities.DateConstraint.lessThan.parameter.date"></a>

- *Type:* Date

---



### GenericClaimsIamResourcePathBuilder <a name="GenericClaimsIamResourcePathBuilder" id="@catnekaise/cdk-iam-utilities.GenericClaimsIamResourcePathBuilder"></a>

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@catnekaise/cdk-iam-utilities.GenericClaimsIamResourcePathBuilder.toString">toString</a></code> | *No description.* |
| <code><a href="#@catnekaise/cdk-iam-utilities.GenericClaimsIamResourcePathBuilder.claim">claim</a></code> | *No description.* |
| <code><a href="#@catnekaise/cdk-iam-utilities.GenericClaimsIamResourcePathBuilder.policyVariable">policyVariable</a></code> | *No description.* |
| <code><a href="#@catnekaise/cdk-iam-utilities.GenericClaimsIamResourcePathBuilder.text">text</a></code> | *No description.* |
| <code><a href="#@catnekaise/cdk-iam-utilities.GenericClaimsIamResourcePathBuilder.value">value</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@catnekaise/cdk-iam-utilities.GenericClaimsIamResourcePathBuilder.toString"></a>

```typescript
public toString(): string
```

##### `claim` <a name="claim" id="@catnekaise/cdk-iam-utilities.GenericClaimsIamResourcePathBuilder.claim"></a>

```typescript
public claim(claim: string, additionalClaims: string): GenericClaimsIamResourcePathBuilder
```

###### `claim`<sup>Required</sup> <a name="claim" id="@catnekaise/cdk-iam-utilities.GenericClaimsIamResourcePathBuilder.claim.parameter.claim"></a>

- *Type:* string

---

###### `additionalClaims`<sup>Required</sup> <a name="additionalClaims" id="@catnekaise/cdk-iam-utilities.GenericClaimsIamResourcePathBuilder.claim.parameter.additionalClaims"></a>

- *Type:* string

---

##### `policyVariable` <a name="policyVariable" id="@catnekaise/cdk-iam-utilities.GenericClaimsIamResourcePathBuilder.policyVariable"></a>

```typescript
public policyVariable(value: PolicyVariable): GenericClaimsIamResourcePathBuilder
```

###### `value`<sup>Required</sup> <a name="value" id="@catnekaise/cdk-iam-utilities.GenericClaimsIamResourcePathBuilder.policyVariable.parameter.value"></a>

- *Type:* <a href="#@catnekaise/cdk-iam-utilities.PolicyVariable">PolicyVariable</a>

---

##### `text` <a name="text" id="@catnekaise/cdk-iam-utilities.GenericClaimsIamResourcePathBuilder.text"></a>

```typescript
public text(value: string, additionalValues: string): GenericClaimsIamResourcePathBuilder
```

###### `value`<sup>Required</sup> <a name="value" id="@catnekaise/cdk-iam-utilities.GenericClaimsIamResourcePathBuilder.text.parameter.value"></a>

- *Type:* string

---

###### `additionalValues`<sup>Required</sup> <a name="additionalValues" id="@catnekaise/cdk-iam-utilities.GenericClaimsIamResourcePathBuilder.text.parameter.additionalValues"></a>

- *Type:* string

---

##### `value` <a name="value" id="@catnekaise/cdk-iam-utilities.GenericClaimsIamResourcePathBuilder.value"></a>

```typescript
public value(value: string, additionalValues: string): GenericClaimsIamResourcePathBuilder
```

###### `value`<sup>Required</sup> <a name="value" id="@catnekaise/cdk-iam-utilities.GenericClaimsIamResourcePathBuilder.value.parameter.value"></a>

- *Type:* string

---

###### `additionalValues`<sup>Required</sup> <a name="additionalValues" id="@catnekaise/cdk-iam-utilities.GenericClaimsIamResourcePathBuilder.value.parameter.additionalValues"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@catnekaise/cdk-iam-utilities.GenericClaimsIamResourcePathBuilder.create">create</a></code> | *No description.* |

---

##### `create` <a name="create" id="@catnekaise/cdk-iam-utilities.GenericClaimsIamResourcePathBuilder.create"></a>

```typescript
import { GenericClaimsIamResourcePathBuilder } from '@catnekaise/cdk-iam-utilities'

GenericClaimsIamResourcePathBuilder.create(claimsContext: IClaimsContext)
```

###### `claimsContext`<sup>Required</sup> <a name="claimsContext" id="@catnekaise/cdk-iam-utilities.GenericClaimsIamResourcePathBuilder.create.parameter.claimsContext"></a>

- *Type:* <a href="#@catnekaise/cdk-iam-utilities.IClaimsContext">IClaimsContext</a>

---



### GenericConditionKey <a name="GenericConditionKey" id="@catnekaise/cdk-iam-utilities.GenericConditionKey"></a>

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@catnekaise/cdk-iam-utilities.GenericConditionKey.toString">toString</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@catnekaise/cdk-iam-utilities.GenericConditionKey.toString"></a>

```typescript
public toString(): string
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@catnekaise/cdk-iam-utilities.GenericConditionKey.custom">custom</a></code> | *No description.* |

---

##### `custom` <a name="custom" id="@catnekaise/cdk-iam-utilities.GenericConditionKey.custom"></a>

```typescript
import { GenericConditionKey } from '@catnekaise/cdk-iam-utilities'

GenericConditionKey.custom(name: string, settings: ConditionKeySettings)
```

###### `name`<sup>Required</sup> <a name="name" id="@catnekaise/cdk-iam-utilities.GenericConditionKey.custom.parameter.name"></a>

- *Type:* string

---

###### `settings`<sup>Required</sup> <a name="settings" id="@catnekaise/cdk-iam-utilities.GenericConditionKey.custom.parameter.settings"></a>

- *Type:* <a href="#@catnekaise/cdk-iam-utilities.ConditionKeySettings">ConditionKeySettings</a>

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@catnekaise/cdk-iam-utilities.GenericConditionKey.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@catnekaise/cdk-iam-utilities.GenericConditionKey.property.settings">settings</a></code> | <code><a href="#@catnekaise/cdk-iam-utilities.ConditionKeySettings">ConditionKeySettings</a></code> | *No description.* |

---

##### `name`<sup>Required</sup> <a name="name" id="@catnekaise/cdk-iam-utilities.GenericConditionKey.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `settings`<sup>Required</sup> <a name="settings" id="@catnekaise/cdk-iam-utilities.GenericConditionKey.property.settings"></a>

```typescript
public readonly settings: ConditionKeySettings;
```

- *Type:* <a href="#@catnekaise/cdk-iam-utilities.ConditionKeySettings">ConditionKeySettings</a>

---


### GenericConstraint <a name="GenericConstraint" id="@catnekaise/cdk-iam-utilities.GenericConstraint"></a>

#### Initializers <a name="Initializers" id="@catnekaise/cdk-iam-utilities.GenericConstraint.Initializer"></a>

```typescript
import { GenericConstraint } from '@catnekaise/cdk-iam-utilities'

new GenericConstraint(operator: ConditionOperator, key: ConditionKey, value: string, additionalValues: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@catnekaise/cdk-iam-utilities.GenericConstraint.Initializer.parameter.operator">operator</a></code> | <code><a href="#@catnekaise/cdk-iam-utilities.ConditionOperator">ConditionOperator</a></code> | *No description.* |
| <code><a href="#@catnekaise/cdk-iam-utilities.GenericConstraint.Initializer.parameter.key">key</a></code> | <code><a href="#@catnekaise/cdk-iam-utilities.ConditionKey">ConditionKey</a></code> | *No description.* |
| <code><a href="#@catnekaise/cdk-iam-utilities.GenericConstraint.Initializer.parameter.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@catnekaise/cdk-iam-utilities.GenericConstraint.Initializer.parameter.additionalValues">additionalValues</a></code> | <code>string</code> | *No description.* |

---

##### `operator`<sup>Required</sup> <a name="operator" id="@catnekaise/cdk-iam-utilities.GenericConstraint.Initializer.parameter.operator"></a>

- *Type:* <a href="#@catnekaise/cdk-iam-utilities.ConditionOperator">ConditionOperator</a>

---

##### `key`<sup>Required</sup> <a name="key" id="@catnekaise/cdk-iam-utilities.GenericConstraint.Initializer.parameter.key"></a>

- *Type:* <a href="#@catnekaise/cdk-iam-utilities.ConditionKey">ConditionKey</a>

---

##### `value`<sup>Required</sup> <a name="value" id="@catnekaise/cdk-iam-utilities.GenericConstraint.Initializer.parameter.value"></a>

- *Type:* string

---

##### `additionalValues`<sup>Required</sup> <a name="additionalValues" id="@catnekaise/cdk-iam-utilities.GenericConstraint.Initializer.parameter.additionalValues"></a>

- *Type:* string

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@catnekaise/cdk-iam-utilities.GenericConstraint.assemble">assemble</a></code> | *No description.* |

---

##### `assemble` <a name="assemble" id="@catnekaise/cdk-iam-utilities.GenericConstraint.assemble"></a>

```typescript
public assemble(scope: Construct, context: ConstraintAssembleContext): ConstraintPolicyMutation[]
```

###### `scope`<sup>Required</sup> <a name="scope" id="@catnekaise/cdk-iam-utilities.GenericConstraint.assemble.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `context`<sup>Required</sup> <a name="context" id="@catnekaise/cdk-iam-utilities.GenericConstraint.assemble.parameter.context"></a>

- *Type:* <a href="#@catnekaise/cdk-iam-utilities.ConstraintAssembleContext">ConstraintAssembleContext</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@catnekaise/cdk-iam-utilities.GenericConstraint.property.key">key</a></code> | <code><a href="#@catnekaise/cdk-iam-utilities.ConditionKey">ConditionKey</a></code> | *No description.* |
| <code><a href="#@catnekaise/cdk-iam-utilities.GenericConstraint.property.operator">operator</a></code> | <code><a href="#@catnekaise/cdk-iam-utilities.ConditionOperator">ConditionOperator</a></code> | *No description.* |
| <code><a href="#@catnekaise/cdk-iam-utilities.GenericConstraint.property.value">value</a></code> | <code>string[]</code> | *No description.* |

---

##### `key`<sup>Required</sup> <a name="key" id="@catnekaise/cdk-iam-utilities.GenericConstraint.property.key"></a>

```typescript
public readonly key: ConditionKey;
```

- *Type:* <a href="#@catnekaise/cdk-iam-utilities.ConditionKey">ConditionKey</a>

---

##### `operator`<sup>Required</sup> <a name="operator" id="@catnekaise/cdk-iam-utilities.GenericConstraint.property.operator"></a>

```typescript
public readonly operator: ConditionOperator;
```

- *Type:* <a href="#@catnekaise/cdk-iam-utilities.ConditionOperator">ConditionOperator</a>

---

##### `value`<sup>Required</sup> <a name="value" id="@catnekaise/cdk-iam-utilities.GenericConstraint.property.value"></a>

```typescript
public readonly value: string[];
```

- *Type:* string[]

---


### GlobalBoolConditionKey <a name="GlobalBoolConditionKey" id="@catnekaise/cdk-iam-utilities.GlobalBoolConditionKey"></a>

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@catnekaise/cdk-iam-utilities.GlobalBoolConditionKey.toString">toString</a></code> | *No description.* |
| <code><a href="#@catnekaise/cdk-iam-utilities.GlobalBoolConditionKey.toBoolFalseConstraint">toBoolFalseConstraint</a></code> | *No description.* |
| <code><a href="#@catnekaise/cdk-iam-utilities.GlobalBoolConditionKey.toBoolTrueConstraint">toBoolTrueConstraint</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@catnekaise/cdk-iam-utilities.GlobalBoolConditionKey.toString"></a>

```typescript
public toString(): string
```

##### `toBoolFalseConstraint` <a name="toBoolFalseConstraint" id="@catnekaise/cdk-iam-utilities.GlobalBoolConditionKey.toBoolFalseConstraint"></a>

```typescript
public toBoolFalseConstraint(ifExists?: boolean): BoolConstraint
```

###### `ifExists`<sup>Optional</sup> <a name="ifExists" id="@catnekaise/cdk-iam-utilities.GlobalBoolConditionKey.toBoolFalseConstraint.parameter.ifExists"></a>

- *Type:* boolean

---

##### `toBoolTrueConstraint` <a name="toBoolTrueConstraint" id="@catnekaise/cdk-iam-utilities.GlobalBoolConditionKey.toBoolTrueConstraint"></a>

```typescript
public toBoolTrueConstraint(ifExists?: boolean): BoolConstraint
```

###### `ifExists`<sup>Optional</sup> <a name="ifExists" id="@catnekaise/cdk-iam-utilities.GlobalBoolConditionKey.toBoolTrueConstraint.parameter.ifExists"></a>

- *Type:* boolean

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@catnekaise/cdk-iam-utilities.GlobalBoolConditionKey.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@catnekaise/cdk-iam-utilities.GlobalBoolConditionKey.property.settings">settings</a></code> | <code><a href="#@catnekaise/cdk-iam-utilities.ConditionKeySettings">ConditionKeySettings</a></code> | *No description.* |

---

##### `name`<sup>Required</sup> <a name="name" id="@catnekaise/cdk-iam-utilities.GlobalBoolConditionKey.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `settings`<sup>Required</sup> <a name="settings" id="@catnekaise/cdk-iam-utilities.GlobalBoolConditionKey.property.settings"></a>

```typescript
public readonly settings: ConditionKeySettings;
```

- *Type:* <a href="#@catnekaise/cdk-iam-utilities.ConditionKeySettings">ConditionKeySettings</a>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@catnekaise/cdk-iam-utilities.GlobalBoolConditionKey.property.MultiFactorAuthPresent">MultiFactorAuthPresent</a></code> | <code><a href="#@catnekaise/cdk-iam-utilities.GlobalBoolConditionKey">GlobalBoolConditionKey</a></code> | *No description.* |
| <code><a href="#@catnekaise/cdk-iam-utilities.GlobalBoolConditionKey.property.PrincipalIsAWSService">PrincipalIsAWSService</a></code> | <code><a href="#@catnekaise/cdk-iam-utilities.GlobalBoolConditionKey">GlobalBoolConditionKey</a></code> | *No description.* |
| <code><a href="#@catnekaise/cdk-iam-utilities.GlobalBoolConditionKey.property.SecureTransport">SecureTransport</a></code> | <code><a href="#@catnekaise/cdk-iam-utilities.GlobalBoolConditionKey">GlobalBoolConditionKey</a></code> | *No description.* |
| <code><a href="#@catnekaise/cdk-iam-utilities.GlobalBoolConditionKey.property.ViaAWSService">ViaAWSService</a></code> | <code><a href="#@catnekaise/cdk-iam-utilities.GlobalBoolConditionKey">GlobalBoolConditionKey</a></code> | *No description.* |

---

##### `MultiFactorAuthPresent`<sup>Required</sup> <a name="MultiFactorAuthPresent" id="@catnekaise/cdk-iam-utilities.GlobalBoolConditionKey.property.MultiFactorAuthPresent"></a>

```typescript
public readonly MultiFactorAuthPresent: GlobalBoolConditionKey;
```

- *Type:* <a href="#@catnekaise/cdk-iam-utilities.GlobalBoolConditionKey">GlobalBoolConditionKey</a>

---

##### `PrincipalIsAWSService`<sup>Required</sup> <a name="PrincipalIsAWSService" id="@catnekaise/cdk-iam-utilities.GlobalBoolConditionKey.property.PrincipalIsAWSService"></a>

```typescript
public readonly PrincipalIsAWSService: GlobalBoolConditionKey;
```

- *Type:* <a href="#@catnekaise/cdk-iam-utilities.GlobalBoolConditionKey">GlobalBoolConditionKey</a>

---

##### `SecureTransport`<sup>Required</sup> <a name="SecureTransport" id="@catnekaise/cdk-iam-utilities.GlobalBoolConditionKey.property.SecureTransport"></a>

```typescript
public readonly SecureTransport: GlobalBoolConditionKey;
```

- *Type:* <a href="#@catnekaise/cdk-iam-utilities.GlobalBoolConditionKey">GlobalBoolConditionKey</a>

---

##### `ViaAWSService`<sup>Required</sup> <a name="ViaAWSService" id="@catnekaise/cdk-iam-utilities.GlobalBoolConditionKey.property.ViaAWSService"></a>

```typescript
public readonly ViaAWSService: GlobalBoolConditionKey;
```

- *Type:* <a href="#@catnekaise/cdk-iam-utilities.GlobalBoolConditionKey">GlobalBoolConditionKey</a>

---

### GlobalConditionKey <a name="GlobalConditionKey" id="@catnekaise/cdk-iam-utilities.GlobalConditionKey"></a>

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@catnekaise/cdk-iam-utilities.GlobalConditionKey.toString">toString</a></code> | *No description.* |
| <code><a href="#@catnekaise/cdk-iam-utilities.GlobalConditionKey.toConstraint">toConstraint</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@catnekaise/cdk-iam-utilities.GlobalConditionKey.toString"></a>

```typescript
public toString(): string
```

##### `toConstraint` <a name="toConstraint" id="@catnekaise/cdk-iam-utilities.GlobalConditionKey.toConstraint"></a>

```typescript
public toConstraint(operator: ConditionOperator, value: string, additionalValues: string): GenericConstraint
```

###### `operator`<sup>Required</sup> <a name="operator" id="@catnekaise/cdk-iam-utilities.GlobalConditionKey.toConstraint.parameter.operator"></a>

- *Type:* <a href="#@catnekaise/cdk-iam-utilities.ConditionOperator">ConditionOperator</a>

---

###### `value`<sup>Required</sup> <a name="value" id="@catnekaise/cdk-iam-utilities.GlobalConditionKey.toConstraint.parameter.value"></a>

- *Type:* string

---

###### `additionalValues`<sup>Required</sup> <a name="additionalValues" id="@catnekaise/cdk-iam-utilities.GlobalConditionKey.toConstraint.parameter.additionalValues"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@catnekaise/cdk-iam-utilities.GlobalConditionKey.principalTag">principalTag</a></code> | Use this key to compare the tag attached to the principal making the request with the tag that you specify in the policy. |
| <code><a href="#@catnekaise/cdk-iam-utilities.GlobalConditionKey.requestTag">requestTag</a></code> | Use this key to compare the tag key-value pair that was passed in the request with the tag pair that you specify in the policy. |
| <code><a href="#@catnekaise/cdk-iam-utilities.GlobalConditionKey.resourceTag">resourceTag</a></code> | Use this key to compare the tag key-value pair that you specify in the policy with the key-value pair attached to the resource. |

---

##### `principalTag` <a name="principalTag" id="@catnekaise/cdk-iam-utilities.GlobalConditionKey.principalTag"></a>

```typescript
import { GlobalConditionKey } from '@catnekaise/cdk-iam-utilities'

GlobalConditionKey.principalTag(tagName: string)
```

Use this key to compare the tag attached to the principal making the request with the tag that you specify in the policy.

###### `tagName`<sup>Required</sup> <a name="tagName" id="@catnekaise/cdk-iam-utilities.GlobalConditionKey.principalTag.parameter.tagName"></a>

- *Type:* string

---

##### `requestTag` <a name="requestTag" id="@catnekaise/cdk-iam-utilities.GlobalConditionKey.requestTag"></a>

```typescript
import { GlobalConditionKey } from '@catnekaise/cdk-iam-utilities'

GlobalConditionKey.requestTag(tagName: string)
```

Use this key to compare the tag key-value pair that was passed in the request with the tag pair that you specify in the policy.

###### `tagName`<sup>Required</sup> <a name="tagName" id="@catnekaise/cdk-iam-utilities.GlobalConditionKey.requestTag.parameter.tagName"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@catnekaise/cdk-iam-utilities.GlobalConditionKey.resourceTag"></a>

```typescript
import { GlobalConditionKey } from '@catnekaise/cdk-iam-utilities'

GlobalConditionKey.resourceTag(tagName: string)
```

Use this key to compare the tag key-value pair that you specify in the policy with the key-value pair attached to the resource.

###### `tagName`<sup>Required</sup> <a name="tagName" id="@catnekaise/cdk-iam-utilities.GlobalConditionKey.resourceTag.parameter.tagName"></a>

- *Type:* string

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@catnekaise/cdk-iam-utilities.GlobalConditionKey.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@catnekaise/cdk-iam-utilities.GlobalConditionKey.property.settings">settings</a></code> | <code><a href="#@catnekaise/cdk-iam-utilities.ConditionKeySettings">ConditionKeySettings</a></code> | *No description.* |

---

##### `name`<sup>Required</sup> <a name="name" id="@catnekaise/cdk-iam-utilities.GlobalConditionKey.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `settings`<sup>Required</sup> <a name="settings" id="@catnekaise/cdk-iam-utilities.GlobalConditionKey.property.settings"></a>

```typescript
public readonly settings: ConditionKeySettings;
```

- *Type:* <a href="#@catnekaise/cdk-iam-utilities.ConditionKeySettings">ConditionKeySettings</a>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@catnekaise/cdk-iam-utilities.GlobalConditionKey.property.CalledVia">CalledVia</a></code> | <code><a href="#@catnekaise/cdk-iam-utilities.GlobalConditionKey">GlobalConditionKey</a></code> | Use this key to compare the services in the policy with the services that made requests on behalf of the IAM principal (user or role). |
| <code><a href="#@catnekaise/cdk-iam-utilities.GlobalConditionKey.property.CalledViaFirst">CalledViaFirst</a></code> | <code><a href="#@catnekaise/cdk-iam-utilities.GlobalConditionKey">GlobalConditionKey</a></code> | Use this key to compare the services in the policy with the first service that made a request on behalf of the IAM principal (user or role). |
| <code><a href="#@catnekaise/cdk-iam-utilities.GlobalConditionKey.property.CalledViaLast">CalledViaLast</a></code> | <code><a href="#@catnekaise/cdk-iam-utilities.GlobalConditionKey">GlobalConditionKey</a></code> | Use this key to compare the services in the policy with the last service that made a request on behalf of the IAM principal (user or role). |
| <code><a href="#@catnekaise/cdk-iam-utilities.GlobalConditionKey.property.CurrentTime">CurrentTime</a></code> | <code><a href="#@catnekaise/cdk-iam-utilities.GlobalConditionKey">GlobalConditionKey</a></code> | Use this key to compare the date and time of the request with the date and time that you specify in the policy. |
| <code><a href="#@catnekaise/cdk-iam-utilities.GlobalConditionKey.property.Ec2InstanceSourcePrivateIPv4">Ec2InstanceSourcePrivateIPv4</a></code> | <code><a href="#@catnekaise/cdk-iam-utilities.GlobalConditionKey">GlobalConditionKey</a></code> | *No description.* |
| <code><a href="#@catnekaise/cdk-iam-utilities.GlobalConditionKey.property.Ec2InstanceSourceVpc">Ec2InstanceSourceVpc</a></code> | <code><a href="#@catnekaise/cdk-iam-utilities.GlobalConditionKey">GlobalConditionKey</a></code> | *No description.* |
| <code><a href="#@catnekaise/cdk-iam-utilities.GlobalConditionKey.property.EpochTime">EpochTime</a></code> | <code><a href="#@catnekaise/cdk-iam-utilities.GlobalConditionKey">GlobalConditionKey</a></code> | *No description.* |
| <code><a href="#@catnekaise/cdk-iam-utilities.GlobalConditionKey.property.FederatedProvider">FederatedProvider</a></code> | <code><a href="#@catnekaise/cdk-iam-utilities.AwsFederatedProviderConditionKey">AwsFederatedProviderConditionKey</a></code> | *No description.* |
| <code><a href="#@catnekaise/cdk-iam-utilities.GlobalConditionKey.property.MultiFactorAuthAge">MultiFactorAuthAge</a></code> | <code><a href="#@catnekaise/cdk-iam-utilities.GlobalConditionKey">GlobalConditionKey</a></code> | *No description.* |
| <code><a href="#@catnekaise/cdk-iam-utilities.GlobalConditionKey.property.MultiFactorAuthPresent">MultiFactorAuthPresent</a></code> | <code><a href="#@catnekaise/cdk-iam-utilities.GlobalBoolConditionKey">GlobalBoolConditionKey</a></code> | *No description.* |
| <code><a href="#@catnekaise/cdk-iam-utilities.GlobalConditionKey.property.PrincipalAccount">PrincipalAccount</a></code> | <code><a href="#@catnekaise/cdk-iam-utilities.GlobalConditionKey">GlobalConditionKey</a></code> | *No description.* |
| <code><a href="#@catnekaise/cdk-iam-utilities.GlobalConditionKey.property.PrincipalArn">PrincipalArn</a></code> | <code><a href="#@catnekaise/cdk-iam-utilities.GlobalConditionKey">GlobalConditionKey</a></code> | *No description.* |
| <code><a href="#@catnekaise/cdk-iam-utilities.GlobalConditionKey.property.PrincipalIsAWSService">PrincipalIsAWSService</a></code> | <code><a href="#@catnekaise/cdk-iam-utilities.GlobalBoolConditionKey">GlobalBoolConditionKey</a></code> | *No description.* |
| <code><a href="#@catnekaise/cdk-iam-utilities.GlobalConditionKey.property.PrincipalOrgID">PrincipalOrgID</a></code> | <code><a href="#@catnekaise/cdk-iam-utilities.GlobalConditionKey">GlobalConditionKey</a></code> | *No description.* |
| <code><a href="#@catnekaise/cdk-iam-utilities.GlobalConditionKey.property.PrincipalOrgPaths">PrincipalOrgPaths</a></code> | <code><a href="#@catnekaise/cdk-iam-utilities.GlobalConditionKey">GlobalConditionKey</a></code> | *No description.* |
| <code><a href="#@catnekaise/cdk-iam-utilities.GlobalConditionKey.property.PrincipalServiceName">PrincipalServiceName</a></code> | <code><a href="#@catnekaise/cdk-iam-utilities.GlobalConditionKey">GlobalConditionKey</a></code> | *No description.* |
| <code><a href="#@catnekaise/cdk-iam-utilities.GlobalConditionKey.property.PrincipalServiceNamesList">PrincipalServiceNamesList</a></code> | <code><a href="#@catnekaise/cdk-iam-utilities.GlobalConditionKey">GlobalConditionKey</a></code> | *No description.* |
| <code><a href="#@catnekaise/cdk-iam-utilities.GlobalConditionKey.property.PrincipalType">PrincipalType</a></code> | <code><a href="#@catnekaise/cdk-iam-utilities.GlobalConditionKey">GlobalConditionKey</a></code> | *No description.* |
| <code><a href="#@catnekaise/cdk-iam-utilities.GlobalConditionKey.property.Referer">Referer</a></code> | <code><a href="#@catnekaise/cdk-iam-utilities.GlobalConditionKey">GlobalConditionKey</a></code> | *No description.* |
| <code><a href="#@catnekaise/cdk-iam-utilities.GlobalConditionKey.property.RequestedRegion">RequestedRegion</a></code> | <code><a href="#@catnekaise/cdk-iam-utilities.GlobalConditionKey">GlobalConditionKey</a></code> | *No description.* |
| <code><a href="#@catnekaise/cdk-iam-utilities.GlobalConditionKey.property.ResourceAccount">ResourceAccount</a></code> | <code><a href="#@catnekaise/cdk-iam-utilities.GlobalConditionKey">GlobalConditionKey</a></code> | *No description.* |
| <code><a href="#@catnekaise/cdk-iam-utilities.GlobalConditionKey.property.ResourceOrgID">ResourceOrgID</a></code> | <code><a href="#@catnekaise/cdk-iam-utilities.GlobalConditionKey">GlobalConditionKey</a></code> | *No description.* |
| <code><a href="#@catnekaise/cdk-iam-utilities.GlobalConditionKey.property.ResourceOrgPaths">ResourceOrgPaths</a></code> | <code><a href="#@catnekaise/cdk-iam-utilities.GlobalConditionKey">GlobalConditionKey</a></code> | *No description.* |
| <code><a href="#@catnekaise/cdk-iam-utilities.GlobalConditionKey.property.SecureTransport">SecureTransport</a></code> | <code><a href="#@catnekaise/cdk-iam-utilities.GlobalBoolConditionKey">GlobalBoolConditionKey</a></code> | *No description.* |
| <code><a href="#@catnekaise/cdk-iam-utilities.GlobalConditionKey.property.SourceAccount">SourceAccount</a></code> | <code><a href="#@catnekaise/cdk-iam-utilities.GlobalConditionKey">GlobalConditionKey</a></code> | *No description.* |
| <code><a href="#@catnekaise/cdk-iam-utilities.GlobalConditionKey.property.SourceArn">SourceArn</a></code> | <code><a href="#@catnekaise/cdk-iam-utilities.GlobalConditionKey">GlobalConditionKey</a></code> | *No description.* |
| <code><a href="#@catnekaise/cdk-iam-utilities.GlobalConditionKey.property.SourceIdentity">SourceIdentity</a></code> | <code><a href="#@catnekaise/cdk-iam-utilities.GlobalConditionKey">GlobalConditionKey</a></code> | *No description.* |
| <code><a href="#@catnekaise/cdk-iam-utilities.GlobalConditionKey.property.SourceIp">SourceIp</a></code> | <code><a href="#@catnekaise/cdk-iam-utilities.GlobalConditionKey">GlobalConditionKey</a></code> | *No description.* |
| <code><a href="#@catnekaise/cdk-iam-utilities.GlobalConditionKey.property.SourceOrgID">SourceOrgID</a></code> | <code><a href="#@catnekaise/cdk-iam-utilities.GlobalConditionKey">GlobalConditionKey</a></code> | *No description.* |
| <code><a href="#@catnekaise/cdk-iam-utilities.GlobalConditionKey.property.SourceOrgPaths">SourceOrgPaths</a></code> | <code><a href="#@catnekaise/cdk-iam-utilities.GlobalConditionKey">GlobalConditionKey</a></code> | *No description.* |
| <code><a href="#@catnekaise/cdk-iam-utilities.GlobalConditionKey.property.SourceVpc">SourceVpc</a></code> | <code><a href="#@catnekaise/cdk-iam-utilities.AwsSourceVpcConditionKey">AwsSourceVpcConditionKey</a></code> | *No description.* |
| <code><a href="#@catnekaise/cdk-iam-utilities.GlobalConditionKey.property.SourceVpce">SourceVpce</a></code> | <code><a href="#@catnekaise/cdk-iam-utilities.GlobalConditionKey">GlobalConditionKey</a></code> | *No description.* |
| <code><a href="#@catnekaise/cdk-iam-utilities.GlobalConditionKey.property.TagKeys">TagKeys</a></code> | <code><a href="#@catnekaise/cdk-iam-utilities.GlobalConditionKey">GlobalConditionKey</a></code> | *No description.* |
| <code><a href="#@catnekaise/cdk-iam-utilities.GlobalConditionKey.property.TokenIssueTime">TokenIssueTime</a></code> | <code><a href="#@catnekaise/cdk-iam-utilities.GlobalConditionKey">GlobalConditionKey</a></code> | *No description.* |
| <code><a href="#@catnekaise/cdk-iam-utilities.GlobalConditionKey.property.UserAgent">UserAgent</a></code> | <code><a href="#@catnekaise/cdk-iam-utilities.GlobalConditionKey">GlobalConditionKey</a></code> | *No description.* |
| <code><a href="#@catnekaise/cdk-iam-utilities.GlobalConditionKey.property.Userid">Userid</a></code> | <code><a href="#@catnekaise/cdk-iam-utilities.GlobalConditionKey">GlobalConditionKey</a></code> | *No description.* |
| <code><a href="#@catnekaise/cdk-iam-utilities.GlobalConditionKey.property.Username">Username</a></code> | <code><a href="#@catnekaise/cdk-iam-utilities.GlobalConditionKey">GlobalConditionKey</a></code> | *No description.* |
| <code><a href="#@catnekaise/cdk-iam-utilities.GlobalConditionKey.property.ViaAWSService">ViaAWSService</a></code> | <code><a href="#@catnekaise/cdk-iam-utilities.GlobalBoolConditionKey">GlobalBoolConditionKey</a></code> | *No description.* |
| <code><a href="#@catnekaise/cdk-iam-utilities.GlobalConditionKey.property.VpcSourceIp">VpcSourceIp</a></code> | <code><a href="#@catnekaise/cdk-iam-utilities.GlobalConditionKey">GlobalConditionKey</a></code> | *No description.* |

---

##### `CalledVia`<sup>Required</sup> <a name="CalledVia" id="@catnekaise/cdk-iam-utilities.GlobalConditionKey.property.CalledVia"></a>

```typescript
public readonly CalledVia: GlobalConditionKey;
```

- *Type:* <a href="#@catnekaise/cdk-iam-utilities.GlobalConditionKey">GlobalConditionKey</a>

Use this key to compare the services in the policy with the services that made requests on behalf of the IAM principal (user or role).

---

##### `CalledViaFirst`<sup>Required</sup> <a name="CalledViaFirst" id="@catnekaise/cdk-iam-utilities.GlobalConditionKey.property.CalledViaFirst"></a>

```typescript
public readonly CalledViaFirst: GlobalConditionKey;
```

- *Type:* <a href="#@catnekaise/cdk-iam-utilities.GlobalConditionKey">GlobalConditionKey</a>

Use this key to compare the services in the policy with the first service that made a request on behalf of the IAM principal (user or role).

---

##### `CalledViaLast`<sup>Required</sup> <a name="CalledViaLast" id="@catnekaise/cdk-iam-utilities.GlobalConditionKey.property.CalledViaLast"></a>

```typescript
public readonly CalledViaLast: GlobalConditionKey;
```

- *Type:* <a href="#@catnekaise/cdk-iam-utilities.GlobalConditionKey">GlobalConditionKey</a>

Use this key to compare the services in the policy with the last service that made a request on behalf of the IAM principal (user or role).

---

##### `CurrentTime`<sup>Required</sup> <a name="CurrentTime" id="@catnekaise/cdk-iam-utilities.GlobalConditionKey.property.CurrentTime"></a>

```typescript
public readonly CurrentTime: GlobalConditionKey;
```

- *Type:* <a href="#@catnekaise/cdk-iam-utilities.GlobalConditionKey">GlobalConditionKey</a>

Use this key to compare the date and time of the request with the date and time that you specify in the policy.

---

##### `Ec2InstanceSourcePrivateIPv4`<sup>Required</sup> <a name="Ec2InstanceSourcePrivateIPv4" id="@catnekaise/cdk-iam-utilities.GlobalConditionKey.property.Ec2InstanceSourcePrivateIPv4"></a>

```typescript
public readonly Ec2InstanceSourcePrivateIPv4: GlobalConditionKey;
```

- *Type:* <a href="#@catnekaise/cdk-iam-utilities.GlobalConditionKey">GlobalConditionKey</a>

---

##### `Ec2InstanceSourceVpc`<sup>Required</sup> <a name="Ec2InstanceSourceVpc" id="@catnekaise/cdk-iam-utilities.GlobalConditionKey.property.Ec2InstanceSourceVpc"></a>

```typescript
public readonly Ec2InstanceSourceVpc: GlobalConditionKey;
```

- *Type:* <a href="#@catnekaise/cdk-iam-utilities.GlobalConditionKey">GlobalConditionKey</a>

---

##### `EpochTime`<sup>Required</sup> <a name="EpochTime" id="@catnekaise/cdk-iam-utilities.GlobalConditionKey.property.EpochTime"></a>

```typescript
public readonly EpochTime: GlobalConditionKey;
```

- *Type:* <a href="#@catnekaise/cdk-iam-utilities.GlobalConditionKey">GlobalConditionKey</a>

---

##### `FederatedProvider`<sup>Required</sup> <a name="FederatedProvider" id="@catnekaise/cdk-iam-utilities.GlobalConditionKey.property.FederatedProvider"></a>

```typescript
public readonly FederatedProvider: AwsFederatedProviderConditionKey;
```

- *Type:* <a href="#@catnekaise/cdk-iam-utilities.AwsFederatedProviderConditionKey">AwsFederatedProviderConditionKey</a>

---

##### `MultiFactorAuthAge`<sup>Required</sup> <a name="MultiFactorAuthAge" id="@catnekaise/cdk-iam-utilities.GlobalConditionKey.property.MultiFactorAuthAge"></a>

```typescript
public readonly MultiFactorAuthAge: GlobalConditionKey;
```

- *Type:* <a href="#@catnekaise/cdk-iam-utilities.GlobalConditionKey">GlobalConditionKey</a>

---

##### `MultiFactorAuthPresent`<sup>Required</sup> <a name="MultiFactorAuthPresent" id="@catnekaise/cdk-iam-utilities.GlobalConditionKey.property.MultiFactorAuthPresent"></a>

```typescript
public readonly MultiFactorAuthPresent: GlobalBoolConditionKey;
```

- *Type:* <a href="#@catnekaise/cdk-iam-utilities.GlobalBoolConditionKey">GlobalBoolConditionKey</a>

---

##### `PrincipalAccount`<sup>Required</sup> <a name="PrincipalAccount" id="@catnekaise/cdk-iam-utilities.GlobalConditionKey.property.PrincipalAccount"></a>

```typescript
public readonly PrincipalAccount: GlobalConditionKey;
```

- *Type:* <a href="#@catnekaise/cdk-iam-utilities.GlobalConditionKey">GlobalConditionKey</a>

---

##### `PrincipalArn`<sup>Required</sup> <a name="PrincipalArn" id="@catnekaise/cdk-iam-utilities.GlobalConditionKey.property.PrincipalArn"></a>

```typescript
public readonly PrincipalArn: GlobalConditionKey;
```

- *Type:* <a href="#@catnekaise/cdk-iam-utilities.GlobalConditionKey">GlobalConditionKey</a>

---

##### `PrincipalIsAWSService`<sup>Required</sup> <a name="PrincipalIsAWSService" id="@catnekaise/cdk-iam-utilities.GlobalConditionKey.property.PrincipalIsAWSService"></a>

```typescript
public readonly PrincipalIsAWSService: GlobalBoolConditionKey;
```

- *Type:* <a href="#@catnekaise/cdk-iam-utilities.GlobalBoolConditionKey">GlobalBoolConditionKey</a>

---

##### `PrincipalOrgID`<sup>Required</sup> <a name="PrincipalOrgID" id="@catnekaise/cdk-iam-utilities.GlobalConditionKey.property.PrincipalOrgID"></a>

```typescript
public readonly PrincipalOrgID: GlobalConditionKey;
```

- *Type:* <a href="#@catnekaise/cdk-iam-utilities.GlobalConditionKey">GlobalConditionKey</a>

---

##### `PrincipalOrgPaths`<sup>Required</sup> <a name="PrincipalOrgPaths" id="@catnekaise/cdk-iam-utilities.GlobalConditionKey.property.PrincipalOrgPaths"></a>

```typescript
public readonly PrincipalOrgPaths: GlobalConditionKey;
```

- *Type:* <a href="#@catnekaise/cdk-iam-utilities.GlobalConditionKey">GlobalConditionKey</a>

---

##### `PrincipalServiceName`<sup>Required</sup> <a name="PrincipalServiceName" id="@catnekaise/cdk-iam-utilities.GlobalConditionKey.property.PrincipalServiceName"></a>

```typescript
public readonly PrincipalServiceName: GlobalConditionKey;
```

- *Type:* <a href="#@catnekaise/cdk-iam-utilities.GlobalConditionKey">GlobalConditionKey</a>

---

##### `PrincipalServiceNamesList`<sup>Required</sup> <a name="PrincipalServiceNamesList" id="@catnekaise/cdk-iam-utilities.GlobalConditionKey.property.PrincipalServiceNamesList"></a>

```typescript
public readonly PrincipalServiceNamesList: GlobalConditionKey;
```

- *Type:* <a href="#@catnekaise/cdk-iam-utilities.GlobalConditionKey">GlobalConditionKey</a>

---

##### `PrincipalType`<sup>Required</sup> <a name="PrincipalType" id="@catnekaise/cdk-iam-utilities.GlobalConditionKey.property.PrincipalType"></a>

```typescript
public readonly PrincipalType: GlobalConditionKey;
```

- *Type:* <a href="#@catnekaise/cdk-iam-utilities.GlobalConditionKey">GlobalConditionKey</a>

---

##### `Referer`<sup>Required</sup> <a name="Referer" id="@catnekaise/cdk-iam-utilities.GlobalConditionKey.property.Referer"></a>

```typescript
public readonly Referer: GlobalConditionKey;
```

- *Type:* <a href="#@catnekaise/cdk-iam-utilities.GlobalConditionKey">GlobalConditionKey</a>

---

##### `RequestedRegion`<sup>Required</sup> <a name="RequestedRegion" id="@catnekaise/cdk-iam-utilities.GlobalConditionKey.property.RequestedRegion"></a>

```typescript
public readonly RequestedRegion: GlobalConditionKey;
```

- *Type:* <a href="#@catnekaise/cdk-iam-utilities.GlobalConditionKey">GlobalConditionKey</a>

---

##### `ResourceAccount`<sup>Required</sup> <a name="ResourceAccount" id="@catnekaise/cdk-iam-utilities.GlobalConditionKey.property.ResourceAccount"></a>

```typescript
public readonly ResourceAccount: GlobalConditionKey;
```

- *Type:* <a href="#@catnekaise/cdk-iam-utilities.GlobalConditionKey">GlobalConditionKey</a>

---

##### `ResourceOrgID`<sup>Required</sup> <a name="ResourceOrgID" id="@catnekaise/cdk-iam-utilities.GlobalConditionKey.property.ResourceOrgID"></a>

```typescript
public readonly ResourceOrgID: GlobalConditionKey;
```

- *Type:* <a href="#@catnekaise/cdk-iam-utilities.GlobalConditionKey">GlobalConditionKey</a>

---

##### `ResourceOrgPaths`<sup>Required</sup> <a name="ResourceOrgPaths" id="@catnekaise/cdk-iam-utilities.GlobalConditionKey.property.ResourceOrgPaths"></a>

```typescript
public readonly ResourceOrgPaths: GlobalConditionKey;
```

- *Type:* <a href="#@catnekaise/cdk-iam-utilities.GlobalConditionKey">GlobalConditionKey</a>

---

##### `SecureTransport`<sup>Required</sup> <a name="SecureTransport" id="@catnekaise/cdk-iam-utilities.GlobalConditionKey.property.SecureTransport"></a>

```typescript
public readonly SecureTransport: GlobalBoolConditionKey;
```

- *Type:* <a href="#@catnekaise/cdk-iam-utilities.GlobalBoolConditionKey">GlobalBoolConditionKey</a>

---

##### `SourceAccount`<sup>Required</sup> <a name="SourceAccount" id="@catnekaise/cdk-iam-utilities.GlobalConditionKey.property.SourceAccount"></a>

```typescript
public readonly SourceAccount: GlobalConditionKey;
```

- *Type:* <a href="#@catnekaise/cdk-iam-utilities.GlobalConditionKey">GlobalConditionKey</a>

---

##### `SourceArn`<sup>Required</sup> <a name="SourceArn" id="@catnekaise/cdk-iam-utilities.GlobalConditionKey.property.SourceArn"></a>

```typescript
public readonly SourceArn: GlobalConditionKey;
```

- *Type:* <a href="#@catnekaise/cdk-iam-utilities.GlobalConditionKey">GlobalConditionKey</a>

---

##### `SourceIdentity`<sup>Required</sup> <a name="SourceIdentity" id="@catnekaise/cdk-iam-utilities.GlobalConditionKey.property.SourceIdentity"></a>

```typescript
public readonly SourceIdentity: GlobalConditionKey;
```

- *Type:* <a href="#@catnekaise/cdk-iam-utilities.GlobalConditionKey">GlobalConditionKey</a>

---

##### `SourceIp`<sup>Required</sup> <a name="SourceIp" id="@catnekaise/cdk-iam-utilities.GlobalConditionKey.property.SourceIp"></a>

```typescript
public readonly SourceIp: GlobalConditionKey;
```

- *Type:* <a href="#@catnekaise/cdk-iam-utilities.GlobalConditionKey">GlobalConditionKey</a>

---

##### `SourceOrgID`<sup>Required</sup> <a name="SourceOrgID" id="@catnekaise/cdk-iam-utilities.GlobalConditionKey.property.SourceOrgID"></a>

```typescript
public readonly SourceOrgID: GlobalConditionKey;
```

- *Type:* <a href="#@catnekaise/cdk-iam-utilities.GlobalConditionKey">GlobalConditionKey</a>

---

##### `SourceOrgPaths`<sup>Required</sup> <a name="SourceOrgPaths" id="@catnekaise/cdk-iam-utilities.GlobalConditionKey.property.SourceOrgPaths"></a>

```typescript
public readonly SourceOrgPaths: GlobalConditionKey;
```

- *Type:* <a href="#@catnekaise/cdk-iam-utilities.GlobalConditionKey">GlobalConditionKey</a>

---

##### `SourceVpc`<sup>Required</sup> <a name="SourceVpc" id="@catnekaise/cdk-iam-utilities.GlobalConditionKey.property.SourceVpc"></a>

```typescript
public readonly SourceVpc: AwsSourceVpcConditionKey;
```

- *Type:* <a href="#@catnekaise/cdk-iam-utilities.AwsSourceVpcConditionKey">AwsSourceVpcConditionKey</a>

---

##### `SourceVpce`<sup>Required</sup> <a name="SourceVpce" id="@catnekaise/cdk-iam-utilities.GlobalConditionKey.property.SourceVpce"></a>

```typescript
public readonly SourceVpce: GlobalConditionKey;
```

- *Type:* <a href="#@catnekaise/cdk-iam-utilities.GlobalConditionKey">GlobalConditionKey</a>

---

##### `TagKeys`<sup>Required</sup> <a name="TagKeys" id="@catnekaise/cdk-iam-utilities.GlobalConditionKey.property.TagKeys"></a>

```typescript
public readonly TagKeys: GlobalConditionKey;
```

- *Type:* <a href="#@catnekaise/cdk-iam-utilities.GlobalConditionKey">GlobalConditionKey</a>

---

##### `TokenIssueTime`<sup>Required</sup> <a name="TokenIssueTime" id="@catnekaise/cdk-iam-utilities.GlobalConditionKey.property.TokenIssueTime"></a>

```typescript
public readonly TokenIssueTime: GlobalConditionKey;
```

- *Type:* <a href="#@catnekaise/cdk-iam-utilities.GlobalConditionKey">GlobalConditionKey</a>

---

##### `UserAgent`<sup>Required</sup> <a name="UserAgent" id="@catnekaise/cdk-iam-utilities.GlobalConditionKey.property.UserAgent"></a>

```typescript
public readonly UserAgent: GlobalConditionKey;
```

- *Type:* <a href="#@catnekaise/cdk-iam-utilities.GlobalConditionKey">GlobalConditionKey</a>

---

##### `Userid`<sup>Required</sup> <a name="Userid" id="@catnekaise/cdk-iam-utilities.GlobalConditionKey.property.Userid"></a>

```typescript
public readonly Userid: GlobalConditionKey;
```

- *Type:* <a href="#@catnekaise/cdk-iam-utilities.GlobalConditionKey">GlobalConditionKey</a>

---

##### `Username`<sup>Required</sup> <a name="Username" id="@catnekaise/cdk-iam-utilities.GlobalConditionKey.property.Username"></a>

```typescript
public readonly Username: GlobalConditionKey;
```

- *Type:* <a href="#@catnekaise/cdk-iam-utilities.GlobalConditionKey">GlobalConditionKey</a>

---

##### `ViaAWSService`<sup>Required</sup> <a name="ViaAWSService" id="@catnekaise/cdk-iam-utilities.GlobalConditionKey.property.ViaAWSService"></a>

```typescript
public readonly ViaAWSService: GlobalBoolConditionKey;
```

- *Type:* <a href="#@catnekaise/cdk-iam-utilities.GlobalBoolConditionKey">GlobalBoolConditionKey</a>

---

##### `VpcSourceIp`<sup>Required</sup> <a name="VpcSourceIp" id="@catnekaise/cdk-iam-utilities.GlobalConditionKey.property.VpcSourceIp"></a>

```typescript
public readonly VpcSourceIp: GlobalConditionKey;
```

- *Type:* <a href="#@catnekaise/cdk-iam-utilities.GlobalConditionKey">GlobalConditionKey</a>

---

### IamResourcePathBuilder <a name="IamResourcePathBuilder" id="@catnekaise/cdk-iam-utilities.IamResourcePathBuilder"></a>

- *Implements:* <a href="#@catnekaise/cdk-iam-utilities.IIamResourcePath">IIamResourcePath</a>

#### Initializers <a name="Initializers" id="@catnekaise/cdk-iam-utilities.IamResourcePathBuilder.Initializer"></a>

```typescript
import { IamResourcePathBuilder } from '@catnekaise/cdk-iam-utilities'

new IamResourcePathBuilder(path: string[])
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@catnekaise/cdk-iam-utilities.IamResourcePathBuilder.Initializer.parameter.path">path</a></code> | <code>string[]</code> | *No description.* |

---

##### `path`<sup>Required</sup> <a name="path" id="@catnekaise/cdk-iam-utilities.IamResourcePathBuilder.Initializer.parameter.path"></a>

- *Type:* string[]

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@catnekaise/cdk-iam-utilities.IamResourcePathBuilder.toString">toString</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@catnekaise/cdk-iam-utilities.IamResourcePathBuilder.toString"></a>

```typescript
public toString(): string
```




### IamResourceTagConditionKey <a name="IamResourceTagConditionKey" id="@catnekaise/cdk-iam-utilities.IamResourceTagConditionKey"></a>

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@catnekaise/cdk-iam-utilities.IamResourceTagConditionKey.toString">toString</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@catnekaise/cdk-iam-utilities.IamResourceTagConditionKey.toString"></a>

```typescript
public toString(): string
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@catnekaise/cdk-iam-utilities.IamResourceTagConditionKey.tag">tag</a></code> | *No description.* |

---

##### `tag` <a name="tag" id="@catnekaise/cdk-iam-utilities.IamResourceTagConditionKey.tag"></a>

```typescript
import { IamResourceTagConditionKey } from '@catnekaise/cdk-iam-utilities'

IamResourceTagConditionKey.tag(tagName: string)
```

###### `tagName`<sup>Required</sup> <a name="tagName" id="@catnekaise/cdk-iam-utilities.IamResourceTagConditionKey.tag.parameter.tagName"></a>

- *Type:* string

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@catnekaise/cdk-iam-utilities.IamResourceTagConditionKey.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@catnekaise/cdk-iam-utilities.IamResourceTagConditionKey.property.settings">settings</a></code> | <code><a href="#@catnekaise/cdk-iam-utilities.ConditionKeySettings">ConditionKeySettings</a></code> | *No description.* |

---

##### `name`<sup>Required</sup> <a name="name" id="@catnekaise/cdk-iam-utilities.IamResourceTagConditionKey.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `settings`<sup>Required</sup> <a name="settings" id="@catnekaise/cdk-iam-utilities.IamResourceTagConditionKey.property.settings"></a>

```typescript
public readonly settings: ConditionKeySettings;
```

- *Type:* <a href="#@catnekaise/cdk-iam-utilities.ConditionKeySettings">ConditionKeySettings</a>

---


### MappedClaims <a name="MappedClaims" id="@catnekaise/cdk-iam-utilities.MappedClaims"></a>

- *Implements:* <a href="#@catnekaise/cdk-iam-utilities.IMappedClaims">IMappedClaims</a>


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@catnekaise/cdk-iam-utilities.MappedClaims.create">create</a></code> | *No description.* |
| <code><a href="#@catnekaise/cdk-iam-utilities.MappedClaims.createMapped">createMapped</a></code> | *No description.* |

---

##### `create` <a name="create" id="@catnekaise/cdk-iam-utilities.MappedClaims.create"></a>

```typescript
import { MappedClaims } from '@catnekaise/cdk-iam-utilities'

MappedClaims.create(claim: string, additionalClaims: string)
```

###### `claim`<sup>Required</sup> <a name="claim" id="@catnekaise/cdk-iam-utilities.MappedClaims.create.parameter.claim"></a>

- *Type:* string

---

###### `additionalClaims`<sup>Required</sup> <a name="additionalClaims" id="@catnekaise/cdk-iam-utilities.MappedClaims.create.parameter.additionalClaims"></a>

- *Type:* string

---

##### `createMapped` <a name="createMapped" id="@catnekaise/cdk-iam-utilities.MappedClaims.createMapped"></a>

```typescript
import { MappedClaims } from '@catnekaise/cdk-iam-utilities'

MappedClaims.createMapped(claims: {[ key: string ]: string})
```

###### `claims`<sup>Required</sup> <a name="claims" id="@catnekaise/cdk-iam-utilities.MappedClaims.createMapped.parameter.claims"></a>

- *Type:* {[ key: string ]: string}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@catnekaise/cdk-iam-utilities.MappedClaims.property.claims">claims</a></code> | <code><a href="#@catnekaise/cdk-iam-utilities.Claim">Claim</a>[]</code> | *No description.* |

---

##### `claims`<sup>Required</sup> <a name="claims" id="@catnekaise/cdk-iam-utilities.MappedClaims.property.claims"></a>

```typescript
public readonly claims: Claim[];
```

- *Type:* <a href="#@catnekaise/cdk-iam-utilities.Claim">Claim</a>[]

---


### NullConstraint <a name="NullConstraint" id="@catnekaise/cdk-iam-utilities.NullConstraint"></a>

#### Initializers <a name="Initializers" id="@catnekaise/cdk-iam-utilities.NullConstraint.Initializer"></a>

```typescript
import { NullConstraint } from '@catnekaise/cdk-iam-utilities'

new NullConstraint(key: ConditionKey, isNull: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@catnekaise/cdk-iam-utilities.NullConstraint.Initializer.parameter.key">key</a></code> | <code><a href="#@catnekaise/cdk-iam-utilities.ConditionKey">ConditionKey</a></code> | *No description.* |
| <code><a href="#@catnekaise/cdk-iam-utilities.NullConstraint.Initializer.parameter.isNull">isNull</a></code> | <code>boolean</code> | *No description.* |

---

##### `key`<sup>Required</sup> <a name="key" id="@catnekaise/cdk-iam-utilities.NullConstraint.Initializer.parameter.key"></a>

- *Type:* <a href="#@catnekaise/cdk-iam-utilities.ConditionKey">ConditionKey</a>

---

##### `isNull`<sup>Required</sup> <a name="isNull" id="@catnekaise/cdk-iam-utilities.NullConstraint.Initializer.parameter.isNull"></a>

- *Type:* boolean

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@catnekaise/cdk-iam-utilities.NullConstraint.assemble">assemble</a></code> | *No description.* |

---

##### `assemble` <a name="assemble" id="@catnekaise/cdk-iam-utilities.NullConstraint.assemble"></a>

```typescript
public assemble(scope: Construct, context: ConstraintAssembleContext): ConstraintPolicyMutation[]
```

###### `scope`<sup>Required</sup> <a name="scope" id="@catnekaise/cdk-iam-utilities.NullConstraint.assemble.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `context`<sup>Required</sup> <a name="context" id="@catnekaise/cdk-iam-utilities.NullConstraint.assemble.parameter.context"></a>

- *Type:* <a href="#@catnekaise/cdk-iam-utilities.ConstraintAssembleContext">ConstraintAssembleContext</a>

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@catnekaise/cdk-iam-utilities.NullConstraint.isNotNull">isNotNull</a></code> | *No description.* |
| <code><a href="#@catnekaise/cdk-iam-utilities.NullConstraint.isNull">isNull</a></code> | *No description.* |

---

##### `isNotNull` <a name="isNotNull" id="@catnekaise/cdk-iam-utilities.NullConstraint.isNotNull"></a>

```typescript
import { NullConstraint } from '@catnekaise/cdk-iam-utilities'

NullConstraint.isNotNull(key: ConditionKey)
```

###### `key`<sup>Required</sup> <a name="key" id="@catnekaise/cdk-iam-utilities.NullConstraint.isNotNull.parameter.key"></a>

- *Type:* <a href="#@catnekaise/cdk-iam-utilities.ConditionKey">ConditionKey</a>

---

##### `isNull` <a name="isNull" id="@catnekaise/cdk-iam-utilities.NullConstraint.isNull"></a>

```typescript
import { NullConstraint } from '@catnekaise/cdk-iam-utilities'

NullConstraint.isNull(key: ConditionKey)
```

###### `key`<sup>Required</sup> <a name="key" id="@catnekaise/cdk-iam-utilities.NullConstraint.isNull.parameter.key"></a>

- *Type:* <a href="#@catnekaise/cdk-iam-utilities.ConditionKey">ConditionKey</a>

---



### OperatorUtils <a name="OperatorUtils" id="@catnekaise/cdk-iam-utilities.OperatorUtils"></a>


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@catnekaise/cdk-iam-utilities.OperatorUtils.arraySupport">arraySupport</a></code> | *No description.* |
| <code><a href="#@catnekaise/cdk-iam-utilities.OperatorUtils.convert">convert</a></code> | *No description.* |
| <code><a href="#@catnekaise/cdk-iam-utilities.OperatorUtils.operatorIsSupported">operatorIsSupported</a></code> | *No description.* |
| <code><a href="#@catnekaise/cdk-iam-utilities.OperatorUtils.operatorShortName">operatorShortName</a></code> | *No description.* |

---

##### `arraySupport` <a name="arraySupport" id="@catnekaise/cdk-iam-utilities.OperatorUtils.arraySupport"></a>

```typescript
import { OperatorUtils } from '@catnekaise/cdk-iam-utilities'

OperatorUtils.arraySupport(value: ConditionOperator)
```

###### `value`<sup>Required</sup> <a name="value" id="@catnekaise/cdk-iam-utilities.OperatorUtils.arraySupport.parameter.value"></a>

- *Type:* <a href="#@catnekaise/cdk-iam-utilities.ConditionOperator">ConditionOperator</a>

---

##### `convert` <a name="convert" id="@catnekaise/cdk-iam-utilities.OperatorUtils.convert"></a>

```typescript
import { OperatorUtils } from '@catnekaise/cdk-iam-utilities'

OperatorUtils.convert(value: any)
```

###### `value`<sup>Required</sup> <a name="value" id="@catnekaise/cdk-iam-utilities.OperatorUtils.convert.parameter.value"></a>

- *Type:* any

---

##### `operatorIsSupported` <a name="operatorIsSupported" id="@catnekaise/cdk-iam-utilities.OperatorUtils.operatorIsSupported"></a>

```typescript
import { OperatorUtils } from '@catnekaise/cdk-iam-utilities'

OperatorUtils.operatorIsSupported(supportedOperators: string[], operator: ConditionOperator)
```

###### `supportedOperators`<sup>Required</sup> <a name="supportedOperators" id="@catnekaise/cdk-iam-utilities.OperatorUtils.operatorIsSupported.parameter.supportedOperators"></a>

- *Type:* string[]

---

###### `operator`<sup>Required</sup> <a name="operator" id="@catnekaise/cdk-iam-utilities.OperatorUtils.operatorIsSupported.parameter.operator"></a>

- *Type:* <a href="#@catnekaise/cdk-iam-utilities.ConditionOperator">ConditionOperator</a>

---

##### `operatorShortName` <a name="operatorShortName" id="@catnekaise/cdk-iam-utilities.OperatorUtils.operatorShortName"></a>

```typescript
import { OperatorUtils } from '@catnekaise/cdk-iam-utilities'

OperatorUtils.operatorShortName(operator: ConditionOperator)
```

###### `operator`<sup>Required</sup> <a name="operator" id="@catnekaise/cdk-iam-utilities.OperatorUtils.operatorShortName.parameter.operator"></a>

- *Type:* <a href="#@catnekaise/cdk-iam-utilities.ConditionOperator">ConditionOperator</a>

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@catnekaise/cdk-iam-utilities.OperatorUtils.property.Arn">Arn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@catnekaise/cdk-iam-utilities.OperatorUtils.property.Binary">Binary</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@catnekaise/cdk-iam-utilities.OperatorUtils.property.Bool">Bool</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@catnekaise/cdk-iam-utilities.OperatorUtils.property.Date">Date</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@catnekaise/cdk-iam-utilities.OperatorUtils.property.IpAddress">IpAddress</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@catnekaise/cdk-iam-utilities.OperatorUtils.property.Many">Many</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@catnekaise/cdk-iam-utilities.OperatorUtils.property.Numeric">Numeric</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@catnekaise/cdk-iam-utilities.OperatorUtils.property.String">String</a></code> | <code>string[]</code> | *No description.* |

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@catnekaise/cdk-iam-utilities.OperatorUtils.property.Arn"></a>

```typescript
public readonly Arn: string[];
```

- *Type:* string[]

---

##### `Binary`<sup>Required</sup> <a name="Binary" id="@catnekaise/cdk-iam-utilities.OperatorUtils.property.Binary"></a>

```typescript
public readonly Binary: string[];
```

- *Type:* string[]

---

##### `Bool`<sup>Required</sup> <a name="Bool" id="@catnekaise/cdk-iam-utilities.OperatorUtils.property.Bool"></a>

```typescript
public readonly Bool: string[];
```

- *Type:* string[]

---

##### `Date`<sup>Required</sup> <a name="Date" id="@catnekaise/cdk-iam-utilities.OperatorUtils.property.Date"></a>

```typescript
public readonly Date: string[];
```

- *Type:* string[]

---

##### `IpAddress`<sup>Required</sup> <a name="IpAddress" id="@catnekaise/cdk-iam-utilities.OperatorUtils.property.IpAddress"></a>

```typescript
public readonly IpAddress: string[];
```

- *Type:* string[]

---

##### `Many`<sup>Required</sup> <a name="Many" id="@catnekaise/cdk-iam-utilities.OperatorUtils.property.Many"></a>

```typescript
public readonly Many: string[];
```

- *Type:* string[]

---

##### `Numeric`<sup>Required</sup> <a name="Numeric" id="@catnekaise/cdk-iam-utilities.OperatorUtils.property.Numeric"></a>

```typescript
public readonly Numeric: string[];
```

- *Type:* string[]

---

##### `String`<sup>Required</sup> <a name="String" id="@catnekaise/cdk-iam-utilities.OperatorUtils.property.String"></a>

```typescript
public readonly String: string[];
```

- *Type:* string[]

---

### PassClaimsConstraint <a name="PassClaimsConstraint" id="@catnekaise/cdk-iam-utilities.PassClaimsConstraint"></a>

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@catnekaise/cdk-iam-utilities.PassClaimsConstraint.assemble">assemble</a></code> | *No description.* |

---

##### `assemble` <a name="assemble" id="@catnekaise/cdk-iam-utilities.PassClaimsConstraint.assemble"></a>

```typescript
public assemble(scope: Construct, context: ConstraintAssembleContext): ConstraintPolicyMutation[]
```

###### `scope`<sup>Required</sup> <a name="scope" id="@catnekaise/cdk-iam-utilities.PassClaimsConstraint.assemble.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `context`<sup>Required</sup> <a name="context" id="@catnekaise/cdk-iam-utilities.PassClaimsConstraint.assemble.parameter.context"></a>

- *Type:* <a href="#@catnekaise/cdk-iam-utilities.ConstraintAssembleContext">ConstraintAssembleContext</a>

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@catnekaise/cdk-iam-utilities.PassClaimsConstraint.create">create</a></code> | *No description.* |

---

##### `create` <a name="create" id="@catnekaise/cdk-iam-utilities.PassClaimsConstraint.create"></a>

```typescript
import { PassClaimsConstraint } from '@catnekaise/cdk-iam-utilities'

PassClaimsConstraint.create(claims: PassClaimsConstraintSettings)
```

###### `claims`<sup>Required</sup> <a name="claims" id="@catnekaise/cdk-iam-utilities.PassClaimsConstraint.create.parameter.claims"></a>

- *Type:* <a href="#@catnekaise/cdk-iam-utilities.PassClaimsConstraintSettings">PassClaimsConstraintSettings</a>

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@catnekaise/cdk-iam-utilities.PassClaimsConstraint.property.settings">settings</a></code> | <code><a href="#@catnekaise/cdk-iam-utilities.PassClaimsConstraintSettings">PassClaimsConstraintSettings</a></code> | *No description.* |

---

##### `settings`<sup>Required</sup> <a name="settings" id="@catnekaise/cdk-iam-utilities.PassClaimsConstraint.property.settings"></a>

```typescript
public readonly settings: PassClaimsConstraintSettings;
```

- *Type:* <a href="#@catnekaise/cdk-iam-utilities.PassClaimsConstraintSettings">PassClaimsConstraintSettings</a>

---


### PolicyType <a name="PolicyType" id="@catnekaise/cdk-iam-utilities.PolicyType"></a>

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@catnekaise/cdk-iam-utilities.PolicyType.isResourcePolicyForService">isResourcePolicyForService</a></code> | *No description.* |

---

##### `isResourcePolicyForService` <a name="isResourcePolicyForService" id="@catnekaise/cdk-iam-utilities.PolicyType.isResourcePolicyForService"></a>

```typescript
public isResourcePolicyForService(service: ResourcePolicyType): boolean
```

###### `service`<sup>Required</sup> <a name="service" id="@catnekaise/cdk-iam-utilities.PolicyType.isResourcePolicyForService.parameter.service"></a>

- *Type:* <a href="#@catnekaise/cdk-iam-utilities.ResourcePolicyType">ResourcePolicyType</a>

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@catnekaise/cdk-iam-utilities.PolicyType.resourcePolicy">resourcePolicy</a></code> | *No description.* |
| <code><a href="#@catnekaise/cdk-iam-utilities.PolicyType.trustPolicy">trustPolicy</a></code> | *No description.* |

---

##### `resourcePolicy` <a name="resourcePolicy" id="@catnekaise/cdk-iam-utilities.PolicyType.resourcePolicy"></a>

```typescript
import { PolicyType } from '@catnekaise/cdk-iam-utilities'

PolicyType.resourcePolicy(type: ResourcePolicyType)
```

###### `type`<sup>Required</sup> <a name="type" id="@catnekaise/cdk-iam-utilities.PolicyType.resourcePolicy.parameter.type"></a>

- *Type:* <a href="#@catnekaise/cdk-iam-utilities.ResourcePolicyType">ResourcePolicyType</a>

---

##### `trustPolicy` <a name="trustPolicy" id="@catnekaise/cdk-iam-utilities.PolicyType.trustPolicy"></a>

```typescript
import { PolicyType } from '@catnekaise/cdk-iam-utilities'

PolicyType.trustPolicy(principalType: PrincipalType)
```

###### `principalType`<sup>Required</sup> <a name="principalType" id="@catnekaise/cdk-iam-utilities.PolicyType.trustPolicy.parameter.principalType"></a>

- *Type:* <a href="#@catnekaise/cdk-iam-utilities.PrincipalType">PrincipalType</a>

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@catnekaise/cdk-iam-utilities.PolicyType.property.isIdentityPolicy">isIdentityPolicy</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#@catnekaise/cdk-iam-utilities.PolicyType.property.isResourcePolicy">isResourcePolicy</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#@catnekaise/cdk-iam-utilities.PolicyType.property.isTrustPolicy">isTrustPolicy</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#@catnekaise/cdk-iam-utilities.PolicyType.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@catnekaise/cdk-iam-utilities.PolicyType.property.principalType">principalType</a></code> | <code><a href="#@catnekaise/cdk-iam-utilities.PrincipalType">PrincipalType</a></code> | *No description.* |
| <code><a href="#@catnekaise/cdk-iam-utilities.PolicyType.property.service">service</a></code> | <code><a href="#@catnekaise/cdk-iam-utilities.ResourcePolicyType">ResourcePolicyType</a></code> | *No description.* |

---

##### `isIdentityPolicy`<sup>Required</sup> <a name="isIdentityPolicy" id="@catnekaise/cdk-iam-utilities.PolicyType.property.isIdentityPolicy"></a>

```typescript
public readonly isIdentityPolicy: boolean;
```

- *Type:* boolean

---

##### `isResourcePolicy`<sup>Required</sup> <a name="isResourcePolicy" id="@catnekaise/cdk-iam-utilities.PolicyType.property.isResourcePolicy"></a>

```typescript
public readonly isResourcePolicy: boolean;
```

- *Type:* boolean

---

##### `isTrustPolicy`<sup>Required</sup> <a name="isTrustPolicy" id="@catnekaise/cdk-iam-utilities.PolicyType.property.isTrustPolicy"></a>

```typescript
public readonly isTrustPolicy: boolean;
```

- *Type:* boolean

---

##### `type`<sup>Required</sup> <a name="type" id="@catnekaise/cdk-iam-utilities.PolicyType.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `principalType`<sup>Optional</sup> <a name="principalType" id="@catnekaise/cdk-iam-utilities.PolicyType.property.principalType"></a>

```typescript
public readonly principalType: PrincipalType;
```

- *Type:* <a href="#@catnekaise/cdk-iam-utilities.PrincipalType">PrincipalType</a>

---

##### `service`<sup>Optional</sup> <a name="service" id="@catnekaise/cdk-iam-utilities.PolicyType.property.service"></a>

```typescript
public readonly service: ResourcePolicyType;
```

- *Type:* <a href="#@catnekaise/cdk-iam-utilities.ResourcePolicyType">ResourcePolicyType</a>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@catnekaise/cdk-iam-utilities.PolicyType.property.IdentityPolicy">IdentityPolicy</a></code> | <code><a href="#@catnekaise/cdk-iam-utilities.PolicyType">PolicyType</a></code> | *No description.* |
| <code><a href="#@catnekaise/cdk-iam-utilities.PolicyType.property.NonSpecific">NonSpecific</a></code> | <code><a href="#@catnekaise/cdk-iam-utilities.PolicyType">PolicyType</a></code> | *No description.* |

---

##### `IdentityPolicy`<sup>Required</sup> <a name="IdentityPolicy" id="@catnekaise/cdk-iam-utilities.PolicyType.property.IdentityPolicy"></a>

```typescript
public readonly IdentityPolicy: PolicyType;
```

- *Type:* <a href="#@catnekaise/cdk-iam-utilities.PolicyType">PolicyType</a>

---

##### `NonSpecific`<sup>Required</sup> <a name="NonSpecific" id="@catnekaise/cdk-iam-utilities.PolicyType.property.NonSpecific"></a>

```typescript
public readonly NonSpecific: PolicyType;
```

- *Type:* <a href="#@catnekaise/cdk-iam-utilities.PolicyType">PolicyType</a>

---

### PolicyVariable <a name="PolicyVariable" id="@catnekaise/cdk-iam-utilities.PolicyVariable"></a>

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@catnekaise/cdk-iam-utilities.PolicyVariable.toString">toString</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@catnekaise/cdk-iam-utilities.PolicyVariable.toString"></a>

```typescript
public toString(): string
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@catnekaise/cdk-iam-utilities.PolicyVariable.principalOrgId">principalOrgId</a></code> | *No description.* |
| <code><a href="#@catnekaise/cdk-iam-utilities.PolicyVariable.principalTag">principalTag</a></code> | *No description.* |
| <code><a href="#@catnekaise/cdk-iam-utilities.PolicyVariable.principalType">principalType</a></code> | *No description.* |
| <code><a href="#@catnekaise/cdk-iam-utilities.PolicyVariable.requestTag">requestTag</a></code> | *No description.* |
| <code><a href="#@catnekaise/cdk-iam-utilities.PolicyVariable.resourceTag">resourceTag</a></code> | *No description.* |
| <code><a href="#@catnekaise/cdk-iam-utilities.PolicyVariable.userId">userId</a></code> | *No description.* |
| <code><a href="#@catnekaise/cdk-iam-utilities.PolicyVariable.username">username</a></code> | *No description.* |

---

##### `principalOrgId` <a name="principalOrgId" id="@catnekaise/cdk-iam-utilities.PolicyVariable.principalOrgId"></a>

```typescript
import { PolicyVariable } from '@catnekaise/cdk-iam-utilities'

PolicyVariable.principalOrgId(defaultValue?: string)
```

###### `defaultValue`<sup>Optional</sup> <a name="defaultValue" id="@catnekaise/cdk-iam-utilities.PolicyVariable.principalOrgId.parameter.defaultValue"></a>

- *Type:* string

---

##### `principalTag` <a name="principalTag" id="@catnekaise/cdk-iam-utilities.PolicyVariable.principalTag"></a>

```typescript
import { PolicyVariable } from '@catnekaise/cdk-iam-utilities'

PolicyVariable.principalTag(tagName: string, defaultValue?: string)
```

###### `tagName`<sup>Required</sup> <a name="tagName" id="@catnekaise/cdk-iam-utilities.PolicyVariable.principalTag.parameter.tagName"></a>

- *Type:* string

---

###### `defaultValue`<sup>Optional</sup> <a name="defaultValue" id="@catnekaise/cdk-iam-utilities.PolicyVariable.principalTag.parameter.defaultValue"></a>

- *Type:* string

---

##### `principalType` <a name="principalType" id="@catnekaise/cdk-iam-utilities.PolicyVariable.principalType"></a>

```typescript
import { PolicyVariable } from '@catnekaise/cdk-iam-utilities'

PolicyVariable.principalType(defaultValue?: string)
```

###### `defaultValue`<sup>Optional</sup> <a name="defaultValue" id="@catnekaise/cdk-iam-utilities.PolicyVariable.principalType.parameter.defaultValue"></a>

- *Type:* string

---

##### `requestTag` <a name="requestTag" id="@catnekaise/cdk-iam-utilities.PolicyVariable.requestTag"></a>

```typescript
import { PolicyVariable } from '@catnekaise/cdk-iam-utilities'

PolicyVariable.requestTag(tagName: string, defaultValue?: string)
```

###### `tagName`<sup>Required</sup> <a name="tagName" id="@catnekaise/cdk-iam-utilities.PolicyVariable.requestTag.parameter.tagName"></a>

- *Type:* string

---

###### `defaultValue`<sup>Optional</sup> <a name="defaultValue" id="@catnekaise/cdk-iam-utilities.PolicyVariable.requestTag.parameter.defaultValue"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@catnekaise/cdk-iam-utilities.PolicyVariable.resourceTag"></a>

```typescript
import { PolicyVariable } from '@catnekaise/cdk-iam-utilities'

PolicyVariable.resourceTag(tagName: string, defaultValue?: string)
```

###### `tagName`<sup>Required</sup> <a name="tagName" id="@catnekaise/cdk-iam-utilities.PolicyVariable.resourceTag.parameter.tagName"></a>

- *Type:* string

---

###### `defaultValue`<sup>Optional</sup> <a name="defaultValue" id="@catnekaise/cdk-iam-utilities.PolicyVariable.resourceTag.parameter.defaultValue"></a>

- *Type:* string

---

##### `userId` <a name="userId" id="@catnekaise/cdk-iam-utilities.PolicyVariable.userId"></a>

```typescript
import { PolicyVariable } from '@catnekaise/cdk-iam-utilities'

PolicyVariable.userId(defaultValue?: string)
```

###### `defaultValue`<sup>Optional</sup> <a name="defaultValue" id="@catnekaise/cdk-iam-utilities.PolicyVariable.userId.parameter.defaultValue"></a>

- *Type:* string

---

##### `username` <a name="username" id="@catnekaise/cdk-iam-utilities.PolicyVariable.username"></a>

```typescript
import { PolicyVariable } from '@catnekaise/cdk-iam-utilities'

PolicyVariable.username(defaultValue?: string)
```

###### `defaultValue`<sup>Optional</sup> <a name="defaultValue" id="@catnekaise/cdk-iam-utilities.PolicyVariable.username.parameter.defaultValue"></a>

- *Type:* string

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@catnekaise/cdk-iam-utilities.PolicyVariable.property.isTag">isTag</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#@catnekaise/cdk-iam-utilities.PolicyVariable.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@catnekaise/cdk-iam-utilities.PolicyVariable.property.defaultValue">defaultValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@catnekaise/cdk-iam-utilities.PolicyVariable.property.tagName">tagName</a></code> | <code>string</code> | *No description.* |

---

##### `isTag`<sup>Required</sup> <a name="isTag" id="@catnekaise/cdk-iam-utilities.PolicyVariable.property.isTag"></a>

```typescript
public readonly isTag: boolean;
```

- *Type:* boolean

---

##### `type`<sup>Required</sup> <a name="type" id="@catnekaise/cdk-iam-utilities.PolicyVariable.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `defaultValue`<sup>Optional</sup> <a name="defaultValue" id="@catnekaise/cdk-iam-utilities.PolicyVariable.property.defaultValue"></a>

```typescript
public readonly defaultValue: string;
```

- *Type:* string

---

##### `tagName`<sup>Optional</sup> <a name="tagName" id="@catnekaise/cdk-iam-utilities.PolicyVariable.property.tagName"></a>

```typescript
public readonly tagName: string;
```

- *Type:* string

---


### PrincipalTagConstraint <a name="PrincipalTagConstraint" id="@catnekaise/cdk-iam-utilities.PrincipalTagConstraint"></a>

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@catnekaise/cdk-iam-utilities.PrincipalTagConstraint.assemble">assemble</a></code> | *No description.* |

---

##### `assemble` <a name="assemble" id="@catnekaise/cdk-iam-utilities.PrincipalTagConstraint.assemble"></a>

```typescript
public assemble(scope: Construct, context: ConstraintAssembleContext): ConstraintPolicyMutation[]
```

###### `scope`<sup>Required</sup> <a name="scope" id="@catnekaise/cdk-iam-utilities.PrincipalTagConstraint.assemble.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `context`<sup>Required</sup> <a name="context" id="@catnekaise/cdk-iam-utilities.PrincipalTagConstraint.assemble.parameter.context"></a>

- *Type:* <a href="#@catnekaise/cdk-iam-utilities.ConstraintAssembleContext">ConstraintAssembleContext</a>

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@catnekaise/cdk-iam-utilities.PrincipalTagConstraint.stringEquals">stringEquals</a></code> | *No description.* |

---

##### `stringEquals` <a name="stringEquals" id="@catnekaise/cdk-iam-utilities.PrincipalTagConstraint.stringEquals"></a>

```typescript
import { PrincipalTagConstraint } from '@catnekaise/cdk-iam-utilities'

PrincipalTagConstraint.stringEquals(tagName: string, value: string, values: string)
```

###### `tagName`<sup>Required</sup> <a name="tagName" id="@catnekaise/cdk-iam-utilities.PrincipalTagConstraint.stringEquals.parameter.tagName"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@catnekaise/cdk-iam-utilities.PrincipalTagConstraint.stringEquals.parameter.value"></a>

- *Type:* string

---

###### `values`<sup>Required</sup> <a name="values" id="@catnekaise/cdk-iam-utilities.PrincipalTagConstraint.stringEquals.parameter.values"></a>

- *Type:* string

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@catnekaise/cdk-iam-utilities.PrincipalTagConstraint.property.tagName">tagName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@catnekaise/cdk-iam-utilities.PrincipalTagConstraint.property.values">values</a></code> | <code>string[]</code> | *No description.* |

---

##### `tagName`<sup>Required</sup> <a name="tagName" id="@catnekaise/cdk-iam-utilities.PrincipalTagConstraint.property.tagName"></a>

```typescript
public readonly tagName: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="@catnekaise/cdk-iam-utilities.PrincipalTagConstraint.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---


### PrincipalType <a name="PrincipalType" id="@catnekaise/cdk-iam-utilities.PrincipalType"></a>



#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@catnekaise/cdk-iam-utilities.PrincipalType.property.isAws">isAws</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#@catnekaise/cdk-iam-utilities.PrincipalType.property.isFederated">isFederated</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#@catnekaise/cdk-iam-utilities.PrincipalType.property.isSaml">isSaml</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#@catnekaise/cdk-iam-utilities.PrincipalType.property.isService">isService</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#@catnekaise/cdk-iam-utilities.PrincipalType.property.type">type</a></code> | <code>string</code> | *No description.* |

---

##### `isAws`<sup>Required</sup> <a name="isAws" id="@catnekaise/cdk-iam-utilities.PrincipalType.property.isAws"></a>

```typescript
public readonly isAws: boolean;
```

- *Type:* boolean

---

##### `isFederated`<sup>Required</sup> <a name="isFederated" id="@catnekaise/cdk-iam-utilities.PrincipalType.property.isFederated"></a>

```typescript
public readonly isFederated: boolean;
```

- *Type:* boolean

---

##### `isSaml`<sup>Required</sup> <a name="isSaml" id="@catnekaise/cdk-iam-utilities.PrincipalType.property.isSaml"></a>

```typescript
public readonly isSaml: boolean;
```

- *Type:* boolean

---

##### `isService`<sup>Required</sup> <a name="isService" id="@catnekaise/cdk-iam-utilities.PrincipalType.property.isService"></a>

```typescript
public readonly isService: boolean;
```

- *Type:* boolean

---

##### `type`<sup>Required</sup> <a name="type" id="@catnekaise/cdk-iam-utilities.PrincipalType.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@catnekaise/cdk-iam-utilities.PrincipalType.property.Aws">Aws</a></code> | <code><a href="#@catnekaise/cdk-iam-utilities.PrincipalType">PrincipalType</a></code> | *No description.* |
| <code><a href="#@catnekaise/cdk-iam-utilities.PrincipalType.property.Federated">Federated</a></code> | <code><a href="#@catnekaise/cdk-iam-utilities.PrincipalType">PrincipalType</a></code> | *No description.* |
| <code><a href="#@catnekaise/cdk-iam-utilities.PrincipalType.property.Saml">Saml</a></code> | <code><a href="#@catnekaise/cdk-iam-utilities.PrincipalType">PrincipalType</a></code> | *No description.* |
| <code><a href="#@catnekaise/cdk-iam-utilities.PrincipalType.property.Service">Service</a></code> | <code><a href="#@catnekaise/cdk-iam-utilities.PrincipalType">PrincipalType</a></code> | *No description.* |

---

##### `Aws`<sup>Required</sup> <a name="Aws" id="@catnekaise/cdk-iam-utilities.PrincipalType.property.Aws"></a>

```typescript
public readonly Aws: PrincipalType;
```

- *Type:* <a href="#@catnekaise/cdk-iam-utilities.PrincipalType">PrincipalType</a>

---

##### `Federated`<sup>Required</sup> <a name="Federated" id="@catnekaise/cdk-iam-utilities.PrincipalType.property.Federated"></a>

```typescript
public readonly Federated: PrincipalType;
```

- *Type:* <a href="#@catnekaise/cdk-iam-utilities.PrincipalType">PrincipalType</a>

---

##### `Saml`<sup>Required</sup> <a name="Saml" id="@catnekaise/cdk-iam-utilities.PrincipalType.property.Saml"></a>

```typescript
public readonly Saml: PrincipalType;
```

- *Type:* <a href="#@catnekaise/cdk-iam-utilities.PrincipalType">PrincipalType</a>

---

##### `Service`<sup>Required</sup> <a name="Service" id="@catnekaise/cdk-iam-utilities.PrincipalType.property.Service"></a>

```typescript
public readonly Service: PrincipalType;
```

- *Type:* <a href="#@catnekaise/cdk-iam-utilities.PrincipalType">PrincipalType</a>

---

### RequestTagConstraint <a name="RequestTagConstraint" id="@catnekaise/cdk-iam-utilities.RequestTagConstraint"></a>

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@catnekaise/cdk-iam-utilities.RequestTagConstraint.assemble">assemble</a></code> | *No description.* |

---

##### `assemble` <a name="assemble" id="@catnekaise/cdk-iam-utilities.RequestTagConstraint.assemble"></a>

```typescript
public assemble(scope: Construct, context: ConstraintAssembleContext): ConstraintPolicyMutation[]
```

###### `scope`<sup>Required</sup> <a name="scope" id="@catnekaise/cdk-iam-utilities.RequestTagConstraint.assemble.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `context`<sup>Required</sup> <a name="context" id="@catnekaise/cdk-iam-utilities.RequestTagConstraint.assemble.parameter.context"></a>

- *Type:* <a href="#@catnekaise/cdk-iam-utilities.ConstraintAssembleContext">ConstraintAssembleContext</a>

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@catnekaise/cdk-iam-utilities.RequestTagConstraint.stringEquals">stringEquals</a></code> | *No description.* |
| <code><a href="#@catnekaise/cdk-iam-utilities.RequestTagConstraint.stringLike">stringLike</a></code> | *No description.* |

---

##### `stringEquals` <a name="stringEquals" id="@catnekaise/cdk-iam-utilities.RequestTagConstraint.stringEquals"></a>

```typescript
import { RequestTagConstraint } from '@catnekaise/cdk-iam-utilities'

RequestTagConstraint.stringEquals(tagName: string, value: string, values: string)
```

###### `tagName`<sup>Required</sup> <a name="tagName" id="@catnekaise/cdk-iam-utilities.RequestTagConstraint.stringEquals.parameter.tagName"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@catnekaise/cdk-iam-utilities.RequestTagConstraint.stringEquals.parameter.value"></a>

- *Type:* string

---

###### `values`<sup>Required</sup> <a name="values" id="@catnekaise/cdk-iam-utilities.RequestTagConstraint.stringEquals.parameter.values"></a>

- *Type:* string

---

##### `stringLike` <a name="stringLike" id="@catnekaise/cdk-iam-utilities.RequestTagConstraint.stringLike"></a>

```typescript
import { RequestTagConstraint } from '@catnekaise/cdk-iam-utilities'

RequestTagConstraint.stringLike(tagName: string, value: string, values: string)
```

###### `tagName`<sup>Required</sup> <a name="tagName" id="@catnekaise/cdk-iam-utilities.RequestTagConstraint.stringLike.parameter.tagName"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@catnekaise/cdk-iam-utilities.RequestTagConstraint.stringLike.parameter.value"></a>

- *Type:* string

---

###### `values`<sup>Required</sup> <a name="values" id="@catnekaise/cdk-iam-utilities.RequestTagConstraint.stringLike.parameter.values"></a>

- *Type:* string

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@catnekaise/cdk-iam-utilities.RequestTagConstraint.property.tagName">tagName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@catnekaise/cdk-iam-utilities.RequestTagConstraint.property.values">values</a></code> | <code>string[]</code> | *No description.* |

---

##### `tagName`<sup>Required</sup> <a name="tagName" id="@catnekaise/cdk-iam-utilities.RequestTagConstraint.property.tagName"></a>

```typescript
public readonly tagName: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="@catnekaise/cdk-iam-utilities.RequestTagConstraint.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---


### ResourcePolicyType <a name="ResourcePolicyType" id="@catnekaise/cdk-iam-utilities.ResourcePolicyType"></a>



#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@catnekaise/cdk-iam-utilities.ResourcePolicyType.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `name`<sup>Required</sup> <a name="name" id="@catnekaise/cdk-iam-utilities.ResourcePolicyType.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@catnekaise/cdk-iam-utilities.ResourcePolicyType.property.API_GATEWAY">API_GATEWAY</a></code> | <code><a href="#@catnekaise/cdk-iam-utilities.ResourcePolicyType">ResourcePolicyType</a></code> | *No description.* |
| <code><a href="#@catnekaise/cdk-iam-utilities.ResourcePolicyType.property.BACKUP">BACKUP</a></code> | <code><a href="#@catnekaise/cdk-iam-utilities.ResourcePolicyType">ResourcePolicyType</a></code> | *No description.* |
| <code><a href="#@catnekaise/cdk-iam-utilities.ResourcePolicyType.property.CODE_BUILD">CODE_BUILD</a></code> | <code><a href="#@catnekaise/cdk-iam-utilities.ResourcePolicyType">ResourcePolicyType</a></code> | *No description.* |
| <code><a href="#@catnekaise/cdk-iam-utilities.ResourcePolicyType.property.ECR">ECR</a></code> | <code><a href="#@catnekaise/cdk-iam-utilities.ResourcePolicyType">ResourcePolicyType</a></code> | *No description.* |
| <code><a href="#@catnekaise/cdk-iam-utilities.ResourcePolicyType.property.EVENTBRIDGE">EVENTBRIDGE</a></code> | <code><a href="#@catnekaise/cdk-iam-utilities.ResourcePolicyType">ResourcePolicyType</a></code> | *No description.* |
| <code><a href="#@catnekaise/cdk-iam-utilities.ResourcePolicyType.property.GLUE">GLUE</a></code> | <code><a href="#@catnekaise/cdk-iam-utilities.ResourcePolicyType">ResourcePolicyType</a></code> | *No description.* |
| <code><a href="#@catnekaise/cdk-iam-utilities.ResourcePolicyType.property.KMS">KMS</a></code> | <code><a href="#@catnekaise/cdk-iam-utilities.ResourcePolicyType">ResourcePolicyType</a></code> | *No description.* |
| <code><a href="#@catnekaise/cdk-iam-utilities.ResourcePolicyType.property.LAMBDA">LAMBDA</a></code> | <code><a href="#@catnekaise/cdk-iam-utilities.ResourcePolicyType">ResourcePolicyType</a></code> | *No description.* |
| <code><a href="#@catnekaise/cdk-iam-utilities.ResourcePolicyType.property.S3">S3</a></code> | <code><a href="#@catnekaise/cdk-iam-utilities.ResourcePolicyType">ResourcePolicyType</a></code> | *No description.* |
| <code><a href="#@catnekaise/cdk-iam-utilities.ResourcePolicyType.property.SECRETS_MANAGER">SECRETS_MANAGER</a></code> | <code><a href="#@catnekaise/cdk-iam-utilities.ResourcePolicyType">ResourcePolicyType</a></code> | *No description.* |
| <code><a href="#@catnekaise/cdk-iam-utilities.ResourcePolicyType.property.SNS">SNS</a></code> | <code><a href="#@catnekaise/cdk-iam-utilities.ResourcePolicyType">ResourcePolicyType</a></code> | *No description.* |
| <code><a href="#@catnekaise/cdk-iam-utilities.ResourcePolicyType.property.SQS">SQS</a></code> | <code><a href="#@catnekaise/cdk-iam-utilities.ResourcePolicyType">ResourcePolicyType</a></code> | *No description.* |
| <code><a href="#@catnekaise/cdk-iam-utilities.ResourcePolicyType.property.STS">STS</a></code> | <code><a href="#@catnekaise/cdk-iam-utilities.ResourcePolicyType">ResourcePolicyType</a></code> | *No description.* |

---

##### `API_GATEWAY`<sup>Required</sup> <a name="API_GATEWAY" id="@catnekaise/cdk-iam-utilities.ResourcePolicyType.property.API_GATEWAY"></a>

```typescript
public readonly API_GATEWAY: ResourcePolicyType;
```

- *Type:* <a href="#@catnekaise/cdk-iam-utilities.ResourcePolicyType">ResourcePolicyType</a>

---

##### `BACKUP`<sup>Required</sup> <a name="BACKUP" id="@catnekaise/cdk-iam-utilities.ResourcePolicyType.property.BACKUP"></a>

```typescript
public readonly BACKUP: ResourcePolicyType;
```

- *Type:* <a href="#@catnekaise/cdk-iam-utilities.ResourcePolicyType">ResourcePolicyType</a>

---

##### `CODE_BUILD`<sup>Required</sup> <a name="CODE_BUILD" id="@catnekaise/cdk-iam-utilities.ResourcePolicyType.property.CODE_BUILD"></a>

```typescript
public readonly CODE_BUILD: ResourcePolicyType;
```

- *Type:* <a href="#@catnekaise/cdk-iam-utilities.ResourcePolicyType">ResourcePolicyType</a>

---

##### `ECR`<sup>Required</sup> <a name="ECR" id="@catnekaise/cdk-iam-utilities.ResourcePolicyType.property.ECR"></a>

```typescript
public readonly ECR: ResourcePolicyType;
```

- *Type:* <a href="#@catnekaise/cdk-iam-utilities.ResourcePolicyType">ResourcePolicyType</a>

---

##### `EVENTBRIDGE`<sup>Required</sup> <a name="EVENTBRIDGE" id="@catnekaise/cdk-iam-utilities.ResourcePolicyType.property.EVENTBRIDGE"></a>

```typescript
public readonly EVENTBRIDGE: ResourcePolicyType;
```

- *Type:* <a href="#@catnekaise/cdk-iam-utilities.ResourcePolicyType">ResourcePolicyType</a>

---

##### `GLUE`<sup>Required</sup> <a name="GLUE" id="@catnekaise/cdk-iam-utilities.ResourcePolicyType.property.GLUE"></a>

```typescript
public readonly GLUE: ResourcePolicyType;
```

- *Type:* <a href="#@catnekaise/cdk-iam-utilities.ResourcePolicyType">ResourcePolicyType</a>

---

##### `KMS`<sup>Required</sup> <a name="KMS" id="@catnekaise/cdk-iam-utilities.ResourcePolicyType.property.KMS"></a>

```typescript
public readonly KMS: ResourcePolicyType;
```

- *Type:* <a href="#@catnekaise/cdk-iam-utilities.ResourcePolicyType">ResourcePolicyType</a>

---

##### `LAMBDA`<sup>Required</sup> <a name="LAMBDA" id="@catnekaise/cdk-iam-utilities.ResourcePolicyType.property.LAMBDA"></a>

```typescript
public readonly LAMBDA: ResourcePolicyType;
```

- *Type:* <a href="#@catnekaise/cdk-iam-utilities.ResourcePolicyType">ResourcePolicyType</a>

---

##### `S3`<sup>Required</sup> <a name="S3" id="@catnekaise/cdk-iam-utilities.ResourcePolicyType.property.S3"></a>

```typescript
public readonly S3: ResourcePolicyType;
```

- *Type:* <a href="#@catnekaise/cdk-iam-utilities.ResourcePolicyType">ResourcePolicyType</a>

---

##### `SECRETS_MANAGER`<sup>Required</sup> <a name="SECRETS_MANAGER" id="@catnekaise/cdk-iam-utilities.ResourcePolicyType.property.SECRETS_MANAGER"></a>

```typescript
public readonly SECRETS_MANAGER: ResourcePolicyType;
```

- *Type:* <a href="#@catnekaise/cdk-iam-utilities.ResourcePolicyType">ResourcePolicyType</a>

---

##### `SNS`<sup>Required</sup> <a name="SNS" id="@catnekaise/cdk-iam-utilities.ResourcePolicyType.property.SNS"></a>

```typescript
public readonly SNS: ResourcePolicyType;
```

- *Type:* <a href="#@catnekaise/cdk-iam-utilities.ResourcePolicyType">ResourcePolicyType</a>

---

##### `SQS`<sup>Required</sup> <a name="SQS" id="@catnekaise/cdk-iam-utilities.ResourcePolicyType.property.SQS"></a>

```typescript
public readonly SQS: ResourcePolicyType;
```

- *Type:* <a href="#@catnekaise/cdk-iam-utilities.ResourcePolicyType">ResourcePolicyType</a>

---

##### `STS`<sup>Required</sup> <a name="STS" id="@catnekaise/cdk-iam-utilities.ResourcePolicyType.property.STS"></a>

```typescript
public readonly STS: ResourcePolicyType;
```

- *Type:* <a href="#@catnekaise/cdk-iam-utilities.ResourcePolicyType">ResourcePolicyType</a>

---

### ResourceTagConstraint <a name="ResourceTagConstraint" id="@catnekaise/cdk-iam-utilities.ResourceTagConstraint"></a>

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@catnekaise/cdk-iam-utilities.ResourceTagConstraint.assemble">assemble</a></code> | *No description.* |

---

##### `assemble` <a name="assemble" id="@catnekaise/cdk-iam-utilities.ResourceTagConstraint.assemble"></a>

```typescript
public assemble(scope: Construct, context: ConstraintAssembleContext): ConstraintPolicyMutation[]
```

###### `scope`<sup>Required</sup> <a name="scope" id="@catnekaise/cdk-iam-utilities.ResourceTagConstraint.assemble.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `context`<sup>Required</sup> <a name="context" id="@catnekaise/cdk-iam-utilities.ResourceTagConstraint.assemble.parameter.context"></a>

- *Type:* <a href="#@catnekaise/cdk-iam-utilities.ConstraintAssembleContext">ConstraintAssembleContext</a>

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@catnekaise/cdk-iam-utilities.ResourceTagConstraint.create">create</a></code> | *No description.* |
| <code><a href="#@catnekaise/cdk-iam-utilities.ResourceTagConstraint.stringEquals">stringEquals</a></code> | *No description.* |

---

##### `create` <a name="create" id="@catnekaise/cdk-iam-utilities.ResourceTagConstraint.create"></a>

```typescript
import { ResourceTagConstraint } from '@catnekaise/cdk-iam-utilities'

ResourceTagConstraint.create(operator: StringConditionOperator, tagName: string, value: string, values: string)
```

###### `operator`<sup>Required</sup> <a name="operator" id="@catnekaise/cdk-iam-utilities.ResourceTagConstraint.create.parameter.operator"></a>

- *Type:* <a href="#@catnekaise/cdk-iam-utilities.StringConditionOperator">StringConditionOperator</a>

---

###### `tagName`<sup>Required</sup> <a name="tagName" id="@catnekaise/cdk-iam-utilities.ResourceTagConstraint.create.parameter.tagName"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@catnekaise/cdk-iam-utilities.ResourceTagConstraint.create.parameter.value"></a>

- *Type:* string

---

###### `values`<sup>Required</sup> <a name="values" id="@catnekaise/cdk-iam-utilities.ResourceTagConstraint.create.parameter.values"></a>

- *Type:* string

---

##### `stringEquals` <a name="stringEquals" id="@catnekaise/cdk-iam-utilities.ResourceTagConstraint.stringEquals"></a>

```typescript
import { ResourceTagConstraint } from '@catnekaise/cdk-iam-utilities'

ResourceTagConstraint.stringEquals(tagName: string, value: string, values: string)
```

###### `tagName`<sup>Required</sup> <a name="tagName" id="@catnekaise/cdk-iam-utilities.ResourceTagConstraint.stringEquals.parameter.tagName"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@catnekaise/cdk-iam-utilities.ResourceTagConstraint.stringEquals.parameter.value"></a>

- *Type:* string

---

###### `values`<sup>Required</sup> <a name="values" id="@catnekaise/cdk-iam-utilities.ResourceTagConstraint.stringEquals.parameter.values"></a>

- *Type:* string

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@catnekaise/cdk-iam-utilities.ResourceTagConstraint.property.tagName">tagName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@catnekaise/cdk-iam-utilities.ResourceTagConstraint.property.values">values</a></code> | <code>string[]</code> | *No description.* |

---

##### `tagName`<sup>Required</sup> <a name="tagName" id="@catnekaise/cdk-iam-utilities.ResourceTagConstraint.property.tagName"></a>

```typescript
public readonly tagName: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="@catnekaise/cdk-iam-utilities.ResourceTagConstraint.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---


### StsCognitoIdentityConstraint <a name="StsCognitoIdentityConstraint" id="@catnekaise/cdk-iam-utilities.StsCognitoIdentityConstraint"></a>

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@catnekaise/cdk-iam-utilities.StsCognitoIdentityConstraint.assemble">assemble</a></code> | *No description.* |

---

##### `assemble` <a name="assemble" id="@catnekaise/cdk-iam-utilities.StsCognitoIdentityConstraint.assemble"></a>

```typescript
public assemble(scope: Construct, context: ConstraintAssembleContext): ConstraintPolicyMutation[]
```

###### `scope`<sup>Required</sup> <a name="scope" id="@catnekaise/cdk-iam-utilities.StsCognitoIdentityConstraint.assemble.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `context`<sup>Required</sup> <a name="context" id="@catnekaise/cdk-iam-utilities.StsCognitoIdentityConstraint.assemble.parameter.context"></a>

- *Type:* <a href="#@catnekaise/cdk-iam-utilities.ConstraintAssembleContext">ConstraintAssembleContext</a>

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@catnekaise/cdk-iam-utilities.StsCognitoIdentityConstraint.identityPool">identityPool</a></code> | *No description.* |

---

##### `identityPool` <a name="identityPool" id="@catnekaise/cdk-iam-utilities.StsCognitoIdentityConstraint.identityPool"></a>

```typescript
import { StsCognitoIdentityConstraint } from '@catnekaise/cdk-iam-utilities'

StsCognitoIdentityConstraint.identityPool(identityPoolId: string, amr: string)
```

###### `identityPoolId`<sup>Required</sup> <a name="identityPoolId" id="@catnekaise/cdk-iam-utilities.StsCognitoIdentityConstraint.identityPool.parameter.identityPoolId"></a>

- *Type:* string

---

###### `amr`<sup>Required</sup> <a name="amr" id="@catnekaise/cdk-iam-utilities.StsCognitoIdentityConstraint.identityPool.parameter.amr"></a>

- *Type:* string

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@catnekaise/cdk-iam-utilities.StsCognitoIdentityConstraint.property.amr">amr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@catnekaise/cdk-iam-utilities.StsCognitoIdentityConstraint.property.identityPoolId">identityPoolId</a></code> | <code>string</code> | *No description.* |

---

##### `amr`<sup>Required</sup> <a name="amr" id="@catnekaise/cdk-iam-utilities.StsCognitoIdentityConstraint.property.amr"></a>

```typescript
public readonly amr: string;
```

- *Type:* string

---

##### `identityPoolId`<sup>Required</sup> <a name="identityPoolId" id="@catnekaise/cdk-iam-utilities.StsCognitoIdentityConstraint.property.identityPoolId"></a>

```typescript
public readonly identityPoolId: string;
```

- *Type:* string

---


### StsServiceConditionKey <a name="StsServiceConditionKey" id="@catnekaise/cdk-iam-utilities.StsServiceConditionKey"></a>

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@catnekaise/cdk-iam-utilities.StsServiceConditionKey.toString">toString</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@catnekaise/cdk-iam-utilities.StsServiceConditionKey.toString"></a>

```typescript
public toString(): string
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@catnekaise/cdk-iam-utilities.StsServiceConditionKey.iamResourceTag">iamResourceTag</a></code> | Filters access by the tags that are attached to the role that is being assumed. |

---

##### `iamResourceTag` <a name="iamResourceTag" id="@catnekaise/cdk-iam-utilities.StsServiceConditionKey.iamResourceTag"></a>

```typescript
import { StsServiceConditionKey } from '@catnekaise/cdk-iam-utilities'

StsServiceConditionKey.iamResourceTag(tagName: string)
```

Filters access by the tags that are attached to the role that is being assumed.

###### `tagName`<sup>Required</sup> <a name="tagName" id="@catnekaise/cdk-iam-utilities.StsServiceConditionKey.iamResourceTag.parameter.tagName"></a>

- *Type:* string

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@catnekaise/cdk-iam-utilities.StsServiceConditionKey.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@catnekaise/cdk-iam-utilities.StsServiceConditionKey.property.settings">settings</a></code> | <code><a href="#@catnekaise/cdk-iam-utilities.ConditionKeySettings">ConditionKeySettings</a></code> | *No description.* |

---

##### `name`<sup>Required</sup> <a name="name" id="@catnekaise/cdk-iam-utilities.StsServiceConditionKey.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `settings`<sup>Required</sup> <a name="settings" id="@catnekaise/cdk-iam-utilities.StsServiceConditionKey.property.settings"></a>

```typescript
public readonly settings: ConditionKeySettings;
```

- *Type:* <a href="#@catnekaise/cdk-iam-utilities.ConditionKeySettings">ConditionKeySettings</a>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@catnekaise/cdk-iam-utilities.StsServiceConditionKey.property.AWSServiceName">AWSServiceName</a></code> | <code><a href="#@catnekaise/cdk-iam-utilities.StsServiceConditionKey">StsServiceConditionKey</a></code> | Filters access by the service that is obtaining a bearer token. |
| <code><a href="#@catnekaise/cdk-iam-utilities.StsServiceConditionKey.property.CognitoIdentityAmr">CognitoIdentityAmr</a></code> | <code><a href="#@catnekaise/cdk-iam-utilities.StsServiceConditionKey">StsServiceConditionKey</a></code> | Filters access by the login information for Amazon Cognito. |
| <code><a href="#@catnekaise/cdk-iam-utilities.StsServiceConditionKey.property.CognitoIdentityAud">CognitoIdentityAud</a></code> | <code><a href="#@catnekaise/cdk-iam-utilities.StsServiceConditionKey">StsServiceConditionKey</a></code> | Filters access by the Amazon Cognito identity pool ID. |
| <code><a href="#@catnekaise/cdk-iam-utilities.StsServiceConditionKey.property.CognitoIdentitySub">CognitoIdentitySub</a></code> | <code><a href="#@catnekaise/cdk-iam-utilities.StsServiceConditionKey">StsServiceConditionKey</a></code> | Filters access by the subject of the claim (the Amazon Cognito user ID). |
| <code><a href="#@catnekaise/cdk-iam-utilities.StsServiceConditionKey.property.DurationSeconds">DurationSeconds</a></code> | <code><a href="#@catnekaise/cdk-iam-utilities.StsServiceConditionKey">StsServiceConditionKey</a></code> | Filters access by the duration in seconds when getting a bearer token. |
| <code><a href="#@catnekaise/cdk-iam-utilities.StsServiceConditionKey.property.ExternalId">ExternalId</a></code> | <code><a href="#@catnekaise/cdk-iam-utilities.StsServiceConditionKey">StsServiceConditionKey</a></code> | Filters access by the unique identifier required when you assume a role in another account. |
| <code><a href="#@catnekaise/cdk-iam-utilities.StsServiceConditionKey.property.RoleSessionName">RoleSessionName</a></code> | <code><a href="#@catnekaise/cdk-iam-utilities.StsServiceConditionKey">StsServiceConditionKey</a></code> | Filters access by the role session name required when you assume a role. |
| <code><a href="#@catnekaise/cdk-iam-utilities.StsServiceConditionKey.property.SourceIdentity">SourceIdentity</a></code> | <code><a href="#@catnekaise/cdk-iam-utilities.StsServiceConditionKey">StsServiceConditionKey</a></code> | Filters access by the source identity that is passed in the request. |
| <code><a href="#@catnekaise/cdk-iam-utilities.StsServiceConditionKey.property.TransitiveTagKeys">TransitiveTagKeys</a></code> | <code><a href="#@catnekaise/cdk-iam-utilities.StsServiceConditionKey">StsServiceConditionKey</a></code> | Filters access by the transitive tag keys that are passed in the request. |

---

##### `AWSServiceName`<sup>Required</sup> <a name="AWSServiceName" id="@catnekaise/cdk-iam-utilities.StsServiceConditionKey.property.AWSServiceName"></a>

```typescript
public readonly AWSServiceName: StsServiceConditionKey;
```

- *Type:* <a href="#@catnekaise/cdk-iam-utilities.StsServiceConditionKey">StsServiceConditionKey</a>

Filters access by the service that is obtaining a bearer token.

---

##### `CognitoIdentityAmr`<sup>Required</sup> <a name="CognitoIdentityAmr" id="@catnekaise/cdk-iam-utilities.StsServiceConditionKey.property.CognitoIdentityAmr"></a>

```typescript
public readonly CognitoIdentityAmr: StsServiceConditionKey;
```

- *Type:* <a href="#@catnekaise/cdk-iam-utilities.StsServiceConditionKey">StsServiceConditionKey</a>

Filters access by the login information for Amazon Cognito.

---

##### `CognitoIdentityAud`<sup>Required</sup> <a name="CognitoIdentityAud" id="@catnekaise/cdk-iam-utilities.StsServiceConditionKey.property.CognitoIdentityAud"></a>

```typescript
public readonly CognitoIdentityAud: StsServiceConditionKey;
```

- *Type:* <a href="#@catnekaise/cdk-iam-utilities.StsServiceConditionKey">StsServiceConditionKey</a>

Filters access by the Amazon Cognito identity pool ID.

---

##### `CognitoIdentitySub`<sup>Required</sup> <a name="CognitoIdentitySub" id="@catnekaise/cdk-iam-utilities.StsServiceConditionKey.property.CognitoIdentitySub"></a>

```typescript
public readonly CognitoIdentitySub: StsServiceConditionKey;
```

- *Type:* <a href="#@catnekaise/cdk-iam-utilities.StsServiceConditionKey">StsServiceConditionKey</a>

Filters access by the subject of the claim (the Amazon Cognito user ID).

---

##### `DurationSeconds`<sup>Required</sup> <a name="DurationSeconds" id="@catnekaise/cdk-iam-utilities.StsServiceConditionKey.property.DurationSeconds"></a>

```typescript
public readonly DurationSeconds: StsServiceConditionKey;
```

- *Type:* <a href="#@catnekaise/cdk-iam-utilities.StsServiceConditionKey">StsServiceConditionKey</a>

Filters access by the duration in seconds when getting a bearer token.

---

##### `ExternalId`<sup>Required</sup> <a name="ExternalId" id="@catnekaise/cdk-iam-utilities.StsServiceConditionKey.property.ExternalId"></a>

```typescript
public readonly ExternalId: StsServiceConditionKey;
```

- *Type:* <a href="#@catnekaise/cdk-iam-utilities.StsServiceConditionKey">StsServiceConditionKey</a>

Filters access by the unique identifier required when you assume a role in another account.

---

##### `RoleSessionName`<sup>Required</sup> <a name="RoleSessionName" id="@catnekaise/cdk-iam-utilities.StsServiceConditionKey.property.RoleSessionName"></a>

```typescript
public readonly RoleSessionName: StsServiceConditionKey;
```

- *Type:* <a href="#@catnekaise/cdk-iam-utilities.StsServiceConditionKey">StsServiceConditionKey</a>

Filters access by the role session name required when you assume a role.

---

##### `SourceIdentity`<sup>Required</sup> <a name="SourceIdentity" id="@catnekaise/cdk-iam-utilities.StsServiceConditionKey.property.SourceIdentity"></a>

```typescript
public readonly SourceIdentity: StsServiceConditionKey;
```

- *Type:* <a href="#@catnekaise/cdk-iam-utilities.StsServiceConditionKey">StsServiceConditionKey</a>

Filters access by the source identity that is passed in the request.

---

##### `TransitiveTagKeys`<sup>Required</sup> <a name="TransitiveTagKeys" id="@catnekaise/cdk-iam-utilities.StsServiceConditionKey.property.TransitiveTagKeys"></a>

```typescript
public readonly TransitiveTagKeys: StsServiceConditionKey;
```

- *Type:* <a href="#@catnekaise/cdk-iam-utilities.StsServiceConditionKey">StsServiceConditionKey</a>

Filters access by the transitive tag keys that are passed in the request.

---

### StsTransitiveTagKeysConstraint <a name="StsTransitiveTagKeysConstraint" id="@catnekaise/cdk-iam-utilities.StsTransitiveTagKeysConstraint"></a>

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@catnekaise/cdk-iam-utilities.StsTransitiveTagKeysConstraint.assemble">assemble</a></code> | *No description.* |

---

##### `assemble` <a name="assemble" id="@catnekaise/cdk-iam-utilities.StsTransitiveTagKeysConstraint.assemble"></a>

```typescript
public assemble(scope: Construct, context: ConstraintAssembleContext): ConstraintPolicyMutation[]
```

###### `scope`<sup>Required</sup> <a name="scope" id="@catnekaise/cdk-iam-utilities.StsTransitiveTagKeysConstraint.assemble.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `context`<sup>Required</sup> <a name="context" id="@catnekaise/cdk-iam-utilities.StsTransitiveTagKeysConstraint.assemble.parameter.context"></a>

- *Type:* <a href="#@catnekaise/cdk-iam-utilities.ConstraintAssembleContext">ConstraintAssembleContext</a>

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@catnekaise/cdk-iam-utilities.StsTransitiveTagKeysConstraint.tagsEqualsAndPresent">tagsEqualsAndPresent</a></code> | Limit transitive tags to those specified and check for null. |

---

##### `tagsEqualsAndPresent` <a name="tagsEqualsAndPresent" id="@catnekaise/cdk-iam-utilities.StsTransitiveTagKeysConstraint.tagsEqualsAndPresent"></a>

```typescript
import { StsTransitiveTagKeysConstraint } from '@catnekaise/cdk-iam-utilities'

StsTransitiveTagKeysConstraint.tagsEqualsAndPresent(value: string, values: string)
```

Limit transitive tags to those specified and check for null.

###### `value`<sup>Required</sup> <a name="value" id="@catnekaise/cdk-iam-utilities.StsTransitiveTagKeysConstraint.tagsEqualsAndPresent.parameter.value"></a>

- *Type:* string

---

###### `values`<sup>Required</sup> <a name="values" id="@catnekaise/cdk-iam-utilities.StsTransitiveTagKeysConstraint.tagsEqualsAndPresent.parameter.values"></a>

- *Type:* string

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@catnekaise/cdk-iam-utilities.StsTransitiveTagKeysConstraint.property.values">values</a></code> | <code>string[]</code> | *No description.* |

---

##### `values`<sup>Required</sup> <a name="values" id="@catnekaise/cdk-iam-utilities.StsTransitiveTagKeysConstraint.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---


### TagConstraint <a name="TagConstraint" id="@catnekaise/cdk-iam-utilities.TagConstraint"></a>

#### Initializers <a name="Initializers" id="@catnekaise/cdk-iam-utilities.TagConstraint.Initializer"></a>

```typescript
import { TagConstraint } from '@catnekaise/cdk-iam-utilities'

new TagConstraint()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@catnekaise/cdk-iam-utilities.TagConstraint.assemble">assemble</a></code> | *No description.* |

---

##### `assemble` <a name="assemble" id="@catnekaise/cdk-iam-utilities.TagConstraint.assemble"></a>

```typescript
public assemble(scope: Construct, context: ConstraintAssembleContext): ConstraintPolicyMutation[]
```

###### `scope`<sup>Required</sup> <a name="scope" id="@catnekaise/cdk-iam-utilities.TagConstraint.assemble.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `context`<sup>Required</sup> <a name="context" id="@catnekaise/cdk-iam-utilities.TagConstraint.assemble.parameter.context"></a>

- *Type:* <a href="#@catnekaise/cdk-iam-utilities.ConstraintAssembleContext">ConstraintAssembleContext</a>

---




### TagKeysConstraint <a name="TagKeysConstraint" id="@catnekaise/cdk-iam-utilities.TagKeysConstraint"></a>

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@catnekaise/cdk-iam-utilities.TagKeysConstraint.assemble">assemble</a></code> | *No description.* |

---

##### `assemble` <a name="assemble" id="@catnekaise/cdk-iam-utilities.TagKeysConstraint.assemble"></a>

```typescript
public assemble(scope: Construct, _: ConstraintAssembleContext): ConstraintPolicyMutation[]
```

###### `scope`<sup>Required</sup> <a name="scope" id="@catnekaise/cdk-iam-utilities.TagKeysConstraint.assemble.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `_`<sup>Required</sup> <a name="_" id="@catnekaise/cdk-iam-utilities.TagKeysConstraint.assemble.parameter._"></a>

- *Type:* <a href="#@catnekaise/cdk-iam-utilities.ConstraintAssembleContext">ConstraintAssembleContext</a>

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@catnekaise/cdk-iam-utilities.TagKeysConstraint.create">create</a></code> | *No description.* |
| <code><a href="#@catnekaise/cdk-iam-utilities.TagKeysConstraint.requireTagsEquals">requireTagsEquals</a></code> | Limit request tags to those specified and check for null. |

---

##### `create` <a name="create" id="@catnekaise/cdk-iam-utilities.TagKeysConstraint.create"></a>

```typescript
import { TagKeysConstraint } from '@catnekaise/cdk-iam-utilities'

TagKeysConstraint.create(operator: StringMultiValueConditionOperator, isNotNull: boolean, value: string, values: string)
```

###### `operator`<sup>Required</sup> <a name="operator" id="@catnekaise/cdk-iam-utilities.TagKeysConstraint.create.parameter.operator"></a>

- *Type:* <a href="#@catnekaise/cdk-iam-utilities.StringMultiValueConditionOperator">StringMultiValueConditionOperator</a>

---

###### `isNotNull`<sup>Required</sup> <a name="isNotNull" id="@catnekaise/cdk-iam-utilities.TagKeysConstraint.create.parameter.isNotNull"></a>

- *Type:* boolean

---

###### `value`<sup>Required</sup> <a name="value" id="@catnekaise/cdk-iam-utilities.TagKeysConstraint.create.parameter.value"></a>

- *Type:* string

---

###### `values`<sup>Required</sup> <a name="values" id="@catnekaise/cdk-iam-utilities.TagKeysConstraint.create.parameter.values"></a>

- *Type:* string

---

##### `requireTagsEquals` <a name="requireTagsEquals" id="@catnekaise/cdk-iam-utilities.TagKeysConstraint.requireTagsEquals"></a>

```typescript
import { TagKeysConstraint } from '@catnekaise/cdk-iam-utilities'

TagKeysConstraint.requireTagsEquals(value: string, values: string)
```

Limit request tags to those specified and check for null.

###### `value`<sup>Required</sup> <a name="value" id="@catnekaise/cdk-iam-utilities.TagKeysConstraint.requireTagsEquals.parameter.value"></a>

- *Type:* string

---

###### `values`<sup>Required</sup> <a name="values" id="@catnekaise/cdk-iam-utilities.TagKeysConstraint.requireTagsEquals.parameter.values"></a>

- *Type:* string

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@catnekaise/cdk-iam-utilities.TagKeysConstraint.property.operator">operator</a></code> | <code><a href="#@catnekaise/cdk-iam-utilities.StringMultiValueConditionOperator">StringMultiValueConditionOperator</a></code> | *No description.* |
| <code><a href="#@catnekaise/cdk-iam-utilities.TagKeysConstraint.property.values">values</a></code> | <code>string[]</code> | *No description.* |

---

##### `operator`<sup>Required</sup> <a name="operator" id="@catnekaise/cdk-iam-utilities.TagKeysConstraint.property.operator"></a>

```typescript
public readonly operator: StringMultiValueConditionOperator;
```

- *Type:* <a href="#@catnekaise/cdk-iam-utilities.StringMultiValueConditionOperator">StringMultiValueConditionOperator</a>

---

##### `values`<sup>Required</sup> <a name="values" id="@catnekaise/cdk-iam-utilities.TagKeysConstraint.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---


## Protocols <a name="Protocols" id="Protocols"></a>

### IClaimsContext <a name="IClaimsContext" id="@catnekaise/cdk-iam-utilities.IClaimsContext"></a>

- *Implemented By:* <a href="#@catnekaise/cdk-iam-utilities.IClaimsContext">IClaimsContext</a>


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@catnekaise/cdk-iam-utilities.IClaimsContext.property.knownClaims">knownClaims</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@catnekaise/cdk-iam-utilities.IClaimsContext.property.mappedClaims">mappedClaims</a></code> | <code><a href="#@catnekaise/cdk-iam-utilities.IMappedClaims">IMappedClaims</a></code> | *No description.* |

---

##### `knownClaims`<sup>Required</sup> <a name="knownClaims" id="@catnekaise/cdk-iam-utilities.IClaimsContext.property.knownClaims"></a>

```typescript
public readonly knownClaims: string[];
```

- *Type:* string[]

---

##### `mappedClaims`<sup>Required</sup> <a name="mappedClaims" id="@catnekaise/cdk-iam-utilities.IClaimsContext.property.mappedClaims"></a>

```typescript
public readonly mappedClaims: IMappedClaims;
```

- *Type:* <a href="#@catnekaise/cdk-iam-utilities.IMappedClaims">IMappedClaims</a>

---

### IConstraintsBuilder <a name="IConstraintsBuilder" id="@catnekaise/cdk-iam-utilities.IConstraintsBuilder"></a>

- *Implemented By:* <a href="#@catnekaise/cdk-iam-utilities.ConstraintsBuilder">ConstraintsBuilder</a>, <a href="#@catnekaise/cdk-iam-utilities.IConstraintsBuilder">IConstraintsBuilder</a>


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@catnekaise/cdk-iam-utilities.IConstraintsBuilder.property.constraints">constraints</a></code> | <code><a href="#@catnekaise/cdk-iam-utilities.Constraint">Constraint</a>[]</code> | *No description.* |

---

##### `constraints`<sup>Required</sup> <a name="constraints" id="@catnekaise/cdk-iam-utilities.IConstraintsBuilder.property.constraints"></a>

```typescript
public readonly constraints: Constraint[];
```

- *Type:* <a href="#@catnekaise/cdk-iam-utilities.Constraint">Constraint</a>[]

---

### IIamResourcePath <a name="IIamResourcePath" id="@catnekaise/cdk-iam-utilities.IIamResourcePath"></a>

- *Implemented By:* <a href="#@catnekaise/cdk-iam-utilities.ClaimsIamResourcePathBuilder">ClaimsIamResourcePathBuilder</a>, <a href="#@catnekaise/cdk-iam-utilities.GenericClaimsIamResourcePathBuilder">GenericClaimsIamResourcePathBuilder</a>, <a href="#@catnekaise/cdk-iam-utilities.IamResourcePathBuilder">IamResourcePathBuilder</a>, <a href="#@catnekaise/cdk-iam-utilities.IIamResourcePath">IIamResourcePath</a>

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@catnekaise/cdk-iam-utilities.IIamResourcePath.toString">toString</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@catnekaise/cdk-iam-utilities.IIamResourcePath.toString"></a>

```typescript
public toString(): string
```


### IMappedClaims <a name="IMappedClaims" id="@catnekaise/cdk-iam-utilities.IMappedClaims"></a>

- *Implemented By:* <a href="#@catnekaise/cdk-iam-utilities.MappedClaims">MappedClaims</a>, <a href="#@catnekaise/cdk-iam-utilities.IMappedClaims">IMappedClaims</a>


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@catnekaise/cdk-iam-utilities.IMappedClaims.property.claims">claims</a></code> | <code><a href="#@catnekaise/cdk-iam-utilities.Claim">Claim</a>[]</code> | *No description.* |

---

##### `claims`<sup>Required</sup> <a name="claims" id="@catnekaise/cdk-iam-utilities.IMappedClaims.property.claims"></a>

```typescript
public readonly claims: Claim[];
```

- *Type:* <a href="#@catnekaise/cdk-iam-utilities.Claim">Claim</a>[]

---

## Enums <a name="Enums" id="Enums"></a>

### ArnConditionOperator <a name="ArnConditionOperator" id="@catnekaise/cdk-iam-utilities.ArnConditionOperator"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@catnekaise/cdk-iam-utilities.ArnConditionOperator.ARN_EQUALS">ARN_EQUALS</a></code> | *No description.* |
| <code><a href="#@catnekaise/cdk-iam-utilities.ArnConditionOperator.ARN_LIKE">ARN_LIKE</a></code> | *No description.* |
| <code><a href="#@catnekaise/cdk-iam-utilities.ArnConditionOperator.ARN_NOT_EQUALS">ARN_NOT_EQUALS</a></code> | *No description.* |
| <code><a href="#@catnekaise/cdk-iam-utilities.ArnConditionOperator.ARN_NOT_LIKE">ARN_NOT_LIKE</a></code> | *No description.* |
| <code><a href="#@catnekaise/cdk-iam-utilities.ArnConditionOperator.ARN_EQUALS_IFEXISTS">ARN_EQUALS_IFEXISTS</a></code> | *No description.* |
| <code><a href="#@catnekaise/cdk-iam-utilities.ArnConditionOperator.ARN_LIKE_IFEXISTS">ARN_LIKE_IFEXISTS</a></code> | *No description.* |
| <code><a href="#@catnekaise/cdk-iam-utilities.ArnConditionOperator.ARN_NOT_EQUALS_IFEXISTS">ARN_NOT_EQUALS_IFEXISTS</a></code> | *No description.* |
| <code><a href="#@catnekaise/cdk-iam-utilities.ArnConditionOperator.ARN_NOT_LIKE_IFEXISTS">ARN_NOT_LIKE_IFEXISTS</a></code> | *No description.* |

---

##### `ARN_EQUALS` <a name="ARN_EQUALS" id="@catnekaise/cdk-iam-utilities.ArnConditionOperator.ARN_EQUALS"></a>

---


##### `ARN_LIKE` <a name="ARN_LIKE" id="@catnekaise/cdk-iam-utilities.ArnConditionOperator.ARN_LIKE"></a>

---


##### `ARN_NOT_EQUALS` <a name="ARN_NOT_EQUALS" id="@catnekaise/cdk-iam-utilities.ArnConditionOperator.ARN_NOT_EQUALS"></a>

---


##### `ARN_NOT_LIKE` <a name="ARN_NOT_LIKE" id="@catnekaise/cdk-iam-utilities.ArnConditionOperator.ARN_NOT_LIKE"></a>

---


##### `ARN_EQUALS_IFEXISTS` <a name="ARN_EQUALS_IFEXISTS" id="@catnekaise/cdk-iam-utilities.ArnConditionOperator.ARN_EQUALS_IFEXISTS"></a>

---


##### `ARN_LIKE_IFEXISTS` <a name="ARN_LIKE_IFEXISTS" id="@catnekaise/cdk-iam-utilities.ArnConditionOperator.ARN_LIKE_IFEXISTS"></a>

---


##### `ARN_NOT_EQUALS_IFEXISTS` <a name="ARN_NOT_EQUALS_IFEXISTS" id="@catnekaise/cdk-iam-utilities.ArnConditionOperator.ARN_NOT_EQUALS_IFEXISTS"></a>

---


##### `ARN_NOT_LIKE_IFEXISTS` <a name="ARN_NOT_LIKE_IFEXISTS" id="@catnekaise/cdk-iam-utilities.ArnConditionOperator.ARN_NOT_LIKE_IFEXISTS"></a>

---


### CalledViaServicePrincipal <a name="CalledViaServicePrincipal" id="@catnekaise/cdk-iam-utilities.CalledViaServicePrincipal"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@catnekaise/cdk-iam-utilities.CalledViaServicePrincipal.AOSS">AOSS</a></code> | *No description.* |
| <code><a href="#@catnekaise/cdk-iam-utilities.CalledViaServicePrincipal.ATHENA">ATHENA</a></code> | *No description.* |
| <code><a href="#@catnekaise/cdk-iam-utilities.CalledViaServicePrincipal.BACKUP">BACKUP</a></code> | *No description.* |
| <code><a href="#@catnekaise/cdk-iam-utilities.CalledViaServicePrincipal.CLOUD9">CLOUD9</a></code> | *No description.* |
| <code><a href="#@catnekaise/cdk-iam-utilities.CalledViaServicePrincipal.CLOUDFORMATION">CLOUDFORMATION</a></code> | *No description.* |
| <code><a href="#@catnekaise/cdk-iam-utilities.CalledViaServicePrincipal.DATABREW">DATABREW</a></code> | *No description.* |
| <code><a href="#@catnekaise/cdk-iam-utilities.CalledViaServicePrincipal.DATAEXCHANGE">DATAEXCHANGE</a></code> | *No description.* |
| <code><a href="#@catnekaise/cdk-iam-utilities.CalledViaServicePrincipal.DYNAMODB">DYNAMODB</a></code> | *No description.* |
| <code><a href="#@catnekaise/cdk-iam-utilities.CalledViaServicePrincipal.IMAGEBUILDER">IMAGEBUILDER</a></code> | *No description.* |
| <code><a href="#@catnekaise/cdk-iam-utilities.CalledViaServicePrincipal.KMS">KMS</a></code> | *No description.* |
| <code><a href="#@catnekaise/cdk-iam-utilities.CalledViaServicePrincipal.MGN">MGN</a></code> | *No description.* |
| <code><a href="#@catnekaise/cdk-iam-utilities.CalledViaServicePrincipal.NIMBLE">NIMBLE</a></code> | *No description.* |
| <code><a href="#@catnekaise/cdk-iam-utilities.CalledViaServicePrincipal.OMICS">OMICS</a></code> | *No description.* |
| <code><a href="#@catnekaise/cdk-iam-utilities.CalledViaServicePrincipal.RAM">RAM</a></code> | *No description.* |
| <code><a href="#@catnekaise/cdk-iam-utilities.CalledViaServicePrincipal.ROBOMAKER">ROBOMAKER</a></code> | *No description.* |
| <code><a href="#@catnekaise/cdk-iam-utilities.CalledViaServicePrincipal.SERVICECATALOG_APPREGISTRY">SERVICECATALOG_APPREGISTRY</a></code> | *No description.* |
| <code><a href="#@catnekaise/cdk-iam-utilities.CalledViaServicePrincipal.SQLWORKBENCH">SQLWORKBENCH</a></code> | *No description.* |

---

##### `AOSS` <a name="AOSS" id="@catnekaise/cdk-iam-utilities.CalledViaServicePrincipal.AOSS"></a>

---


##### `ATHENA` <a name="ATHENA" id="@catnekaise/cdk-iam-utilities.CalledViaServicePrincipal.ATHENA"></a>

---


##### `BACKUP` <a name="BACKUP" id="@catnekaise/cdk-iam-utilities.CalledViaServicePrincipal.BACKUP"></a>

---


##### `CLOUD9` <a name="CLOUD9" id="@catnekaise/cdk-iam-utilities.CalledViaServicePrincipal.CLOUD9"></a>

---


##### `CLOUDFORMATION` <a name="CLOUDFORMATION" id="@catnekaise/cdk-iam-utilities.CalledViaServicePrincipal.CLOUDFORMATION"></a>

---


##### `DATABREW` <a name="DATABREW" id="@catnekaise/cdk-iam-utilities.CalledViaServicePrincipal.DATABREW"></a>

---


##### `DATAEXCHANGE` <a name="DATAEXCHANGE" id="@catnekaise/cdk-iam-utilities.CalledViaServicePrincipal.DATAEXCHANGE"></a>

---


##### `DYNAMODB` <a name="DYNAMODB" id="@catnekaise/cdk-iam-utilities.CalledViaServicePrincipal.DYNAMODB"></a>

---


##### `IMAGEBUILDER` <a name="IMAGEBUILDER" id="@catnekaise/cdk-iam-utilities.CalledViaServicePrincipal.IMAGEBUILDER"></a>

---


##### `KMS` <a name="KMS" id="@catnekaise/cdk-iam-utilities.CalledViaServicePrincipal.KMS"></a>

---


##### `MGN` <a name="MGN" id="@catnekaise/cdk-iam-utilities.CalledViaServicePrincipal.MGN"></a>

---


##### `NIMBLE` <a name="NIMBLE" id="@catnekaise/cdk-iam-utilities.CalledViaServicePrincipal.NIMBLE"></a>

---


##### `OMICS` <a name="OMICS" id="@catnekaise/cdk-iam-utilities.CalledViaServicePrincipal.OMICS"></a>

---


##### `RAM` <a name="RAM" id="@catnekaise/cdk-iam-utilities.CalledViaServicePrincipal.RAM"></a>

---


##### `ROBOMAKER` <a name="ROBOMAKER" id="@catnekaise/cdk-iam-utilities.CalledViaServicePrincipal.ROBOMAKER"></a>

---


##### `SERVICECATALOG_APPREGISTRY` <a name="SERVICECATALOG_APPREGISTRY" id="@catnekaise/cdk-iam-utilities.CalledViaServicePrincipal.SERVICECATALOG_APPREGISTRY"></a>

---


##### `SQLWORKBENCH` <a name="SQLWORKBENCH" id="@catnekaise/cdk-iam-utilities.CalledViaServicePrincipal.SQLWORKBENCH"></a>

---


### ConditionOperator <a name="ConditionOperator" id="@catnekaise/cdk-iam-utilities.ConditionOperator"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@catnekaise/cdk-iam-utilities.ConditionOperator.STRING_EQUALS">STRING_EQUALS</a></code> | *No description.* |
| <code><a href="#@catnekaise/cdk-iam-utilities.ConditionOperator.STRING_NOT_EQUALS">STRING_NOT_EQUALS</a></code> | *No description.* |
| <code><a href="#@catnekaise/cdk-iam-utilities.ConditionOperator.STRING_EQUALS_IGNORECASE">STRING_EQUALS_IGNORECASE</a></code> | *No description.* |
| <code><a href="#@catnekaise/cdk-iam-utilities.ConditionOperator.STRING_NOT_EQUALS_IGNORECASE">STRING_NOT_EQUALS_IGNORECASE</a></code> | *No description.* |
| <code><a href="#@catnekaise/cdk-iam-utilities.ConditionOperator.STRING_LIKE">STRING_LIKE</a></code> | *No description.* |
| <code><a href="#@catnekaise/cdk-iam-utilities.ConditionOperator.STRING_NOT_LIKE">STRING_NOT_LIKE</a></code> | *No description.* |
| <code><a href="#@catnekaise/cdk-iam-utilities.ConditionOperator.STRING_EQUALS_IFEXISTS">STRING_EQUALS_IFEXISTS</a></code> | *No description.* |
| <code><a href="#@catnekaise/cdk-iam-utilities.ConditionOperator.STRING_NOT_EQUALS_IFEXISTS">STRING_NOT_EQUALS_IFEXISTS</a></code> | *No description.* |
| <code><a href="#@catnekaise/cdk-iam-utilities.ConditionOperator.STRING_EQUALS_IGNORECASE_IFEXISTS">STRING_EQUALS_IGNORECASE_IFEXISTS</a></code> | *No description.* |
| <code><a href="#@catnekaise/cdk-iam-utilities.ConditionOperator.STRING_NOT_EQUALS_IGNORECASE_IFEXISTS">STRING_NOT_EQUALS_IGNORECASE_IFEXISTS</a></code> | *No description.* |
| <code><a href="#@catnekaise/cdk-iam-utilities.ConditionOperator.STRING_LIKE_IFEXISTS">STRING_LIKE_IFEXISTS</a></code> | *No description.* |
| <code><a href="#@catnekaise/cdk-iam-utilities.ConditionOperator.STRING_NOT_LIKE_IFEXISTS">STRING_NOT_LIKE_IFEXISTS</a></code> | *No description.* |
| <code><a href="#@catnekaise/cdk-iam-utilities.ConditionOperator.DATE_EQUALS">DATE_EQUALS</a></code> | *No description.* |
| <code><a href="#@catnekaise/cdk-iam-utilities.ConditionOperator.DATE_NOT_EQUALS">DATE_NOT_EQUALS</a></code> | *No description.* |
| <code><a href="#@catnekaise/cdk-iam-utilities.ConditionOperator.DATE_LESS_THAN">DATE_LESS_THAN</a></code> | *No description.* |
| <code><a href="#@catnekaise/cdk-iam-utilities.ConditionOperator.DATE_LESS_THAN_EQUALS">DATE_LESS_THAN_EQUALS</a></code> | *No description.* |
| <code><a href="#@catnekaise/cdk-iam-utilities.ConditionOperator.DATE_GREATER_THAN">DATE_GREATER_THAN</a></code> | *No description.* |
| <code><a href="#@catnekaise/cdk-iam-utilities.ConditionOperator.DATE_GREATER_THAN_EQUALS">DATE_GREATER_THAN_EQUALS</a></code> | *No description.* |
| <code><a href="#@catnekaise/cdk-iam-utilities.ConditionOperator.DATE_EQUALS_IFEXISTS">DATE_EQUALS_IFEXISTS</a></code> | *No description.* |
| <code><a href="#@catnekaise/cdk-iam-utilities.ConditionOperator.DATE_NOT_EQUALS_IFEXISTS">DATE_NOT_EQUALS_IFEXISTS</a></code> | *No description.* |
| <code><a href="#@catnekaise/cdk-iam-utilities.ConditionOperator.DATE_LESS_THAN_IFEXISTS">DATE_LESS_THAN_IFEXISTS</a></code> | *No description.* |
| <code><a href="#@catnekaise/cdk-iam-utilities.ConditionOperator.DATE_LESS_THAN_EQUALS_IFEXISTS">DATE_LESS_THAN_EQUALS_IFEXISTS</a></code> | *No description.* |
| <code><a href="#@catnekaise/cdk-iam-utilities.ConditionOperator.DATE_GREATER_THAN_IFEXISTS">DATE_GREATER_THAN_IFEXISTS</a></code> | *No description.* |
| <code><a href="#@catnekaise/cdk-iam-utilities.ConditionOperator.DATE_GREATER_THAN_EQUALS_IFEXISTS">DATE_GREATER_THAN_EQUALS_IFEXISTS</a></code> | *No description.* |
| <code><a href="#@catnekaise/cdk-iam-utilities.ConditionOperator.NUMERIC_EQUALS">NUMERIC_EQUALS</a></code> | *No description.* |
| <code><a href="#@catnekaise/cdk-iam-utilities.ConditionOperator.NUMERIC_NOT_EQUALS">NUMERIC_NOT_EQUALS</a></code> | *No description.* |
| <code><a href="#@catnekaise/cdk-iam-utilities.ConditionOperator.NUMERIC_LESS_THAN">NUMERIC_LESS_THAN</a></code> | *No description.* |
| <code><a href="#@catnekaise/cdk-iam-utilities.ConditionOperator.NUMERIC_LESS_THAN_EQUALS">NUMERIC_LESS_THAN_EQUALS</a></code> | *No description.* |
| <code><a href="#@catnekaise/cdk-iam-utilities.ConditionOperator.NUMERIC_GREATER_THAN">NUMERIC_GREATER_THAN</a></code> | *No description.* |
| <code><a href="#@catnekaise/cdk-iam-utilities.ConditionOperator.NUMERIC_GREATER_THAN_EQUALS">NUMERIC_GREATER_THAN_EQUALS</a></code> | *No description.* |
| <code><a href="#@catnekaise/cdk-iam-utilities.ConditionOperator.NUMERIC_EQUALS_IFEXISTS">NUMERIC_EQUALS_IFEXISTS</a></code> | *No description.* |
| <code><a href="#@catnekaise/cdk-iam-utilities.ConditionOperator.NUMERIC_NOT_EQUALS_IFEXISTS">NUMERIC_NOT_EQUALS_IFEXISTS</a></code> | *No description.* |
| <code><a href="#@catnekaise/cdk-iam-utilities.ConditionOperator.NUMERIC_LESS_THAN_IFEXISTS">NUMERIC_LESS_THAN_IFEXISTS</a></code> | *No description.* |
| <code><a href="#@catnekaise/cdk-iam-utilities.ConditionOperator.NUMERIC_LESS_THAN_EQUALS_IFEXISTS">NUMERIC_LESS_THAN_EQUALS_IFEXISTS</a></code> | *No description.* |
| <code><a href="#@catnekaise/cdk-iam-utilities.ConditionOperator.NUMERIC_GREATER_THAN_IFEXISTS">NUMERIC_GREATER_THAN_IFEXISTS</a></code> | *No description.* |
| <code><a href="#@catnekaise/cdk-iam-utilities.ConditionOperator.NUMERIC_GREATER_THAN_EQUALS_IFEXISTS">NUMERIC_GREATER_THAN_EQUALS_IFEXISTS</a></code> | *No description.* |
| <code><a href="#@catnekaise/cdk-iam-utilities.ConditionOperator.FOR_ANY_VALUE_STRING_LIKE">FOR_ANY_VALUE_STRING_LIKE</a></code> | *No description.* |
| <code><a href="#@catnekaise/cdk-iam-utilities.ConditionOperator.FOR_ANY_VALUE_STRING_EQUALS">FOR_ANY_VALUE_STRING_EQUALS</a></code> | *No description.* |
| <code><a href="#@catnekaise/cdk-iam-utilities.ConditionOperator.FOR_ALL_VALUES_STRING_LIKE">FOR_ALL_VALUES_STRING_LIKE</a></code> | *No description.* |
| <code><a href="#@catnekaise/cdk-iam-utilities.ConditionOperator.FOR_ALL_VALUES_STRING_EQUALS">FOR_ALL_VALUES_STRING_EQUALS</a></code> | *No description.* |
| <code><a href="#@catnekaise/cdk-iam-utilities.ConditionOperator.FOR_ALL_VALUES_STRING_EQUALS_IGNORECASE">FOR_ALL_VALUES_STRING_EQUALS_IGNORECASE</a></code> | *No description.* |
| <code><a href="#@catnekaise/cdk-iam-utilities.ConditionOperator.BOOL">BOOL</a></code> | *No description.* |
| <code><a href="#@catnekaise/cdk-iam-utilities.ConditionOperator.BOOL_IFEXISTS">BOOL_IFEXISTS</a></code> | *No description.* |
| <code><a href="#@catnekaise/cdk-iam-utilities.ConditionOperator.BINARY_EQUALS">BINARY_EQUALS</a></code> | *No description.* |
| <code><a href="#@catnekaise/cdk-iam-utilities.ConditionOperator.ARN_EQUALS">ARN_EQUALS</a></code> | *No description.* |
| <code><a href="#@catnekaise/cdk-iam-utilities.ConditionOperator.ARN_LIKE">ARN_LIKE</a></code> | *No description.* |
| <code><a href="#@catnekaise/cdk-iam-utilities.ConditionOperator.ARN_NOT_EQUALS">ARN_NOT_EQUALS</a></code> | *No description.* |
| <code><a href="#@catnekaise/cdk-iam-utilities.ConditionOperator.ARN_NOT_LIKE">ARN_NOT_LIKE</a></code> | *No description.* |
| <code><a href="#@catnekaise/cdk-iam-utilities.ConditionOperator.ARN_EQUALS_IFEXISTS">ARN_EQUALS_IFEXISTS</a></code> | *No description.* |
| <code><a href="#@catnekaise/cdk-iam-utilities.ConditionOperator.ARN_LIKE_IFEXISTS">ARN_LIKE_IFEXISTS</a></code> | *No description.* |
| <code><a href="#@catnekaise/cdk-iam-utilities.ConditionOperator.ARN_NOT_EQUALS_IFEXISTS">ARN_NOT_EQUALS_IFEXISTS</a></code> | *No description.* |
| <code><a href="#@catnekaise/cdk-iam-utilities.ConditionOperator.ARN_NOT_LIKE_IFEXISTS">ARN_NOT_LIKE_IFEXISTS</a></code> | *No description.* |
| <code><a href="#@catnekaise/cdk-iam-utilities.ConditionOperator.IP_ADDRESS">IP_ADDRESS</a></code> | *No description.* |
| <code><a href="#@catnekaise/cdk-iam-utilities.ConditionOperator.IP_ADDRESS_IFEXISTS">IP_ADDRESS_IFEXISTS</a></code> | *No description.* |
| <code><a href="#@catnekaise/cdk-iam-utilities.ConditionOperator.NOT_IP_ADDRESS">NOT_IP_ADDRESS</a></code> | *No description.* |
| <code><a href="#@catnekaise/cdk-iam-utilities.ConditionOperator.NOT_IP_ADDRESS_IFEXISTS">NOT_IP_ADDRESS_IFEXISTS</a></code> | *No description.* |
| <code><a href="#@catnekaise/cdk-iam-utilities.ConditionOperator.NULL">NULL</a></code> | *No description.* |

---

##### `STRING_EQUALS` <a name="STRING_EQUALS" id="@catnekaise/cdk-iam-utilities.ConditionOperator.STRING_EQUALS"></a>

---


##### `STRING_NOT_EQUALS` <a name="STRING_NOT_EQUALS" id="@catnekaise/cdk-iam-utilities.ConditionOperator.STRING_NOT_EQUALS"></a>

---


##### `STRING_EQUALS_IGNORECASE` <a name="STRING_EQUALS_IGNORECASE" id="@catnekaise/cdk-iam-utilities.ConditionOperator.STRING_EQUALS_IGNORECASE"></a>

---


##### `STRING_NOT_EQUALS_IGNORECASE` <a name="STRING_NOT_EQUALS_IGNORECASE" id="@catnekaise/cdk-iam-utilities.ConditionOperator.STRING_NOT_EQUALS_IGNORECASE"></a>

---


##### `STRING_LIKE` <a name="STRING_LIKE" id="@catnekaise/cdk-iam-utilities.ConditionOperator.STRING_LIKE"></a>

---


##### `STRING_NOT_LIKE` <a name="STRING_NOT_LIKE" id="@catnekaise/cdk-iam-utilities.ConditionOperator.STRING_NOT_LIKE"></a>

---


##### `STRING_EQUALS_IFEXISTS` <a name="STRING_EQUALS_IFEXISTS" id="@catnekaise/cdk-iam-utilities.ConditionOperator.STRING_EQUALS_IFEXISTS"></a>

---


##### `STRING_NOT_EQUALS_IFEXISTS` <a name="STRING_NOT_EQUALS_IFEXISTS" id="@catnekaise/cdk-iam-utilities.ConditionOperator.STRING_NOT_EQUALS_IFEXISTS"></a>

---


##### `STRING_EQUALS_IGNORECASE_IFEXISTS` <a name="STRING_EQUALS_IGNORECASE_IFEXISTS" id="@catnekaise/cdk-iam-utilities.ConditionOperator.STRING_EQUALS_IGNORECASE_IFEXISTS"></a>

---


##### `STRING_NOT_EQUALS_IGNORECASE_IFEXISTS` <a name="STRING_NOT_EQUALS_IGNORECASE_IFEXISTS" id="@catnekaise/cdk-iam-utilities.ConditionOperator.STRING_NOT_EQUALS_IGNORECASE_IFEXISTS"></a>

---


##### `STRING_LIKE_IFEXISTS` <a name="STRING_LIKE_IFEXISTS" id="@catnekaise/cdk-iam-utilities.ConditionOperator.STRING_LIKE_IFEXISTS"></a>

---


##### `STRING_NOT_LIKE_IFEXISTS` <a name="STRING_NOT_LIKE_IFEXISTS" id="@catnekaise/cdk-iam-utilities.ConditionOperator.STRING_NOT_LIKE_IFEXISTS"></a>

---


##### `DATE_EQUALS` <a name="DATE_EQUALS" id="@catnekaise/cdk-iam-utilities.ConditionOperator.DATE_EQUALS"></a>

---


##### `DATE_NOT_EQUALS` <a name="DATE_NOT_EQUALS" id="@catnekaise/cdk-iam-utilities.ConditionOperator.DATE_NOT_EQUALS"></a>

---


##### `DATE_LESS_THAN` <a name="DATE_LESS_THAN" id="@catnekaise/cdk-iam-utilities.ConditionOperator.DATE_LESS_THAN"></a>

---


##### `DATE_LESS_THAN_EQUALS` <a name="DATE_LESS_THAN_EQUALS" id="@catnekaise/cdk-iam-utilities.ConditionOperator.DATE_LESS_THAN_EQUALS"></a>

---


##### `DATE_GREATER_THAN` <a name="DATE_GREATER_THAN" id="@catnekaise/cdk-iam-utilities.ConditionOperator.DATE_GREATER_THAN"></a>

---


##### `DATE_GREATER_THAN_EQUALS` <a name="DATE_GREATER_THAN_EQUALS" id="@catnekaise/cdk-iam-utilities.ConditionOperator.DATE_GREATER_THAN_EQUALS"></a>

---


##### `DATE_EQUALS_IFEXISTS` <a name="DATE_EQUALS_IFEXISTS" id="@catnekaise/cdk-iam-utilities.ConditionOperator.DATE_EQUALS_IFEXISTS"></a>

---


##### `DATE_NOT_EQUALS_IFEXISTS` <a name="DATE_NOT_EQUALS_IFEXISTS" id="@catnekaise/cdk-iam-utilities.ConditionOperator.DATE_NOT_EQUALS_IFEXISTS"></a>

---


##### `DATE_LESS_THAN_IFEXISTS` <a name="DATE_LESS_THAN_IFEXISTS" id="@catnekaise/cdk-iam-utilities.ConditionOperator.DATE_LESS_THAN_IFEXISTS"></a>

---


##### `DATE_LESS_THAN_EQUALS_IFEXISTS` <a name="DATE_LESS_THAN_EQUALS_IFEXISTS" id="@catnekaise/cdk-iam-utilities.ConditionOperator.DATE_LESS_THAN_EQUALS_IFEXISTS"></a>

---


##### `DATE_GREATER_THAN_IFEXISTS` <a name="DATE_GREATER_THAN_IFEXISTS" id="@catnekaise/cdk-iam-utilities.ConditionOperator.DATE_GREATER_THAN_IFEXISTS"></a>

---


##### `DATE_GREATER_THAN_EQUALS_IFEXISTS` <a name="DATE_GREATER_THAN_EQUALS_IFEXISTS" id="@catnekaise/cdk-iam-utilities.ConditionOperator.DATE_GREATER_THAN_EQUALS_IFEXISTS"></a>

---


##### `NUMERIC_EQUALS` <a name="NUMERIC_EQUALS" id="@catnekaise/cdk-iam-utilities.ConditionOperator.NUMERIC_EQUALS"></a>

---


##### `NUMERIC_NOT_EQUALS` <a name="NUMERIC_NOT_EQUALS" id="@catnekaise/cdk-iam-utilities.ConditionOperator.NUMERIC_NOT_EQUALS"></a>

---


##### `NUMERIC_LESS_THAN` <a name="NUMERIC_LESS_THAN" id="@catnekaise/cdk-iam-utilities.ConditionOperator.NUMERIC_LESS_THAN"></a>

---


##### `NUMERIC_LESS_THAN_EQUALS` <a name="NUMERIC_LESS_THAN_EQUALS" id="@catnekaise/cdk-iam-utilities.ConditionOperator.NUMERIC_LESS_THAN_EQUALS"></a>

---


##### `NUMERIC_GREATER_THAN` <a name="NUMERIC_GREATER_THAN" id="@catnekaise/cdk-iam-utilities.ConditionOperator.NUMERIC_GREATER_THAN"></a>

---


##### `NUMERIC_GREATER_THAN_EQUALS` <a name="NUMERIC_GREATER_THAN_EQUALS" id="@catnekaise/cdk-iam-utilities.ConditionOperator.NUMERIC_GREATER_THAN_EQUALS"></a>

---


##### `NUMERIC_EQUALS_IFEXISTS` <a name="NUMERIC_EQUALS_IFEXISTS" id="@catnekaise/cdk-iam-utilities.ConditionOperator.NUMERIC_EQUALS_IFEXISTS"></a>

---


##### `NUMERIC_NOT_EQUALS_IFEXISTS` <a name="NUMERIC_NOT_EQUALS_IFEXISTS" id="@catnekaise/cdk-iam-utilities.ConditionOperator.NUMERIC_NOT_EQUALS_IFEXISTS"></a>

---


##### `NUMERIC_LESS_THAN_IFEXISTS` <a name="NUMERIC_LESS_THAN_IFEXISTS" id="@catnekaise/cdk-iam-utilities.ConditionOperator.NUMERIC_LESS_THAN_IFEXISTS"></a>

---


##### `NUMERIC_LESS_THAN_EQUALS_IFEXISTS` <a name="NUMERIC_LESS_THAN_EQUALS_IFEXISTS" id="@catnekaise/cdk-iam-utilities.ConditionOperator.NUMERIC_LESS_THAN_EQUALS_IFEXISTS"></a>

---


##### `NUMERIC_GREATER_THAN_IFEXISTS` <a name="NUMERIC_GREATER_THAN_IFEXISTS" id="@catnekaise/cdk-iam-utilities.ConditionOperator.NUMERIC_GREATER_THAN_IFEXISTS"></a>

---


##### `NUMERIC_GREATER_THAN_EQUALS_IFEXISTS` <a name="NUMERIC_GREATER_THAN_EQUALS_IFEXISTS" id="@catnekaise/cdk-iam-utilities.ConditionOperator.NUMERIC_GREATER_THAN_EQUALS_IFEXISTS"></a>

---


##### `FOR_ANY_VALUE_STRING_LIKE` <a name="FOR_ANY_VALUE_STRING_LIKE" id="@catnekaise/cdk-iam-utilities.ConditionOperator.FOR_ANY_VALUE_STRING_LIKE"></a>

---


##### `FOR_ANY_VALUE_STRING_EQUALS` <a name="FOR_ANY_VALUE_STRING_EQUALS" id="@catnekaise/cdk-iam-utilities.ConditionOperator.FOR_ANY_VALUE_STRING_EQUALS"></a>

---


##### `FOR_ALL_VALUES_STRING_LIKE` <a name="FOR_ALL_VALUES_STRING_LIKE" id="@catnekaise/cdk-iam-utilities.ConditionOperator.FOR_ALL_VALUES_STRING_LIKE"></a>

---


##### `FOR_ALL_VALUES_STRING_EQUALS` <a name="FOR_ALL_VALUES_STRING_EQUALS" id="@catnekaise/cdk-iam-utilities.ConditionOperator.FOR_ALL_VALUES_STRING_EQUALS"></a>

---


##### `FOR_ALL_VALUES_STRING_EQUALS_IGNORECASE` <a name="FOR_ALL_VALUES_STRING_EQUALS_IGNORECASE" id="@catnekaise/cdk-iam-utilities.ConditionOperator.FOR_ALL_VALUES_STRING_EQUALS_IGNORECASE"></a>

---


##### `BOOL` <a name="BOOL" id="@catnekaise/cdk-iam-utilities.ConditionOperator.BOOL"></a>

---


##### `BOOL_IFEXISTS` <a name="BOOL_IFEXISTS" id="@catnekaise/cdk-iam-utilities.ConditionOperator.BOOL_IFEXISTS"></a>

---


##### `BINARY_EQUALS` <a name="BINARY_EQUALS" id="@catnekaise/cdk-iam-utilities.ConditionOperator.BINARY_EQUALS"></a>

---


##### `ARN_EQUALS` <a name="ARN_EQUALS" id="@catnekaise/cdk-iam-utilities.ConditionOperator.ARN_EQUALS"></a>

---


##### `ARN_LIKE` <a name="ARN_LIKE" id="@catnekaise/cdk-iam-utilities.ConditionOperator.ARN_LIKE"></a>

---


##### `ARN_NOT_EQUALS` <a name="ARN_NOT_EQUALS" id="@catnekaise/cdk-iam-utilities.ConditionOperator.ARN_NOT_EQUALS"></a>

---


##### `ARN_NOT_LIKE` <a name="ARN_NOT_LIKE" id="@catnekaise/cdk-iam-utilities.ConditionOperator.ARN_NOT_LIKE"></a>

---


##### `ARN_EQUALS_IFEXISTS` <a name="ARN_EQUALS_IFEXISTS" id="@catnekaise/cdk-iam-utilities.ConditionOperator.ARN_EQUALS_IFEXISTS"></a>

---


##### `ARN_LIKE_IFEXISTS` <a name="ARN_LIKE_IFEXISTS" id="@catnekaise/cdk-iam-utilities.ConditionOperator.ARN_LIKE_IFEXISTS"></a>

---


##### `ARN_NOT_EQUALS_IFEXISTS` <a name="ARN_NOT_EQUALS_IFEXISTS" id="@catnekaise/cdk-iam-utilities.ConditionOperator.ARN_NOT_EQUALS_IFEXISTS"></a>

---


##### `ARN_NOT_LIKE_IFEXISTS` <a name="ARN_NOT_LIKE_IFEXISTS" id="@catnekaise/cdk-iam-utilities.ConditionOperator.ARN_NOT_LIKE_IFEXISTS"></a>

---


##### `IP_ADDRESS` <a name="IP_ADDRESS" id="@catnekaise/cdk-iam-utilities.ConditionOperator.IP_ADDRESS"></a>

---


##### `IP_ADDRESS_IFEXISTS` <a name="IP_ADDRESS_IFEXISTS" id="@catnekaise/cdk-iam-utilities.ConditionOperator.IP_ADDRESS_IFEXISTS"></a>

---


##### `NOT_IP_ADDRESS` <a name="NOT_IP_ADDRESS" id="@catnekaise/cdk-iam-utilities.ConditionOperator.NOT_IP_ADDRESS"></a>

---


##### `NOT_IP_ADDRESS_IFEXISTS` <a name="NOT_IP_ADDRESS_IFEXISTS" id="@catnekaise/cdk-iam-utilities.ConditionOperator.NOT_IP_ADDRESS_IFEXISTS"></a>

---


##### `NULL` <a name="NULL" id="@catnekaise/cdk-iam-utilities.ConditionOperator.NULL"></a>

---


### ConstraintPolicyMutationType <a name="ConstraintPolicyMutationType" id="@catnekaise/cdk-iam-utilities.ConstraintPolicyMutationType"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@catnekaise/cdk-iam-utilities.ConstraintPolicyMutationType.CONDITION">CONDITION</a></code> | *No description.* |

---

##### `CONDITION` <a name="CONDITION" id="@catnekaise/cdk-iam-utilities.ConstraintPolicyMutationType.CONDITION"></a>

---


### IpAddressConditionOperator <a name="IpAddressConditionOperator" id="@catnekaise/cdk-iam-utilities.IpAddressConditionOperator"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@catnekaise/cdk-iam-utilities.IpAddressConditionOperator.IP_ADDRESS">IP_ADDRESS</a></code> | *No description.* |
| <code><a href="#@catnekaise/cdk-iam-utilities.IpAddressConditionOperator.IP_ADDRESS_IFEXISTS">IP_ADDRESS_IFEXISTS</a></code> | *No description.* |
| <code><a href="#@catnekaise/cdk-iam-utilities.IpAddressConditionOperator.NOT_IP_ADDRESS">NOT_IP_ADDRESS</a></code> | *No description.* |
| <code><a href="#@catnekaise/cdk-iam-utilities.IpAddressConditionOperator.NOT_IP_ADDRESS_IFEXISTS">NOT_IP_ADDRESS_IFEXISTS</a></code> | *No description.* |

---

##### `IP_ADDRESS` <a name="IP_ADDRESS" id="@catnekaise/cdk-iam-utilities.IpAddressConditionOperator.IP_ADDRESS"></a>

---


##### `IP_ADDRESS_IFEXISTS` <a name="IP_ADDRESS_IFEXISTS" id="@catnekaise/cdk-iam-utilities.IpAddressConditionOperator.IP_ADDRESS_IFEXISTS"></a>

---


##### `NOT_IP_ADDRESS` <a name="NOT_IP_ADDRESS" id="@catnekaise/cdk-iam-utilities.IpAddressConditionOperator.NOT_IP_ADDRESS"></a>

---


##### `NOT_IP_ADDRESS_IFEXISTS` <a name="NOT_IP_ADDRESS_IFEXISTS" id="@catnekaise/cdk-iam-utilities.IpAddressConditionOperator.NOT_IP_ADDRESS_IFEXISTS"></a>

---


### StringConditionOperator <a name="StringConditionOperator" id="@catnekaise/cdk-iam-utilities.StringConditionOperator"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@catnekaise/cdk-iam-utilities.StringConditionOperator.STRING_EQUALS">STRING_EQUALS</a></code> | *No description.* |
| <code><a href="#@catnekaise/cdk-iam-utilities.StringConditionOperator.STRING_NOT_EQUALS">STRING_NOT_EQUALS</a></code> | *No description.* |
| <code><a href="#@catnekaise/cdk-iam-utilities.StringConditionOperator.STRING_EQUALS_IGNORECASE">STRING_EQUALS_IGNORECASE</a></code> | *No description.* |
| <code><a href="#@catnekaise/cdk-iam-utilities.StringConditionOperator.STRING_NOT_EQUALS_IGNORECASE">STRING_NOT_EQUALS_IGNORECASE</a></code> | *No description.* |
| <code><a href="#@catnekaise/cdk-iam-utilities.StringConditionOperator.STRING_LIKE">STRING_LIKE</a></code> | *No description.* |
| <code><a href="#@catnekaise/cdk-iam-utilities.StringConditionOperator.STRING_NOT_LIKE">STRING_NOT_LIKE</a></code> | *No description.* |
| <code><a href="#@catnekaise/cdk-iam-utilities.StringConditionOperator.STRING_EQUALS_IFEXISTS">STRING_EQUALS_IFEXISTS</a></code> | *No description.* |
| <code><a href="#@catnekaise/cdk-iam-utilities.StringConditionOperator.STRING_NOT_EQUALS_IFEXISTS">STRING_NOT_EQUALS_IFEXISTS</a></code> | *No description.* |
| <code><a href="#@catnekaise/cdk-iam-utilities.StringConditionOperator.STRING_EQUALS_IGNORECASE_IFEXISTS">STRING_EQUALS_IGNORECASE_IFEXISTS</a></code> | *No description.* |
| <code><a href="#@catnekaise/cdk-iam-utilities.StringConditionOperator.STRING_NOT_EQUALS_IGNORECASE_IFEXISTS">STRING_NOT_EQUALS_IGNORECASE_IFEXISTS</a></code> | *No description.* |
| <code><a href="#@catnekaise/cdk-iam-utilities.StringConditionOperator.STRING_LIKE_IFEXISTS">STRING_LIKE_IFEXISTS</a></code> | *No description.* |
| <code><a href="#@catnekaise/cdk-iam-utilities.StringConditionOperator.STRING_NOT_LIKE_IFEXISTS">STRING_NOT_LIKE_IFEXISTS</a></code> | *No description.* |

---

##### `STRING_EQUALS` <a name="STRING_EQUALS" id="@catnekaise/cdk-iam-utilities.StringConditionOperator.STRING_EQUALS"></a>

---


##### `STRING_NOT_EQUALS` <a name="STRING_NOT_EQUALS" id="@catnekaise/cdk-iam-utilities.StringConditionOperator.STRING_NOT_EQUALS"></a>

---


##### `STRING_EQUALS_IGNORECASE` <a name="STRING_EQUALS_IGNORECASE" id="@catnekaise/cdk-iam-utilities.StringConditionOperator.STRING_EQUALS_IGNORECASE"></a>

---


##### `STRING_NOT_EQUALS_IGNORECASE` <a name="STRING_NOT_EQUALS_IGNORECASE" id="@catnekaise/cdk-iam-utilities.StringConditionOperator.STRING_NOT_EQUALS_IGNORECASE"></a>

---


##### `STRING_LIKE` <a name="STRING_LIKE" id="@catnekaise/cdk-iam-utilities.StringConditionOperator.STRING_LIKE"></a>

---


##### `STRING_NOT_LIKE` <a name="STRING_NOT_LIKE" id="@catnekaise/cdk-iam-utilities.StringConditionOperator.STRING_NOT_LIKE"></a>

---


##### `STRING_EQUALS_IFEXISTS` <a name="STRING_EQUALS_IFEXISTS" id="@catnekaise/cdk-iam-utilities.StringConditionOperator.STRING_EQUALS_IFEXISTS"></a>

---


##### `STRING_NOT_EQUALS_IFEXISTS` <a name="STRING_NOT_EQUALS_IFEXISTS" id="@catnekaise/cdk-iam-utilities.StringConditionOperator.STRING_NOT_EQUALS_IFEXISTS"></a>

---


##### `STRING_EQUALS_IGNORECASE_IFEXISTS` <a name="STRING_EQUALS_IGNORECASE_IFEXISTS" id="@catnekaise/cdk-iam-utilities.StringConditionOperator.STRING_EQUALS_IGNORECASE_IFEXISTS"></a>

---


##### `STRING_NOT_EQUALS_IGNORECASE_IFEXISTS` <a name="STRING_NOT_EQUALS_IGNORECASE_IFEXISTS" id="@catnekaise/cdk-iam-utilities.StringConditionOperator.STRING_NOT_EQUALS_IGNORECASE_IFEXISTS"></a>

---


##### `STRING_LIKE_IFEXISTS` <a name="STRING_LIKE_IFEXISTS" id="@catnekaise/cdk-iam-utilities.StringConditionOperator.STRING_LIKE_IFEXISTS"></a>

---


##### `STRING_NOT_LIKE_IFEXISTS` <a name="STRING_NOT_LIKE_IFEXISTS" id="@catnekaise/cdk-iam-utilities.StringConditionOperator.STRING_NOT_LIKE_IFEXISTS"></a>

---


### StringMultiValueConditionOperator <a name="StringMultiValueConditionOperator" id="@catnekaise/cdk-iam-utilities.StringMultiValueConditionOperator"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@catnekaise/cdk-iam-utilities.StringMultiValueConditionOperator.FOR_ANY_VALUE_STRING_LIKE">FOR_ANY_VALUE_STRING_LIKE</a></code> | *No description.* |
| <code><a href="#@catnekaise/cdk-iam-utilities.StringMultiValueConditionOperator.FOR_ALL_VALUES_STRING_LIKE">FOR_ALL_VALUES_STRING_LIKE</a></code> | *No description.* |
| <code><a href="#@catnekaise/cdk-iam-utilities.StringMultiValueConditionOperator.FOR_ALL_VALUES_STRING_EQUALS">FOR_ALL_VALUES_STRING_EQUALS</a></code> | *No description.* |
| <code><a href="#@catnekaise/cdk-iam-utilities.StringMultiValueConditionOperator.FOR_ALL_VALUES_STRING_EQUALS_IGNORECASE">FOR_ALL_VALUES_STRING_EQUALS_IGNORECASE</a></code> | *No description.* |
| <code><a href="#@catnekaise/cdk-iam-utilities.StringMultiValueConditionOperator.FOR_ANY_VALUE_STRING_EQUALS">FOR_ANY_VALUE_STRING_EQUALS</a></code> | *No description.* |

---

##### `FOR_ANY_VALUE_STRING_LIKE` <a name="FOR_ANY_VALUE_STRING_LIKE" id="@catnekaise/cdk-iam-utilities.StringMultiValueConditionOperator.FOR_ANY_VALUE_STRING_LIKE"></a>

---


##### `FOR_ALL_VALUES_STRING_LIKE` <a name="FOR_ALL_VALUES_STRING_LIKE" id="@catnekaise/cdk-iam-utilities.StringMultiValueConditionOperator.FOR_ALL_VALUES_STRING_LIKE"></a>

---


##### `FOR_ALL_VALUES_STRING_EQUALS` <a name="FOR_ALL_VALUES_STRING_EQUALS" id="@catnekaise/cdk-iam-utilities.StringMultiValueConditionOperator.FOR_ALL_VALUES_STRING_EQUALS"></a>

---


##### `FOR_ALL_VALUES_STRING_EQUALS_IGNORECASE` <a name="FOR_ALL_VALUES_STRING_EQUALS_IGNORECASE" id="@catnekaise/cdk-iam-utilities.StringMultiValueConditionOperator.FOR_ALL_VALUES_STRING_EQUALS_IGNORECASE"></a>

---


##### `FOR_ANY_VALUE_STRING_EQUALS` <a name="FOR_ANY_VALUE_STRING_EQUALS" id="@catnekaise/cdk-iam-utilities.StringMultiValueConditionOperator.FOR_ANY_VALUE_STRING_EQUALS"></a>

---

