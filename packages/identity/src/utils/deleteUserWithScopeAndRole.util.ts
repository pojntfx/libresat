import { IdeleteUserWithScopeAndRoleParams } from "../types/deleteUserWithScopeAndRole.type";
import { IUser } from "../types/user.type";

/**
 * Delete a user and it's role and scope
 * @param userId ID of the user to be deleted
 * @param scopeId ID of the user's scope to be deleted
 * @param roleId ID of the user's role to be deleted
 * @param roleDeleter Function that deletes and returns a role
 * @param scopeDeleter Function that deletes and returns a scope
 * @param userDeleter Function that deletes and returns a user
 */
async function deleteUserWithScopeAndRole(
  userId: IdeleteUserWithScopeAndRoleParams["userId"],
  scopeId: IdeleteUserWithScopeAndRoleParams["scopeId"],
  roleId: IdeleteUserWithScopeAndRoleParams["roleId"],
  roleDeleter: IdeleteUserWithScopeAndRoleParams["roleDeleter"],
  scopeDeleter: IdeleteUserWithScopeAndRoleParams["scopeDeleter"],
  userDeleter: IdeleteUserWithScopeAndRoleParams["userDeleter"]
) {
  roleDeleter(roleId);
  scopeDeleter(scopeId);
  return (await userDeleter(userId)) as IUser;
}

export { deleteUserWithScopeAndRole };
