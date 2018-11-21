import { IScope } from "../@types";

interface ICreateScopeParams {
  name: IScope["name"];
  scopeCreator(name: IScope["name"]): Promise<IScope>;
}

/**
 * Create a scope
 * @param name Name of the scope
 * @param scopeCreator Function that returns a scope
 */
const createScope = async (
  name: ICreateScopeParams["name"],
  scopeCreator: ICreateScopeParams["scopeCreator"]
): Promise<IScope> => await scopeCreator(name);

export { createScope };
