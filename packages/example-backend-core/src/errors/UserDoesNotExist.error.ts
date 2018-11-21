class UserDoesNotExistError extends Error {
  constructor() {
    super("A user with this ID does not exist!");
    this.name = "UserDoesNotExistError";
  }
}

export { UserDoesNotExistError };
