class UserWithNameExistsError extends Error {
  constructor() {
    super("A user with this name already exists!");
  }
}

export { UserWithNameExistsError };
