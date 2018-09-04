import { IMerger } from "../merger.types";
import { GraphQL } from "../../servers/grapqhl/graphql";

class ResolverMerger implements IMerger {
  name: "resolvers";
  service: GraphQL;
  dir: string;
}

export { ResolverMerger };
