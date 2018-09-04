import {
  composeService,
  MongoDB,
  GraphQL,
  TypeDefMerger,
  ResolverMerger
} from "../../src/index";

const { server, database } = composeService({
  name: "example-service",
  server: new GraphQL({
    name: "example-service-server",
    typeDefs: new TypeDefMerger().merge(),
    resolvers: new ResolverMerger().merge(),
    port: 3000
  }),
  database: new MongoDB()
});

console.log(server, database);
