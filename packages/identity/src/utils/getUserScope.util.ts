import { IScope } from "../types/scope.type";
import { IGetUserScopeParams } from "../types/getUserScope.type";

/**
 * Get a user's user scope (to see whether they can change themselves)
 * @param userId Id of the user whoms scope should be retrieved
 * @param userGetter Function that returns a user
 * @param userWithScopesGetter Function that returns a user with populated scopes
 */
async function getUserScope(
  userId: IGetUserScopeParams["userId"],
  userGetter: IGetUserScopeParams["userGetter"],
  userWithScopesGetter: IGetUserScopeParams["userWithScopesGetter"]
): Promise<IScope> {
  const user = await userGetter(userId);
  const userScope = (await userWithScopesGetter(userId)).scopes.find(
    (scope: any) => scope.name === user.id
  );
  return userScope;
}

export { getUserScope };
