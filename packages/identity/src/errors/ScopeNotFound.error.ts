class ScopeNotFoundError extends Error {
  constructor() {
    super("Scope could not be found!");
  }
}

export { ScopeNotFoundError };
