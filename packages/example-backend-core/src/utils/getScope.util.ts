import { IScope } from "../@types";

interface IGetScopeParams {
  id: IScope["id"];
  scopeGetter(id: IScope["id"]): Promise<IScope>;
}

/**
 * Get a scope
 * @param id ID of the scope to get
 * @param scopeGetter Function that returns a scope
 */
const getScope = async (
  id: IGetScopeParams["id"],
  scopeGetter: IGetScopeParams["scopeGetter"]
): Promise<IScope> => scopeGetter(id);

export { getScope };
