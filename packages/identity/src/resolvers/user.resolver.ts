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
      await user.assignRole(params)
  }
};

export { user };
