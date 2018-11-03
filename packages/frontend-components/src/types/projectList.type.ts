interface IProjectListProps {
  endpoint: IProjectProviderProps["endpoint"];
  groupName: string;
  projectName: string;
  projectID: IProjectProviderProps["projectID"];
}

interface IProjectProps {
  title: string;
  text: string;
  link: string;
  lastUpdateDate: Date;
}

interface IProjectProviderProps {
  path: string;
  endpoint: string;
  projectID: string;
  children(props: IProjectProviderChildrenProps): JSX.Element | JSX.Element[];
}

interface IProjectProviderState {
  loading: boolean;
  lastUpdateDate: Date;
  text: string;
}

interface IProjectProviderPackageJSON {
  name: string;
}

interface IProjectProviderChildrenProps {
  loading: IProjectProviderState["loading"];
  lastUpdateDate: IProjectProps["lastUpdateDate"];
  text: IProjectProps["text"];
}

interface IProjectListProviderProps {
  endpoint: IProjectProviderProps["endpoint"];
  projectID: IProjectProviderProps["projectID"];
  children(
    props: IProjectListProviderChildrenProps
  ): JSX.Element | JSX.Element[];
}

interface IProjectListProviderChildrenProps {
  loading: IProjectProviderState["loading"];
  projects: {
    title: IProjectProps["title"];
    lastUpdateDate: IProjectProps["lastUpdateDate"];
    text: IProjectProps["text"];
    path: IProjectProviderProps["path"];
  }[];
}

interface IProjectListProviderState {
  loading: IProjectProviderState["loading"];
  projects: IProjectListProviderChildrenProps["projects"];
}

interface IProjectListProviderResponseProjects {
  name: IProjectProps["title"];
  path: IProjectProviderProps["path"];
}

export {
  IProjectListProps,
  IProjectProps,
  IProjectProviderProps,
  IProjectProviderState,
  IProjectProviderPackageJSON,
  IProjectListProviderProps,
  IProjectListProviderState,
  IProjectListProviderResponseProjects
};
