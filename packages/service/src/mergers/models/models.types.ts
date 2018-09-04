import { IMongoDB } from "../../databases/mongodb/mongodb.types";
import { IMerger } from "../merger.types";

type MergedModels = IMongoDB["models"];

interface MergeModels {
  (): MergedModels;
}

interface IResolverMerger extends IMerger {
  merge: MergeModels;
}

export { IResolverMerger };
