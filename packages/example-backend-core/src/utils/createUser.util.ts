import { IUser, IScope, IRole } from "../@types";
import { assignScopeToUser } from "./assignScopeToUser.util";
import { assignRoleToUser } from "./assignRoleToUser.util";
import { assignRoleToScope } from "./assignRoleToScope.util";

interface ICreateUserParams {
  name: IUser["name"];
  password: IUser["password"];
  userCreator(name: IUser["name"], password: IUser["password"]): Promise<IUser>;
  scopeCreator(name: IScope["name"]): Promise<IScope>;
  roleCreator(name: IRole["name"]): Promise<IRole>;
  userUpdater(id: IUser["id"], newUser: IUser): Promise<IUser>;
  scopeUpdater(id: IScope["id"], newScope: IScope): Promise<IScope>;
  roleUpdater(id: IRole["id"], newRole: IRole): Promise<IRole>;
  userGetter(id: IUser["id"]): Promise<IUser>;
}

/**
 * Create a user
 * @param name Name of the user
 * @param password Password of the user
 * @param userCreator Function that creates a user
 * @param scopeCreator Function that creates a scope
 * @param roleCreator Function that creates a role
 * @param userUpdater Function that updates a user
 * @param scopeUpdater Function that updates a scope
 * @param roleUpdater Function that updates a role
 * @param userGetter Function that returns a user
 */
const createUser = async (
  name: ICreateUserParams["name"],
  password: ICreateUserParams["password"],
  userCreator: ICreateUserParams["userCreator"],
  scopeCreator: ICreateUserParams["scopeCreator"],
  roleCreator: ICreateUserParams["roleCreator"],
  userUpdater: ICreateUserParams["userUpdater"],
  scopeUpdater: ICreateUserParams["scopeUpdater"],
  roleUpdater: ICreateUserParams["roleUpdater"],
  userGetter: ICreateUserParams["userGetter"]
): Promise<IUser> => {
  // Create user
  const user = await userCreator(name, password);
  // Create user management scope
  const userScope = await scopeCreator(user.id);
  // Create role to update user for user management scope
  const userRole = await roleCreator("UPDATE:SELF");
  // Add the user management scope update role to user
  assignRoleToUser(
    userRole.id,
    user.id,
    async () => userRole,
    async () => user,
    (id: string, newRole: IRole) => roleUpdater(id, newRole),
    (id: IUser["id"], newUser: IUser) => userUpdater(id, newUser)
  );
  // Add the user management scope update role to scope
  assignRoleToScope(
    userRole.id,
    user.id,
    async () => userRole,
    async () => userScope,
    (id: string, newRole: IRole) => roleUpdater(id, newRole),
    (id: IScope["id"], newScope: IScope) => scopeUpdater(id, newScope)
  );
  // Add the user management scope to user
  assignScopeToUser(
    userScope.id,
    user.id,
    async () => userScope,
    async () => user,
    (id: IUser["id"], newScope: IScope) => scopeUpdater(id, newScope),
    (id: IUser["id"], newUser: IUser) => userUpdater(id, newUser)
  );
  // Get the updated user
  const userWithRoleAndScope = await userGetter(user.id);
  // Return the updated user
  return userWithRoleAndScope;
};

export { createUser };
