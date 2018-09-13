import { IGraphQL, IGraphQLParams } from "./graphql.types";
import { GraphQLServer } from "graphql-yoga";

class GraphQL implements IGraphQL {
  server!: IGraphQL["server"];

  constructor(
    public name: IGraphQLParams["name"],
    public typeDefs: IGraphQLParams["typeDefs"],
    public resolvers: IGraphQLParams["resolvers"],
    public port: IGraphQLParams["port"],
    public enableHeaders?: IGraphQLParams["enableHeaders"]
  ) {}

  createServer() {
    this.server = new GraphQLServer({
      typeDefs: this.typeDefs,
      resolvers: this.resolvers,
      context: this.enableHeaders
        ? ({ request: { headers } }) => ({
            headers
          })
        : undefined
    });
    return this.server;
  }

  listen() {
    this.server.start({ port: this.port }, ({ port }) =>
      console.log(`${this.name} is listening on port ${port}!`)
    );
    return this;
  }

  start() {
    this.createServer();
    this.listen();
    return this;
  }
}

export { GraphQL };
