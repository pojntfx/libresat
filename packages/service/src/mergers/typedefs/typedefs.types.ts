import { IGraphQL } from "../../servers/grapqhl/graphql.types";
import { IMerger } from "../merger.types";

type MergedTypeDefs = IGraphQL["typeDefs"];

interface MergeTypeDefs {
  (): MergedTypeDefs;
}

interface ITypeDefMerger extends IMerger {
  merge: MergeTypeDefs;
}

export { ITypeDefMerger };
