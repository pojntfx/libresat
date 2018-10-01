class CouldNotUpdateUserError extends Error {
  constructor(error: Error) {
    super(`Could not update user: ${error}`);
  }
}

export { CouldNotUpdateUserError };
