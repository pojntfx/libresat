import {
  loadPath,
  MongoDB,
  GraphQL,
  TypeDefMerger,
  ResolverMerger,
  ModelMerger,
  Service
} from "../../src/index";

const {
  services: [server, database]
} = new Service("example-service", [
  new GraphQL(
    "example-service-server",
    new TypeDefMerger(loadPath(__dirname, "typeDefs")).merge(),
    new ResolverMerger(loadPath(__dirname, "resolvers")).merge(),
    3000
  ).start(),
  new MongoDB({
    name: "example-service-database",
    models: new ModelMerger().merge(),
    url: "mongodb://localhost:21700"
  })
]);

console.log(server, database);
