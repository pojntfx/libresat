import { ScopeController } from "../controllers/scope.controller";
import { ScopeModel } from "../models/scope.model";

const scope = new ScopeController(ScopeModel);

export default {
  Query: {
    scopes: async () => scope.getAll(),
    scope: async (_: any, params: any) => scope.get(params.id)
  },
  Scope: {
    users: async (parent: any) => await scope.getAllUsers(parent),
    roles: async (parent: any) => await scope.getAllRoles(parent)
  },
  Mutation: {
    assignUserToScope: async (_: any, params: any) =>
      await scope.assignUser(params),
    assignRoleToScope: async (_: any, params: any) =>
      await scope.assignRole(params),
    createScope: async (_: any, params: any) => await scope.create(params)
  }
};

export { scope };
