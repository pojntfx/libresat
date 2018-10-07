class UserNotFoundError extends Error {
  constructor() {
    super("User could not be found in this scope or role!");
  }
}

export { UserNotFoundError };
