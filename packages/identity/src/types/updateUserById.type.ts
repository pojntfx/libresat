import { IGraphQLMongoDBController } from "@libresat/service/dist/predefined/graphQLMongoDB/controller/controller.types";
import { IUser } from "./user.type";

interface IUpdateUserByIdParams {
  updater: IGraphQLMongoDBController["update"];
  userId: IUser["id"];
  name: IUser["name"];
  password: IUser["password"];
}

export { IUpdateUserByIdParams };
