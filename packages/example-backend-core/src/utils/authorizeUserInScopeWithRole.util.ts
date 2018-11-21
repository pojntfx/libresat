import { IUser, IScope, IRole } from "../@types";
import {
  RoleDoesNotExistError,
  UserDoesNotHaveRoleErrorInThisScopeError
} from "../errors";

interface IAuthenticateUserInScopeWithRoleParams {
  userId: IUser["id"];
  scopeId: IScope["id"];
  roleName: IRole["name"];
  userGetter(id: IUser["id"]): Promise<IUser>;
  scopeGetter(id: IScope["id"]): Promise<IScope>;
  roleGetter(id: IRole["id"]): Promise<IRole>;
}

/**
 * Authorize a user in a scope with a role
 * @param userId ID of the user to authorize
 * @param scopeId ID of the scope to authorize the user in
 * @param roleName Name (not ID!) of the role in the scope to authorize the user in
 * @param userGetter A function that returns a user
 * @param scopeGetter A function that returns a scope
 */
const authorizeUserInScopeWithRole = async (
  userId: IAuthenticateUserInScopeWithRoleParams["userId"],
  scopeId: IAuthenticateUserInScopeWithRoleParams["scopeId"],
  roleName: IAuthenticateUserInScopeWithRoleParams["roleName"],
  userGetter: IAuthenticateUserInScopeWithRoleParams["userGetter"],
  scopeGetter: IAuthenticateUserInScopeWithRoleParams["scopeGetter"]
): Promise<boolean> => {
  // Get user to authorize
  const user = await userGetter(userId);
  // Get scope to authorize user in
  const scope = await scopeGetter(scopeId);
  // Check if user has the scope they should be authorized in
  let userHasScope = false;
  for (let userScope of user.scopes) {
    if (!userHasScope) {
      if (userScope.id === scope.id) {
        userHasScope = true;
      }
    }
  }
  // If user has the scope they should be authorized in, check if the role exists in the scope
  if (userHasScope) {
    const roleOfScope = scope.roles.find(
      scopeRole => scopeRole.name === roleName
    );
    // If the role exists in the scope, check if the user has the role
    if (roleOfScope) {
      const rolesOfUser = user.roles.filter(
        userRole => userRole.name === roleName
      );
      let userHasRoleOfScope = false;
      for (let roleOfUser of rolesOfUser) {
        if (roleOfUser.id === roleOfScope.id) {
          userHasRoleOfScope = true;
        }
      }
      if (userHasRoleOfScope) {
        return true;
      } else {
        throw new UserDoesNotHaveRoleErrorInThisScopeError();
      }
    } else {
      throw new RoleDoesNotExistError();
    }
  } else {
    throw new UserDoesNotHaveRoleErrorInThisScopeError();
  }
};

export { authorizeUserInScopeWithRole };
