class NoPasswordProvidedError extends Error {
  constructor() {
    super("No password provided!");
  }
}

export { NoPasswordProvidedError };
