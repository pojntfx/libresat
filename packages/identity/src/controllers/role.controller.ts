import { GraphQLMongoDBController as Controller } from "@libresat/service";
import { user } from "../resolvers/user.resolver";
import { deleteNested } from "../utils/deleteNested";

class RoleController extends Controller {
  getAllUsers = async (parent: any) =>
    (await this.model.findById(parent.id).populate("users")).users;

  getAllScopes = async (parent: any) =>
    (await this.model.findById(parent.id).populate("scopes")).scopes;

  private getWithScopes = async (id: string) =>
    this.model.findById(id).populate("scopes");

  async delete(params: any) {
    const { id: roleId } = params;
    const { scopes } = await this.getWithScopes(roleId);
    const { id: scopeId } = scopes.find((scope: any) => scope.name === roleId);

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

export { RoleController };
