import {
  composeService,
  MongoDB,
  GraphQL,
  TypeDefMerger,
  ResolverMerger,
  ModelMerger
} from "../../src/index";

const { server, database } = composeService({
  name: "example-service",
  server: new GraphQL({
    name: "example-service-server",
    typeDefs: new TypeDefMerger().merge(),
    resolvers: new ResolverMerger().merge(),
    port: 3000
  }),
  database: new MongoDB({
    name: "example-service-database",
    models: new ModelMerger().merge(),
    url: "mongodb://localhost:21700"
  })
});

console.log(server, database);
