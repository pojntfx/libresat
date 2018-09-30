import { GraphQLMongoDBController as Controller } from "@libresat/service";
import { user } from "../resolvers/user.resolver";
import { role } from "../resolvers/role.resolver";
import { assign } from "../utils/assign";
import { AccessToScopeNotConfiguredOrIncorrectCredentialsError } from "../errors/AccessToScopeNotConfiguredOrIncorrectCredentials.error";
import { deleteNested } from "../utils/deleteNested";
import { ScopeIsMetaScopeError } from "../errors/ScopeIsMetaScope.error";
import { ScopeNotFoundError } from "../errors/ScopeNotFound.error";

class ScopeController extends Controller {
  async assignUser(params: any) {
    const { scopeId, userId } = params;

    const scopeToAssignUserTo = await assign(
      this,
      scopeId,
      "users",
      user,
      userId,
      "scopes"
    );

    return scopeToAssignUserTo;
  }

  async assignRole(params: any) {
    const { scopeId, roleId } = params;

    const scopeToAssignRoleTo = await assign(
      this,
      scopeId,
      "roles",
      role,
      roleId,
      "scopes"
    );

    return scopeToAssignRoleTo;
  }

  getWithRoles = async (id: string) =>
    this.model.findById(id).populate("roles");

  getAllUsers = async (parent: any) =>
    (await this.model.findById(parent.id).populate("users")).users;

  getAllRoles = async (parent: any) =>
    (await this.model.findById(parent.id).populate("roles")).roles;

  async update(params: any) {
    try {
      await user.auth({
        ...params,
        scopeId: params.scopeId,
        validRolesNames: ["WRITE:SELF"]
      });
      const scope = await this.get(params.scopeId);
      if (!scope) {
        throw new ScopeNotFoundError();
      } else {
        if (scope.isMeta) {
          throw new ScopeIsMetaScopeError();
        } else {
          return super.update(params.scopeId, {
            name: params.name
          });
        }
      }
    } catch (e) {
      throw new AccessToScopeNotConfiguredOrIncorrectCredentialsError(e);
    }
  }

  async delete(params: any) {
    try {
      const { id: scopeId } = params;
      await user.auth({
        ...params,
        scopeId,
        validRolesNames: ["WRITE:SCOPE"]
      });
      const scope = await this.get(scopeId);
      if (!scope) {
        throw new ScopeNotFoundError();
      } else {
        if (scope.isMeta) {
          throw new ScopeIsMetaScopeError();
        } else {
          const deletedScope: any = await deleteNested(
            this,
            scopeId,
            async (deletableId: string) => await super.delete(deletableId),
            [
              {
                getter: async (scopeId: string) =>
                  (await this.get(scopeId)).users,
                controller: user,
                path: "scopes"
              }
            ]
          );

          return deletedScope;
        }
      }
    } catch (e) {
      throw new AccessToScopeNotConfiguredOrIncorrectCredentialsError(e);
    }
  }
}

export { ScopeController };
