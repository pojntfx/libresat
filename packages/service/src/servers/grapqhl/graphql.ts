import { IGraphQL } from "./graphql.types";

class GraphQL implements IGraphQL {
  name: IGraphQL["name"];
  typeDefs: IGraphQL["typeDefs"];
  resolvers: IGraphQL["resolvers"];
  port: IGraphQL["port"];

  constructor({ name, typeDefs, resolvers, port }: IGraphQL) {
    this.name = name;
    this.typeDefs = typeDefs;
    this.resolvers = resolvers;
    this.port = port;
  }
}

export { GraphQL };
