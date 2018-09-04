import { IService } from "../service/service.types";

interface IServer extends IService {
  name: string;
  port: number;
}

export { IServer };
