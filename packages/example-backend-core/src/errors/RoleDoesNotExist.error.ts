class RoleDoesNotExistError extends Error {
  name = "RoleDoesNotExistError";

  constructor() {
    super("A role with this ID does not exist!");
  }
}

export { RoleDoesNotExistError };
