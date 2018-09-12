import { RoleController } from "../controllers/role.controller";
import { RoleModel } from "../models/role.model";

const role = new RoleController(RoleModel);

export default {
  Mutation: {
    createRole: async (_: any, params: any) => await role.create(params)
  },
  Query: {
    role: async (_: any, params: any) => await role.get(params.id),
    roles: async (_: any, params: any) =>
      await role.filter(params.filter || undefined)
  },
  Role: {
    organization: async (parent: any) => await role.getOrganization(parent),
    users: async (parent: any) => await role.getAllUsers(parent)
  }
};

export { role };
