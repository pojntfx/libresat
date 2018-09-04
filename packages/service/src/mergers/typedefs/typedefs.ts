import { GraphQL } from "../../servers/grapqhl/graphql";
import { ITypeDefMerger } from "./typedefs.types";
import { fileLoader, mergeTypes } from "merge-graphql-schemas";

class TypeDefMerger implements ITypeDefMerger {
  name: "typedefs";
  service: GraphQL;

  constructor(public dir: ITypeDefMerger["dir"]) {}

  merge = () =>
    mergeTypes(fileLoader(this.dir, { recursive: true }), { all: true });
}

export { TypeDefMerger };
