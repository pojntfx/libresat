import { MongoDB } from "../../databases/mongodb/mongodb";
import { IResolverMerger } from "../resolvers/resolvers.types";

class ModelMerger implements IResolverMerger {
  name: "models";
  service: MongoDB;
  dir: string;

  merge = () => [{}];
}

export { ModelMerger };
