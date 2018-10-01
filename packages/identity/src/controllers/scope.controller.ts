import { GraphQLMongoDBController as Controller } from "@libresat/service";
import { user } from "../resolvers/user.resolver";
import { role } from "../resolvers/role.resolver";
import { assign } from "../utils/assign.util";
import { AccessToScopeNotConfiguredOrIncorrectCredentialsError } from "../errors/AccessToScopeNotConfiguredOrIncorrectCredentials.error";
import { ScopeIsMetaScopeError } from "../errors/ScopeIsMetaScope.error";
import { ScopeNotFoundError } from "../errors/ScopeNotFound.error";
import { WRITE_SELF, WRITE_SCOPE } from "../constants/roles.constants";
import { deleteNested } from "../utils/deleteNested.util";
import { IScopeController } from "../types/scope.type";

class ScopeController extends Controller implements IScopeController {
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
        validRolesNames: [WRITE_SELF]
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

  async deleteWithCredentials(params: any) {
    try {
      const { id: scopeId } = params;
      await user.auth({
        ...params,
        scopeId,
        validRolesNames: [WRITE_SCOPE]
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
