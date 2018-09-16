class UserNotFoundError extends Error {
  constructor() {
    super("User could not be found!");
  }
}

export { UserNotFoundError };
