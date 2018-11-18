import { IScope } from "../@types";

interface IUpdateScopeParams {
  id: IScope["id"];
  newScope: IScope;
  scopeUpdater(id: IScope["id"], newScope: IScope): IScope;
}

/**
 * Update a scope
 * @param id ID of the scope to update
 * @param newScope Scope with the new data
 * @param scopeUpdater Function that updates a scope
 */
const updateScope = async (
  id: IUpdateScopeParams["id"],
  newScope: IUpdateScopeParams["newScope"],
  scopeUpdater: IUpdateScopeParams["scopeUpdater"]
): Promise<IScope> => scopeUpdater(id, newScope);

export { updateScope };
