import { composeService } from "../../src/utils/composeService";
import { GraphQL } from "../../src/servers/grapqhl/graphql";
import { MongoDB } from "../../src/databases/mongodb/mongodb";
import { TypeDefMerger } from "../../src/mergers/typedefs/typedefs";
import { ResolverMerger } from "../../src/mergers/resolvers/resolvers";

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
