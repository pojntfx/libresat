import { RoleController } from "../controllers/role.controller";
import { RoleModel } from "../models/role.model";

const role = new RoleController(RoleModel);

export default {
  Mutation: {
    createRole: async (_: any, params: any) => await role.create(params),
    updateRole: async (_: any, params: any) =>
      await role.update(params.roleId, params),
    deleteRole: async (_: any, params: any) => await role.delete(params.id),
    deleteAllRoles: async () => await role.deleteAll()
  },
  Query: {
    role: async (_: any, params: any) => await role.get(params.id),
    roles: async (_: any, params: any) => await role.filter(params)
  },
  Role: {
    organization: async (parent: any) => await role.getOrganization(parent),
    users: async (parent: any) => await role.getAllUsers(parent)
  }
};

export { role };
