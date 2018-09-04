import { IService } from "../service/service.types";
import { IServer } from "../servers/server.types";
import { IDatabase } from "../databases/database.types";

interface IComposeService extends IService {
  server: IServer;
  database: IDatabase;
}

export { IComposeService };
