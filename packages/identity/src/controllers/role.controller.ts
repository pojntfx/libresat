import { GraphQLMongoDBController as Controller } from "@libresat/service";
import { user } from "../resolvers/user.resolver";
import { deleteNested } from "../utils/deleteNested";
import { scope } from "../resolvers/scope.resolver";
import { ScopeNotFoundError } from "../errors/ScopeNotFound.error";

class RoleController extends Controller {
  getAllUsers = async (parent: any) =>
    (await this.model.findById(parent.id).populate("users")).users;

  getAllScopes = async (parent: any) =>
    (await this.model.findById(parent.id).populate("scopes")).scopes;

  private getWithScopes = async (id: string) =>
    this.model.findById(id).populate("scopes");

  async create(params: any) {
    const role = await super.create(params);
    const { id: roleScopeId } = await scope.create({ name: role.id });
    const { id: writeSelfRoleId } = await super.create({ name: "WRITE:ROLE" });

    await scope.assignRole({
      scopeId: roleScopeId,
      roleId: role.id
    });

    await scope.assignRole({
      scopeId: roleScopeId,
      roleId: writeSelfRoleId
    });

    return role;
  }

  async update(params: any) {
    const { id: roleId } = params;
    const role = await this.getWithScopes(roleId);
    if (!role) {
      throw new ScopeNotFoundError();
    } else {
      const { id: scopeId } = role.scopes.find(
        (scope: any) => scope.name === roleId
      );

      await user.auth({
        ...params,
        scopeId,
        validRolesNames: ["WRITE:ROLE"]
      });

      return super.update(roleId, {
        name: params.name
      });
    }
  }

  async delete(params: any) {
    const { id: roleId } = params;
    const role = await this.getWithScopes(roleId);
    if (!role) {
      throw new ScopeNotFoundError();
    } else {
      const { id: scopeId } = role.scopes.find(
        (scope: any) => scope.name === roleId
      );

      await user.auth({
        ...params,
        scopeId,
        validRolesNames: ["WRITE:ROLE"]
      });

      const deletedRole: any = await deleteNested(
        this,
        roleId,
        async (deletableId: string) => await super.delete(deletableId),
        [
          {
            getter: async (roleId: string) => (await this.get(roleId)).users,
            controller: user,
            path: "scopes"
          }
        ]
      );

      return deletedRole;
    }
  }
}

export { RoleController };
