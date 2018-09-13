class AuthenticationFailedError extends Error {
  constructor() {
    super("Authentication failed, wrong secret!");
  }
}

export { AuthenticationFailedError };
