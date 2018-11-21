import { IScope } from "../@types";

interface IDeleteScopeParams {
  id: IScope["id"];
  scopeDeleter(id: IScope["id"]): Promise<IScope>;
}

/**
 * Delete a scope
 * @param id ID of the scope to delete
 * @param scopeDeleter Function that deletes a scope
 */
const deleteScope = async (
  id: IDeleteScopeParams["id"],
  scopeDeleter: IDeleteScopeParams["scopeDeleter"]
) => await scopeDeleter(id);

export { deleteScope };
