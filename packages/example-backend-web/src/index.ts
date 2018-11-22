import { GraphQLMongoDB as Service, loadPath } from "@libresat/service";

const service = new Service(
  "example-backend-web",
  3000,
  "mongodb://localhost:27017",
  loadPath(__dirname, "typeDefs"),
  loadPath(__dirname, "resolvers")
);

export { service };
