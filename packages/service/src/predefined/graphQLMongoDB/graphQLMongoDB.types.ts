import { IService } from "../../service/service.types";
import { IGraphQL } from "../../servers/grapqhl/graphql.types";
import { IMongoDB } from "../../databases/mongodb/mongodb.types";
import { IPredefined, IPredefinedStarter } from "../predefined.types";
import { ITypeDefMerger } from "../../mergers/typedefs/typedefs.types";
import { IResolverMerger } from "../../mergers/resolvers/resolvers.types";
import { GraphQLServer } from "graphql-yoga";
import { Mongoose } from "mongoose";
import { IGraphQLMongoDBFlagParser } from "./startup/flags.types";

// The service plus shorthands for the actual GraphQL server and MongoDB database
interface IExportedGraphQLMongoDB {
  service: IService;
  server: GraphQLServer;
  database: Mongoose;
}

interface IGraphQLMongoDBStarter extends IPredefinedStarter {
  (): IExportedGraphQLMongoDB;
}

interface IGraphQLMongoDBArgsStarter {
  (description: string, args: IGraphQLMongoDBFlagParser["args"]):
    | IExportedGraphQLMongoDB
    | boolean;
}

interface IGraphQLMongoDBHandleErrors {
  (database: Mongoose): void;
}

// The service itself
interface IGraphQLMongoDB extends IPredefined {
  service: IService;
  server: IGraphQL;
  database: IMongoDB;
  start: IGraphQLMongoDBStarter;
  startWithArgs: IGraphQLMongoDBArgsStarter;
  registerErrorHandlers: IGraphQLMongoDBHandleErrors;
}

interface IGraphQLMongoDBParams extends IPredefined {
  dbUrl: IMongoDB["url"];
  port: IGraphQL["port"];
  typeDefDir: ITypeDefMerger["dir"];
  resolverDir: IResolverMerger["dir"];
}

export { IGraphQLMongoDBParams, IGraphQLMongoDB };
