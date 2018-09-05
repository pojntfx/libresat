import { IService } from "../../service/service.types";
import { IGraphQL } from "../../servers/grapqhl/graphql.types";
import { IMongoDB } from "../../databases/mongodb/mongodb.types";
import { IPredefined, IPredefinedStarter } from "../predefined.types";
import { ITypeDefMerger } from "../../mergers/typedefs/typedefs.types";
import { IResolverMerger } from "../../mergers/resolvers/resolvers.types";
import { GraphQLServer } from "graphql-yoga";
import { Mongoose } from "mongoose";

// The service plus shorthands for the actual GraphQL server and MongoDB database
interface IExportedGraphQLMongoDB {
  service: IService;
  server: GraphQLServer;
  database: Mongoose;
}

interface IGraphQLMongoDBStarter extends IPredefinedStarter {
  (): IExportedGraphQLMongoDB;
}

// The service itself
interface IGraphQLMongoDB extends IPredefined {
  service: IService;
  server: IGraphQL;
  database: IMongoDB;
  start: IGraphQLMongoDBStarter;
}

interface IGraphQLMongoDBParams extends IPredefined {
  dbUrl: IMongoDB["url"];
  port: IGraphQL["port"];
  typeDefDir: ITypeDefMerger["dir"];
  resolverDir: IResolverMerger["dir"];
}

export { IGraphQLMongoDBParams, IGraphQLMongoDB };
