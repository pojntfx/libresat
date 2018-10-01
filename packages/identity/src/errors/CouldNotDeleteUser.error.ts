class CouldNotDeleteUserError extends Error {
  constructor(error: Error) {
    super(`Could not delete user: ${error}`);
  }
}

export { CouldNotDeleteUserError };
