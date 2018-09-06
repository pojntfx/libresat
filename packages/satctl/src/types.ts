interface IFile {
  content: any;
}

interface IFileCreator {
  (content: IFile["content"]): IFile;
}

interface IFileController {
  create: IFileCreator;
}

interface IDeployable extends IFile {
  type: string;
}

export { IFile, IFileController, IDeployable };
