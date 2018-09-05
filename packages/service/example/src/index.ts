import { GraphQLMongoDB as Service, loadPath } from "../../src/index";

const { service, server, database } = new Service(
  "example-service",
  3000,
  "mongodb://localhost:27017",
  loadPath(__dirname, "typeDefs"),
  loadPath(__dirname, "resolvers")
).start();

export { service, server, database };
