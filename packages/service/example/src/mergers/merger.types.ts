import { IUtil } from "../utils/util.types";
import { IService } from "../service/service.types";

interface IMerger extends IUtil {
  service: IService;
  dir: string;
}

export { IMerger };
