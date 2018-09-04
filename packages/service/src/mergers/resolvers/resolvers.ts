import { GraphQL } from "../../servers/grapqhl/graphql";
import { IResolverMerger, MergedResolvers } from "./resolvers.types";
import { mergeResolvers } from "merge-graphql-schemas";

class ResolverMerger implements IResolverMerger {
  name: "resolvers";
  service: GraphQL;

  constructor(public dir: IResolverMerger["dir"]) {}

  merge = () => mergeResolvers(this.dir); // This has to be casted
}

export { ResolverMerger };
