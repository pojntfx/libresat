import { IMerger } from "../merger.types";
import { GraphQL } from "../../servers/grapqhl/graphql";

class TypeDefMerger implements IMerger {
  name: "typedefs";
  service: GraphQL;
  dir: string;
}

export { TypeDefMerger };
