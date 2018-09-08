import { IGraphQLMongoDB, IGraphQLMongoDBParams } from "./graphQLMongoDB.types";
import { IGraphQL } from "../../servers/grapqhl/graphql.types";
import { IMongoDB } from "../../databases/mongodb/mongodb.types";
import { Service } from "../../service/service";
import { TypeDefMerger } from "../../mergers/typedefs/typedefs";
import { ResolverMerger } from "../../mergers/resolvers/resolvers";
import { MongoDB } from "../../databases/mongodb/mongodb";
import { GraphQL } from "../../servers/grapqhl/graphql";
import { Mongoose } from "mongoose";
import { GraphQLServer } from "graphql-yoga";
import { ConnectionToDatabaseFailedException } from "./exception/connectionToDatabaseFailedException";

class GraphQLMongoDB implements IGraphQLMongoDB {
  service!: Service;
  server!: IGraphQL;
  database!: IMongoDB;

  constructor(
    public name: IGraphQLMongoDBParams["name"],
    private port: IGraphQLMongoDBParams["port"],
    private dbUrl: IGraphQLMongoDBParams["dbUrl"],
    private typeDefDir: IGraphQLMongoDBParams["typeDefDir"],
    private resolverDir: IGraphQLMongoDBParams["resolverDir"]
  ) {}

  registerErrorHandlers(database: Mongoose) {
    const { connection } = database;
    connection.on("error", error => {
      throw new ConnectionToDatabaseFailedException(this.dbUrl, error);
    });
  }

  start(
    port?: IGraphQLMongoDBParams["port"],
    dbUrl?: IGraphQLMongoDBParams["dbUrl"]
  ) {
    if (port) {
      this.port = port;
    }
    if (dbUrl) {
      this.dbUrl = dbUrl;
    }
    this.service = new Service(this.name, [
      new GraphQL(
        `${this.name}-server`,
        new TypeDefMerger(this.typeDefDir).merge(),
        new ResolverMerger(this.resolverDir).merge(),
        this.port
      ).start(),
      new MongoDB(`${this.name}-database`, this.dbUrl).start()
    ]).start();
    const server = <GraphQLServer>(<GraphQL>this.service.services[0]).server;
    const database = <Mongoose>(<MongoDB>this.service.services[1]).database;
    this.registerErrorHandlers(database);
    return {
      service: this.service,
      server,
      database
    };
  }
}

export { GraphQLMongoDB };
