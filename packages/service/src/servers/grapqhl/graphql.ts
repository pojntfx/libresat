import { IGraphQL, IGraphQLParams } from "./graphql.types";
import { GraphQLServer } from "graphql-yoga";

class GraphQL implements IGraphQL {
  name: IGraphQL["name"];
  typeDefs: IGraphQL["typeDefs"];
  resolvers: IGraphQL["resolvers"];
  port: IGraphQL["port"];
  server: IGraphQL["server"];

  constructor({ name, typeDefs, resolvers, port }: IGraphQLParams) {
    this.name = name;
    this.typeDefs = typeDefs;
    this.resolvers = resolvers;
    this.port = port;
  }

  createServer() {
    this.server = new GraphQLServer({
      typeDefs: this.typeDefs,
      resolvers: this.resolvers
    });
    return this.server;
  }
}

export { GraphQL };
