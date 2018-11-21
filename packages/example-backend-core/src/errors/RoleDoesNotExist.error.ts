class RoleDoesNotExistError extends Error {
  constructor() {
    super("A role with this ID does not exist!");
    this.name = "RoleDoesNotExistError";
  }
}

export { RoleDoesNotExistError };
