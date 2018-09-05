import { IDeployableFactory, IValidator } from "./types";

const deployableFactory: IDeployableFactory = (
  DeployableClass,
  rawDeployable
) => {
  let args: [any, any, any, any] = [
    ...Object.keys(rawDeployable).map(key => rawDeployable[key])
  ] as [any, any, any, any];

  return new DeployableClass(...args);
};

class ObjectDoesNotPassTypeGuardException extends Error {}

class Validator {
  isValid: boolean = true;

  constructor(public object: any, public validators: IValidator) {}

  validate(object: any, validators: IValidator) {
    if (this.isValid && object !== undefined) {
      for (let validator of validators) {
        for (let nestedValidator of validator) {
          if (typeof nestedValidator === "string") {
            if (!object.hasOwnProperty(nestedValidator)) {
              this.isValid = false;
            }
          } else {
            this.validate(object[nestedValidator[0][0]], [nestedValidator[1]]);
          }
        }
      }
    } else {
      throw new ObjectDoesNotPassTypeGuardException(
        `Object does pass type guard`
      );
    }
  }

  evaluate() {
    this.validate(this.object, this.validators);
  }
}

export { Validator, ObjectDoesNotPassTypeGuardException, deployableFactory };
