import { RoleController } from "../controllers/role.controller";
import { RoleModel } from "../models/role.model";

const role = new RoleController(RoleModel);

export default {
  Role: {
    users: async (parent: any) => await role.getAllUsers(parent),
    scopes: async (parent: any) => await role.getAllScopes(parent)
  },
  Query: {
    roles: async () => await role.getAll(),
    role: async (_: any, params: any) => await role.get(params.id)
  },
  Mutation: {
    createRole: async (_: any, params: any) => await role.create(params)
  }
};

export { role };
