import { IGraphQL } from "./graphql.types";

class GraphQL implements IGraphQL {
  name: "graphql";
  typeDefs: string;
  resolvers: any[];
  port: number;
}

export { GraphQL };
