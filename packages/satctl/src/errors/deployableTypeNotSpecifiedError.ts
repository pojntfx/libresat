class DeployableTypeNotSpecifiedError extends Error {
  constructor() {
    super("Deployable type not specified");
  }
}

export { DeployableTypeNotSpecifiedError };
