import { UserController } from "../controllers/user.controller";
import { UserModel } from "../models/user.model";

const user = new UserController(UserModel);

export default {
  User: {},
  Mutation: {
    assignRoleToUser: async (_: any, params: any) =>
      await user.assignRole(params),
    createUser: async (_: any, params: any) => await user.create(params),
    updateUser: async (_: any, params: any, context: any) =>
      await user.update({ ...params, context }),
    auth: async (_: any, params: any, context: any) =>
      await user.auth({ ...params, context })
  }
};

export { user };
