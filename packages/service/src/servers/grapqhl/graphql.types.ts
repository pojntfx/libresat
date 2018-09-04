import { IServer } from "../server.types";
import { GraphQLServer } from "graphql-yoga";

interface IGraphQLServerCreator {
  (): GraphQLServer;
}

interface IGraphQL extends IServer {
  typeDefs: string;
  resolvers: any;
  server: GraphQLServer;
  createServer: IGraphQLServerCreator;
}

interface IGraphQLParams {
  name: IServer["name"];
  port: IServer["port"];
  typeDefs: string;
  resolvers: any[];
}

export { IGraphQL, IGraphQLParams };
