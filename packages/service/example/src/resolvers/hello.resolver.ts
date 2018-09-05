import { Hello } from "../controllers/hello.controller";

export default {
  Query: {
    createHello: async (_, { name }) => await Hello.create({ name }),
    getAllHellos: async () => await Hello.getAll()
  }
};
