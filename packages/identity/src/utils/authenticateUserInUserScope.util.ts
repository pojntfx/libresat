import { IUser } from "../types/user.type";
import { WRITE_SELF } from "../constants/roles.constants";
import { IAuthenticateUserInUserScopeParams } from "../types/authenticateUserInUserScope.type";

/**
 * Authenticate a user in it's own userScope (to see whether the user is allowed to change themselves)
 * @param authenticator Function that authenticates and returns the user
 * @param userScopeId I of the user's scope
 * @param params Parameters containing the user's authentication credentials
 */
async function authenticateUserInUserScope(
  authenticator: IAuthenticateUserInUserScopeParams["authenticator"],
  userScopeId: IAuthenticateUserInUserScopeParams["scopeId"],
  params: IAuthenticateUserInUserScopeParams["params"]
): Promise<IUser> {
  const user = await authenticator({
    ...params,
    scopeId: userScopeId,
    validRolesNames: [WRITE_SELF]
  });

  return user;
}

export { authenticateUserInUserScope };
