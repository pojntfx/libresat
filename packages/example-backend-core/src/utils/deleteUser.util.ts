import { IUser, IRole, IScope } from "../@types";
import {
  UserDoesNotHaveRoleErrorInThisScopeError,
  UserDoesNotHaveScopeError
} from "../errors";

interface IDeleteUserParams {
  id: IUser["id"];
  userGetter(id: IUser["id"]): Promise<IUser>;
  userDeleter(id: IUser["id"]): Promise<IUser>;
  roleDeleter(id: IRole["id"]): Promise<IRole>;
  scopeDeleter(id: IScope["id"]): Promise<IScope>;
}

/**
 * Delete a user
 * @param id ID of the user to delete
 * @param userGetter Function that returns a user
 * @param userDeleter Function that deletes a user
 * @param roleDeleter Function that deletes a role
 * @param scopeDeleter Function that deletes a scope
 */
const deleteUser = async (
  id: IDeleteUserParams["id"],
  userGetter: IDeleteUserParams["userGetter"],
  userDeleter: IDeleteUserParams["userDeleter"],
  roleDeleter: IDeleteUserParams["roleDeleter"],
  scopeDeleter: IDeleteUserParams["scopeDeleter"]
) => {
  // Get user and user management scope
  const user = await userGetter(id);
  const userScope = (await user.scopes).find(scope => scope.name === user.id);
  // If the user scope exists, get the user management scope's update role
  if (userScope) {
    const userScopeRole = userScope.roles.find(
      role => role.name === "UPDATE:SELF"
    );
    // If the user management scope's update role exists, delete the management scope, role and the user
    if (userScopeRole) {
      await scopeDeleter(userScope.id);
      await roleDeleter(userScopeRole.id);
      return await userDeleter(id);
    } else {
      throw new UserDoesNotHaveRoleErrorInThisScopeError();
    }
  } else {
    throw new UserDoesNotHaveScopeError();
  }
};

export { deleteUser };
