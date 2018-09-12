import { UserController } from "../controllers/user.controller";
import { UserModel } from "../models/user.model";

const user = new UserController(UserModel);

export default {
  Mutation: {
    createUser: async (_: any, params: any) => await user.create(params)
  },
  Query: {
    getUser: async (_: any, params: any) => await user.get(params.id)
  }
};

export { user };
