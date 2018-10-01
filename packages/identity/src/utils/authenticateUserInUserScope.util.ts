import { IUser } from "../types/user.type";
import { WRITE_SELF } from "../constants/roles.constants";
import { IAuthenticateUserInUserScopeParams } from "../types/authenticateUserInUserScope.type";

/**
 * Authenticate a user in it's own userScope (to see whether the user is allowed to change themselves)
 * @param userController User controller
 * @param userScopeId I of the user's scope
 * @param params Parameters containing the user's authentication credentials
 */
async function authenticateUserInUserScope(
  userController: IAuthenticateUserInUserScopeParams["userController"],
  userScopeId: IAuthenticateUserInUserScopeParams["scopeId"],
  params: IAuthenticateUserInUserScopeParams["params"]
): Promise<IUser> {
  const user = await userController.auth({
    ...params,
    scopeId: userScopeId,
    validRolesNames: [WRITE_SELF]
  });

  return user;
}

export { authenticateUserInUserScope };
