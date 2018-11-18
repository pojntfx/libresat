import { IRole, IScope } from "../@types";

interface IAssignRoleToScopeParams {
  roleId: IRole["id"];
  scopeId: IScope["id"];
  roleGetter(id: IRole["id"]): Promise<IRole>;
  scopeGetter(id: IScope["id"]): Promise<IScope>;
  roleUpdater(id: IRole["id"], newRole: IRole): Promise<IRole>;
  scopeUpdater(id: IScope["id"], newScope: IScope): Promise<IScope>;
}

/**
 * Assign a role to a scope and assign scope to a role
 * @param roleId ID of the role to assign the scope to
 * @param scopeId ID of the scope to assign the role to
 * @param roleGetter Function that returns a role
 * @param scopeGetter Function that returns a scope
 * @param roleUpdater Function that updates a role
 * @param scopeUpdater Function that updates a scope
 */
const assignRoleToScope = async (
  roleId: IAssignRoleToScopeParams["roleId"],
  scopeId: IAssignRoleToScopeParams["scopeId"],
  roleGetter: IAssignRoleToScopeParams["roleGetter"],
  scopeGetter: IAssignRoleToScopeParams["scopeGetter"],
  roleUpdater: IAssignRoleToScopeParams["roleUpdater"],
  scopeUpdater: IAssignRoleToScopeParams["scopeUpdater"]
): Promise<IRole> => {
  // Get scope and role
  const role = await roleGetter(roleId);
  const scope = await scopeGetter(scopeId);
  // Add scope to role, add role to scope
  role.scopes.push(scope);
  scope.roles.push(role);
  // Update the scope and role
  const updatedRole = await roleUpdater(roleId, role);
  await scopeUpdater(scopeId, scope);
  // Return updated role
  return updatedRole;
};

export { assignRoleToScope };
