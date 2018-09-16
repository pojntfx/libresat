class NoUserIdProvidedError extends Error {
  constructor() {
    super("No user ID provided!");
  }
}

export { NoUserIdProvidedError };
