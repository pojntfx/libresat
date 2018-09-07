import { User as UserModel } from "../models/user.model";
import { IUser } from "../models/user.model.types";

class User {
  static create = async ({ name }: IUser) => {
    const user = new UserModel({ name });
    await user.save();
    return await UserModel.findById(user._id);
  };
  static getAll = async () => UserModel.find();
}

export { User };
