class ScopeDoesNotExistError extends Error {
  name = "ScopeDoesNotExistError";

  constructor() {
    super("A scope with this ID does not exist!");
  }
}

export { ScopeDoesNotExistError };
