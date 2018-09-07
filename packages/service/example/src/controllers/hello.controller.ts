import { Hello as HelloModel } from "../models/hello.model";

class Hello {
  static create = async ({ name }: any) => {
    const hello = new HelloModel({ name });
    await hello.save();
    return await HelloModel.findById(hello._id);
  };
  static getAll = async () => HelloModel.find();
}

export { Hello };
