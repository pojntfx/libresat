import {
  composeService,
  loadPath,
  MongoDB,
  GraphQL,
  TypeDefMerger,
  ResolverMerger,
  ModelMerger
} from "../../src/index";

const { server, database } = composeService({
  name: "example-service",
  server: new GraphQL(
    "example-service-server",
    new TypeDefMerger(loadPath("typeDefs")).merge(),
    new ResolverMerger().merge(),
    3000
  ),
  database: new MongoDB({
    name: "example-service-database",
    models: new ModelMerger().merge(),
    url: "mongodb://localhost:21700"
  })
});

console.log(server, database);
