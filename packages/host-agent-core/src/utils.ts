import { IDeployableFactory, IValidators, IValidator } from "./types";

const deployableFactory: IDeployableFactory = (
  DeployableClass,
  rawDeployable
) => {
  let args: [any, any, any, any] = [
    ...Object.keys(rawDeployable).map(key => rawDeployable[key])
  ] as [any, any, any, any];

  return new DeployableClass(...args);
};

class ObjectDoesNotPassTypeGuardError extends Error {}

class Validator implements IValidator {
  isValid: boolean = true;

  constructor(public object: any, public validators: IValidators) {}

  validate(object: any, validators: IValidators) {
    if (this.isValid && object !== (undefined || null)) {
      for (let validator of validators) {
        for (let nestedValidator of validator) {
          if (typeof nestedValidator === "string") {
            if (
              object === undefined ||
              null ||
              object.hasOwnProperty(nestedValidator) === false
            ) {
              this.isValid = false;
              throw new ObjectDoesNotPassTypeGuardError(
                `Object does pass type guard`
              );
            }
          } else if (
            this.getArrays(object[nestedValidator[0][0]]).length !== 0
          ) {
            const checkable = object[nestedValidator[0][0]];
            const arrays = this.getArrays(checkable);
            const nestedValidators = this.getNestedValidators(checkable);
            for (let array of arrays) {
              this.validate(array, [nestedValidators]);
            }
          } else {
            const nestedObject = object[nestedValidator[0][0]];
            const nestedNestedValidator = nestedValidator[1];
            console.log(nestedObject);
            console.log(nestedNestedValidator);
            this.validate(object[nestedValidator[0][0]], [nestedValidator[1]]);
          }
        }
      }
    } else {
      throw new ObjectDoesNotPassTypeGuardError(`Object does pass type guard`);
    }
  }

  getArrays(checkable) {
    let arrays = [];
    for (let key in checkable) {
      const isArray = Array.isArray(checkable[key]);
      if (isArray) {
        arrays.push(checkable);
      }
    }
    return arrays;
  }

  getNestedValidators(checkable) {
    let nestedValidators = [];
    for (let key in checkable) {
      const isArray = Array.isArray(checkable[key]);
      if (isArray) {
        nestedValidators.push(key);
      }
    }
    return nestedValidators;
  }

  evaluate() {
    this.validate(this.object, this.validators);
  }
}

export { Validator, ObjectDoesNotPassTypeGuardError, deployableFactory };
