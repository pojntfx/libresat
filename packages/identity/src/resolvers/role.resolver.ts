import { RoleController } from "../controllers/role.controller";
import { RoleModel } from "../models/role.model";

const role = new RoleController(RoleModel);

export default {
  Role: {}
};

export { role };
