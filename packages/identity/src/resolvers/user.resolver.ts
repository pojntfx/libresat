import { UserController } from "../controllers/user.controller";
import { UserModel } from "../models/user.model";

const user = new UserController(UserModel);

export default {
  User: {
    roles: async (parent: any) => await user.getAllRoles(parent),
    scopes: async (parent: any) => await user.getAllScopes(parent)
  },
  Query: {
    users: async () => await user.getAll(),
    user: async (_: any, params: any) => await user.get(params.id)
  },
  Mutation: {
    assignRoleToUser: async (_: any, params: any) =>
      await user.assignRole(params),
    createUser: async (_: any, params: any) => await user.create(params),
    updateUser: async (_: any, params: any, context: any) =>
      await user.update({ ...params, context }),
    auth: async (_: any, params: any, context: any) =>
      await user.auth({ ...params, context }),
    deleteUser: async (_: any, params: any, context: any) =>
      await user.delete({ ...params, context })
  }
};

export { user };
