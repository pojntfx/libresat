import { Hello } from "../controllers/hello.controller";

export default {
  Query: {
    getAllHellos: async () => await Hello.getAll()
  },
  Mutation: {
    createHello: async (_: any, { name }: any) => await Hello.create({ name })
  }
};
