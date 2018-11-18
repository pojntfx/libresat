import { IScope, IUser } from "../@types";

interface IAssignScopeToUserParams {
  scopeId: IScope["id"];
  userId: IUser["id"];
  scopeGetter(id: IScope["id"]): Promise<IScope>;
  userGetter(id: IUser["id"]): Promise<IUser>;
  scopeUpdater(id: IScope["id"], newScope: IScope): Promise<IScope>;
  userUpdater(id: IUser["id"], newUser: IUser): Promise<IUser>;
}

/**
 * Assign a scope to a user and a user to a scope
 * @param scopeId ID of the scope to assign the user to
 * @param userId ID of the user to assign the scope to
 * @param scopeGetter Function that returns a scope
 * @param userGetter Function that returns a user
 * @param scopeUpdater Function that updates a scope
 * @param userUpdater Function that updates a user
 */
const assignScopeToUser = async (
  scopeId: IAssignScopeToUserParams["scopeId"],
  userId: IAssignScopeToUserParams["userId"],
  scopeGetter: IAssignScopeToUserParams["scopeGetter"],
  userGetter: IAssignScopeToUserParams["userGetter"],
  scopeUpdater: IAssignScopeToUserParams["scopeUpdater"],
  userUpdater: IAssignScopeToUserParams["userUpdater"]
): Promise<IScope> => {
  // Get user and scope
  const scope = await scopeGetter(scopeId);
  const user = await userGetter(userId);
  // Add user to scope, add scope to user
  scope.users.push(user);
  user.scopes.push(scope);
  // Update the user and scope
  const updatedScope = await scopeUpdater(scopeId, scope);
  await userUpdater(userId, user);
  // Return updated scope
  return updatedScope;
};

export { assignScopeToUser };
