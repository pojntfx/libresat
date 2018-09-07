import { IFile } from "../types/file.types";

class FileModel implements IFile {
  constructor(public content: IFile["content"]) {}
}

export { FileModel };
