import {
  loadPath,
  MongoDB,
  GraphQL,
  TypeDefMerger,
  ResolverMerger,
  Service
} from "../../src/index";

const service = new Service("example-service", [
  new GraphQL(
    "example-service-server",
    new TypeDefMerger(loadPath(__dirname, "typeDefs")).merge(),
    new ResolverMerger(loadPath(__dirname, "resolvers")).merge(),
    3000
  ).start(),
  new MongoDB("example-service-database", "mongodb://localhost:27017").start()
]);

console.log(<GraphQL>service.services[0]); // This is the service
console.log(<MongoDB>service.services[1]); // This is the service

const server = (<GraphQL>service.services[0]).server; // This is the actual server
const database = (<MongoDB>service.services[1]).database; // This is the actual database

export { service, server, database };
