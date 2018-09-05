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

class GraphQLMongoDB implements IGraphQLMongoDB {
  service: Service;
  server: IGraphQL;
  database: IMongoDB;

  constructor(
    public name: IGraphQLMongoDBParams["name"],
    private port: IGraphQLMongoDBParams["port"],
    private dbUrl: IGraphQLMongoDBParams["dbUrl"],
    private typeDefDir: IGraphQLMongoDBParams["typeDefDir"],
    private resolverDir: IGraphQLMongoDBParams["resolverDir"]
  ) {}

  start() {
    this.service = new Service(this.name, [
      new GraphQL(
        `${this.name}-server`,
        new TypeDefMerger(this.typeDefDir).merge(),
        new ResolverMerger(this.resolverDir).merge(),
        this.port
      ).start(),
      new MongoDB(`${this.name}-database`, this.dbUrl).start()
    ]).start();
    return {
      service: this.service,
      server: <GraphQLServer>(<GraphQL>this.service.services[0]).server,
      database: <Mongoose>(<MongoDB>this.service.services[1]).database
    };
  }
}

export { GraphQLMongoDB };
