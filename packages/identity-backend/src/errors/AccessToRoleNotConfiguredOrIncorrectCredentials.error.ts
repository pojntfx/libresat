class AccessToRoleNotConfiguredOrIncorrectCredentialsError extends Error {
  constructor(error: Error) {
    super(
      `Access to this role has not yet been configured or credentials are incorrect: ${error}`
    );
  }
}

export { AccessToRoleNotConfiguredOrIncorrectCredentialsError };
