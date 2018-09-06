import { FileModel } from "../models/file.model";
import { IFileController } from "../types";

class FileController implements IFileController {
  create = content => new FileModel(content);
}

export { FileController };
