import { GraphQL } from "../../servers/grapqhl/graphql";
import { ITypeDefMerger } from "./typedefs.types";
import { mergeTypes } from "merge-graphql-schemas";

class TypeDefMerger implements ITypeDefMerger {
  name: "typedefs";
  service: GraphQL;

  constructor(public dir: ITypeDefMerger["dir"]) {}

  merge = () => mergeTypes(this.dir, { recursive: true });
}

export { TypeDefMerger };
