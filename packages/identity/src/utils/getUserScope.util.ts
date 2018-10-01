import { IScope } from "../types/scope.type";
import { IGetUserScopeParams } from "../types/getUserScope.type";

/**
 * Get a user's user scope (to see whether they can change themselves)
 * @param userController User controller
 * @param userId Id of the user whoms scope should be retrieved
 */
async function getUserScope(
  userController: IGetUserScopeParams["userController"],
  userId: IGetUserScopeParams["userId"]
): Promise<IScope> {
  const user = await userController.get(userId);
  const userScope = (await userController.getWithScopes(userId)).scopes.find(
    (scope: any) => scope.name === user.id
  );
  return userScope;
}

export { getUserScope };
