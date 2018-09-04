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
  dir: string;

  merge = (): string => typeDefs;
}

export { TypeDefMerger };
