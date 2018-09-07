interface IFile {
  content: any;
}

interface IFileCreator {
  (content: IFile["content"]): IFile;
}

interface IFileController {
  create: IFileCreator;
}

export { IFile, IFileController };
