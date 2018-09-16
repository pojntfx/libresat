import { ScopeController } from "../controllers/scope.controller";
import { ScopeModel } from "../models/scope.model";

const scope = new ScopeController(ScopeModel);

export default {
  Scope: {},
  Mutation: {
    assignUserToScope: async (_: any, params: any) =>
      await scope.assignUser(params),
    assignRoleToScope: async (_: any, params: any) =>
      await scope.assignRole(params),
    createScope: async (_: any, params: any) =>
      await scope.create(params)
  }
};

export { scope };
