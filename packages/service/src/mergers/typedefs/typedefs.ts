import { GraphQL } from "../../servers/grapqhl/graphql";
import { ITypeDefMerger } from "./typedefs.types";

const typeDefs = `
  type Query {
    hello(name: String): String!
  }
`;

class TypeDefMerger implements ITypeDefMerger {
  name: "typedefs";
  service: GraphQL;

  constructor(public dir: ITypeDefMerger["dir"]) {}

  merge = (): string => typeDefs;
}

export { TypeDefMerger };
