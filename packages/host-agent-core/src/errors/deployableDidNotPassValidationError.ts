class DeployableDidNotPassValidationError extends Error {
  constructor(errors: any[]) {
    super(
      `Deployable did not pass validation. Failed at the following: 
${JSON.stringify(errors, null, 2)}`
    );
  }
}

export { DeployableDidNotPassValidationError };
