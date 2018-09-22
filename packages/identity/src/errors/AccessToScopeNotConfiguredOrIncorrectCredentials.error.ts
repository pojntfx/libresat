class AccessToScopeNotConfiguredOrIncorrectCredentialsError extends Error {
  constructor(error: Error) {
    super(
      `Access to this scope has not yet been configured or credentials are incorrect: ${error}`
    );
  }
}

export { AccessToScopeNotConfiguredOrIncorrectCredentialsError };
