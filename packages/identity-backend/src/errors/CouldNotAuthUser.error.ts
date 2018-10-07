class CouldNotAuthUserError extends Error {
  constructor(error: Error) {
    super(`Could not auth user: ${error}`);
  }
}

export { CouldNotAuthUserError };
