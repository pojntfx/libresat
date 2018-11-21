class UserDoesNotHaveRoleErrorInThisScopeError extends Error {
  name = "UserDoesNotHaveRoleErrorInThisScopeError";

  constructor() {
    super("The user does not have the role in the scope!");
  }
}

export { UserDoesNotHaveRoleErrorInThisScopeError };
