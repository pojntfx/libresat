import { GraphQL } from "../../servers/grapqhl/graphql";
import { ITypeDefMerger } from "./typedefs.types";

class TypeDefMerger implements ITypeDefMerger {
  name: "typedefs";
  service: GraphQL;
  dir: string;

  merge = (): string => "";
}

export { TypeDefMerger };
