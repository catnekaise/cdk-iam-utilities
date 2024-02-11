export class PolicyVariable {

  static principalTag(tagName: string, defaultValue?: string): PolicyVariable {
    return new PolicyVariable('PrincipalTag', defaultValue, tagName);
  }

  static principalType(defaultValue?: string): PolicyVariable {
    return new PolicyVariable('PrincipalType', defaultValue);
  }

  static requestTag(tagName: string, defaultValue?: string): PolicyVariable {
    return new PolicyVariable('RequestTag', defaultValue, tagName);
  }

  static resourceTag(tagName: string, defaultValue?: string): PolicyVariable {
    return new PolicyVariable('ResourceTag', defaultValue, tagName);
  }

  static userId(defaultValue?: string): PolicyVariable {
    return new PolicyVariable('userid', defaultValue);
  }

  static username(defaultValue?: string): PolicyVariable {
    return new PolicyVariable('username', defaultValue);
  }

  private constructor(public readonly type: string, public readonly defaultValue?: string, public readonly tagName?: string) {
  }

  get isTag(): boolean {
    return ['PrincipalTag', 'ResourceTag', 'RequestTag'].includes(this.type);
  }

  toString(): string {

    let defaultValueStr = '';

    if (this.defaultValue && this.defaultValue !== '') {
      defaultValueStr = `, '${this.defaultValue}'`;
    }

    if (!this.isTag) {
      return `\${aws:${this.type}${defaultValueStr}}`;
    }

    return `\${aws:${this.type}/${this.tagName}${defaultValueStr}}`;

  }

}
