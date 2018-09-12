import { UserController } from "../controllers/user.controller";
import { UserModel } from "../models/user.model";

const user = new UserController(UserModel);

export default {
  Mutation: {
    createUser: async (_: any, params: any) => await user.create(params)
  },
  Query: {
    user: async (_: any, params: any) => await user.get(params.id),
    users: async (_: any, params: any) =>
      await user.filter(params.filter || undefined)
  },
  User: {
    roles: async (parent: any) => await user.getAllRoles(parent)
  }
};

export { user };
