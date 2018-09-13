class AuthorizationFailedError extends Error {
  constructor() {
    super(
      "Authorization failed, user does not have the necessary priviledges!"
    );
  }
}

export { AuthorizationFailedError };
