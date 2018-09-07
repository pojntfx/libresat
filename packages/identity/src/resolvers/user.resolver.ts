import { User } from "../controllers/user.controller";
import { IUser } from "../models/user.model.types";

export default {
  Query: {
    createUser: async (_: any, { name }: IUser) => await User.create({ name }),
    allUsers: async () => await User.getAll()
  }
};
