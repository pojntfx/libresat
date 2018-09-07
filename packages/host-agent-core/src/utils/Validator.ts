import * as Ajv from "ajv";

type Validateable = any;

interface IValidator {
  apiVersion: string;
  schema: any;
  validateable: Validateable;
  validate(validateable: Validateable): any;
}

class Validator implements IValidator {
  private ajv: any;
  validateable: Validateable;

  constructor(public apiVersion, public schema) {
    this.ajv = new Ajv();
  }

  validate(validateable) {
    if (validateable.apiVersion === this.apiVersion) {
      const valid = this.ajv.validate(this.schema, validateable);
      if (valid) {
        return validateable;
      } else {
        throw new Error(
          `Deployable did not pass validation. Failed at the following: 
${JSON.stringify(this.ajv.errors, null, 2)}`
        );
      }
    }
  }
}

export { Validator };
