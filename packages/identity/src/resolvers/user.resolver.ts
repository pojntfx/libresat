import { UserController } from "../controllers/user.controller";
import { UserModel } from "../models/user.model";

const user = new UserController(UserModel);

export default {
  Query: {
    hello: async () => "Hello, world!"
  },
  User: {},
  Mutation: {
    assignRoleToUser: async (_: any, params: any) =>
      await user.assignRole(params),
    createUser: async (_: any, params: any) => await user.create(params),
    authorize: async (_: any, params: any) => await user.authorize(params)
  }
};

export { user };
