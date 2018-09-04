import { IServer } from "../server.types";

interface IGraphQL extends IServer {
  typeDefs: string;
  resolvers: any[];
}

export { IGraphQL };
