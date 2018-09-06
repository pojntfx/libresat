class UnknownDeployableError extends Error {
  constructor() {
    super("Unknown deployable");
  }
}

export { UnknownDeployableError };
