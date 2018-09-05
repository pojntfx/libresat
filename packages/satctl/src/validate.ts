class ObjectDoesNotPassTypeGuardException extends Error {}

let isValid = true;
const validate = (object: any, validators: any[]) => {
  if (isValid && object !== undefined) {
    for (let validator of validators) {
      for (let nestedValidator of validator) {
        if (typeof nestedValidator === "string") {
          if (!object.hasOwnProperty(nestedValidator)) {
            isValid = false;
          }
        } else {
          validate(object[nestedValidator[0][0]], [nestedValidator[1]]);
        }
      }
    }
  } else {
    throw new ObjectDoesNotPassTypeGuardException(
      `Object does pass type guard`
    );
  }
};

export { validate };
