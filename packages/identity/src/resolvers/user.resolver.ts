import { UserController } from "../controllers/user.controller";
import { UserModel } from "../models/user.model";
import { role } from "./role.resolver";

const user = new UserController(UserModel);

export default {
  Mutation: {
    createUser: async (_: any, params: any) => await user.create(params)
  },
  Query: {
    user: async (_: any, params: any) => await user.get(params.id)
  },
  User: {
    roles: async (parent: any) => await user.getAllRoles(parent)
  }
};

export { user };
