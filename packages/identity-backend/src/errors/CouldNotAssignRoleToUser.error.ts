class CouldNotAssignRoleToUserError extends Error {
  constructor(error: Error) {
    super(`Could not assign role to user: ${error}`);
  }
}

export { CouldNotAssignRoleToUserError };
