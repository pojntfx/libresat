import { IGraphQL } from "../../servers/grapqhl/graphql.types";
import { IMerger } from "../merger.types";

type MergedResolvers = IGraphQL["resolvers"];

interface MergeResolvers {
  (): MergedResolvers;
}

interface IResolverMerger extends IMerger {
  merge: MergeResolvers;
}

export { MergedResolvers, IResolverMerger };
