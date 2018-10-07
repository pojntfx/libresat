class NoCredentialsProvidedError extends Error {
  constructor() {
    super("No credentials provided!");
  }
}

export { NoCredentialsProvidedError };
