import { RoleController } from "../controllers/role.controller";
import { RoleModel } from "../models/role.model";

const role = new RoleController(RoleModel);

export default {
  Mutation: {
    createRole: async (_: any, params: any) => await role.create(params)
  },
  Query: {
    getRole: async (_: any, params: any) => await role.get(params.id)
  }
};

export { role };
