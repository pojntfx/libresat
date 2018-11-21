class ScopeDoesNotExistError extends Error {
  constructor() {
    super("A scope with this ID does not exist!");
    this.name = "ScopeDoesNotExistError";
  }
}

export { ScopeDoesNotExistError };
