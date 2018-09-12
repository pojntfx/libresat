import { UserController } from "../controllers/user.controller";
import { UserModel } from "../models/user.model";

const user = new UserController(UserModel);

export default {
  Mutation: {
    createUser: async (_: any, params: any) => await user.create(params),
    updateUser: async (_: any, params: any) =>
      await user.update(params.userId, params),
    deleteUser: async (_: any, params: any) => await user.delete(params.id),
    deleteAllUsers: async () => await user.deleteAll()
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
