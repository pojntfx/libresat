import { IUtil } from "../utils/util.types";
import { IService } from "../service/service.types";

interface IMerge {
  (): any;
}

interface IMerger extends IUtil {
  service: IService;
  dir: string;
  merge?: IMerge;
}

export { IMerger };
