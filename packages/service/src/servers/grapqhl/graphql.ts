import { IGraphQL, IGraphQLParams } from "./graphql.types";
import { GraphQLServer } from "graphql-yoga";

class GraphQL implements IGraphQL {
  server: IGraphQL["server"];

  constructor(
    public name: IGraphQLParams["name"],
    public typeDefs: IGraphQLParams["typeDefs"],
    public resolvers: IGraphQLParams["resolvers"],
    public port: IGraphQLParams["port"]
  ) {}

  createServer() {
    this.server = new GraphQLServer({
      typeDefs: this.typeDefs,
      resolvers: this.resolvers
    });
    return this.server;
  }
}

export { GraphQL };
