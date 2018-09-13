import { IServer } from "../server.types";
import { GraphQLServer } from "graphql-yoga";

interface IGraphQLServerCreator {
  (): GraphQLServer;
}

interface IGraphQLServerStarter {
  (): any;
}

interface IGraphQL extends IServer {
  typeDefs: string;
  resolvers: any;
  server: GraphQLServer;
  createServer: IGraphQLServerCreator;
  listen: IGraphQLServerStarter;
  start: IGraphQLServerStarter;
}

interface IGraphQLParams {
  name: IServer["name"];
  port: IServer["port"];
  typeDefs: string;
  resolvers: any;
  enableHeaders: boolean;
}

export { IGraphQL, IGraphQLParams };
