import { FileModel } from "../models/file.model";
import { IFileController } from "../types/file.types";

class FileController implements IFileController {
  create: IFileController["create"] = content => new FileModel(content);
}

export { FileController };
