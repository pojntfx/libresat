import { IMerger } from "../merger.types";
import { MongoDB } from "../../databases/mongodb/mongodb";

class ModelMerger implements IMerger {
  name: "models";
  service: MongoDB;
  dir: string;
}

export { ModelMerger };
