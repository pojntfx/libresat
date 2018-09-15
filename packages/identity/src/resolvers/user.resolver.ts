import { UserController } from "../controllers/user.controller";
import { UserModel } from "../models/user.model";

const user = new UserController(UserModel);

export default {
  Mutation: {
    createUser: async (_: any, params: any) => await user.create(params),
    updateUser: async (_: any, params: any, context: any) =>
      await user.update(params.userId, {
        context,
        ...params
      }),
    deleteUser: async (_: any, _2: any, context: any) =>
      await user.delete({ context }),
    deleteAllUsers: async () => await user.deleteAll(),
    authorizeByOrgAndRoles: async (_: any, params: any, context: any) =>
      await user.authorizeByOrgAndRoles({
        context,
        ...params
      })
  },
  Query: {
    user: async (_: any, params: any) => await user.get(params.id),
    users: async (_: any, params: any) => await user.filter(params)
  },
  User: {
    roles: async (parent: any) => await user.getAllRoles(parent)
  }
};

export { user };
