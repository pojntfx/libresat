import { IDatabase } from "../database.types";
import { Connection, Mongoose } from "mongoose";

interface IMongoDBConnector {
  (): Connection;
}

interface IMongoDBStarter {
  (): any;
}

interface IMongoDB extends IDatabase {
  database: Mongoose;
  connect: IMongoDBConnector;
  start: IMongoDBStarter;
}

export { IMongoDB };
