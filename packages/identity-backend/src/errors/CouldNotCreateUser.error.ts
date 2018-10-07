class CouldNotCreateUserError extends Error {
  constructor(error: Error) {
    super(`Could not create user: ${error}`);
  }
}

export { CouldNotCreateUserError };
