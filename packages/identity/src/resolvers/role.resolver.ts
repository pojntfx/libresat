import { RoleController } from "../controllers/role.controller";
import { RoleModel } from "../models/role.model";

const role = new RoleController(RoleModel);

export default {
  Role: {},
  Mutation: {
    createRole: async (_: any, params: any) => await role.create(params)
  }
};

export { role };
