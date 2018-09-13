class AuthenticationFailedError extends Error {
  constructor() {
    super("Authentication failed, wrong username or password!");
  }
}

export { AuthenticationFailedError };
