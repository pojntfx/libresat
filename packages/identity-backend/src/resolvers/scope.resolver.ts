import { ScopeController } from "../controllers/scope.controller";
import { ScopeModel } from "../models/scope.model";

const scope = new ScopeController(ScopeModel);

export default {
  Scope: {
    users: async (parent: any) => await scope.getAllUsers(parent),
    roles: async (parent: any) => await scope.getAllRoles(parent)
  },
  Query: {
    scopes: async () => await scope.getAll(),
    scope: async (_: any, params: any) => await scope.get(params.id)
  },
  Mutation: {
    assignUserToScope: async (_: any, params: any) =>
      await scope.assignUser(params),
    assignRoleToScope: async (_: any, params: any) =>
      await scope.assignRole(params),
    createScope: async (_: any, params: any) => await scope.create(params),
    deleteScope: async (_: any, params: any, context: any) =>
      await scope.delete({ ...params, context }),
    updateScope: async (_: any, params: any, context: any) =>
      await scope.update({ ...params, context })
  }
};

export { scope };
