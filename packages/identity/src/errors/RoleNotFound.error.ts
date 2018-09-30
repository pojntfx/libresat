class RoleNotFoundError extends Error {
  constructor() {
    super("Role could not be found!");
  }
}

export { RoleNotFoundError };
