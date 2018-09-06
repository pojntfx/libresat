import { IFile } from "../types";

class FileModel implements IFile {
  constructor(public content) {}
}

export { FileModel };
