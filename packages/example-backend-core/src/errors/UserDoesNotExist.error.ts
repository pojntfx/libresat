class UserDoesNotExistError extends Error {
  name = "UserDoesNotExistError";

  constructor() {
    super("A user with this ID does not exist!");
  }
}

export { UserDoesNotExistError };
