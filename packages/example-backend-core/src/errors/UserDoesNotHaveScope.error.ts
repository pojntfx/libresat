class UserDoesNotHaveScopeError extends Error {
  name = "UserDoesNotHaveScopeError";

  constructor() {
    super("The user does not have this scope!");
  }
}

export { UserDoesNotHaveScopeError };
