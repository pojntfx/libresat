import { IFile } from "../types/file.types";

interface IDeployable extends IFile {
  type: string;
}

export { IDeployable };
