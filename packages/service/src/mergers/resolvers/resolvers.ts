import { GraphQL } from "../../servers/grapqhl/graphql";
import { IResolverMerger, MergedResolvers } from "./resolvers.types";

const resolvers = {
  Query: {
    hello: (_, { name }) => `Hello ${name || "World"}`
  }
};

class ResolverMerger implements IResolverMerger {
  name: "resolvers";
  service: GraphQL;
  dir: string;

  merge = () => resolvers as MergedResolvers; // This has to be casted
}

export { ResolverMerger };
