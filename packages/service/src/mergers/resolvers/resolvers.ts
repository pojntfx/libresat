import { GraphQL } from "../../servers/grapqhl/graphql";
import { IResolverMerger } from "./resolvers.types";

class ResolverMerger implements IResolverMerger {
  name: "resolvers";
  service: GraphQL;
  dir: string;

  merge = () => [];
}

export { ResolverMerger };
