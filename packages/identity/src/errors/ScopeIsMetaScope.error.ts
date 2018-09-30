class ScopeIsMetaScopeError extends Error {
  constructor() {
    super("Scope is immutable meta scope, delete the parent scope instead!");
  }
}

export { ScopeIsMetaScopeError };
