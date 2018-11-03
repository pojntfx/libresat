import { Component } from "react";
import {
  IProjectListProviderProps,
  IProjectListProviderState,
  IProjectListProviderResponseProjects,
  IProjectProviderPackageJSON,
  IProjectProviderProps
} from "../../types";

class ProjectListProvider extends Component<IProjectListProviderProps> {
  state: IProjectListProviderState = {
    loading: true,
    projects: []
  };

  componentDidMount = async () => {
    const response = await fetch(
      `${this.props.endpoint}/api/v4/projects/${
        this.props.projectID
      }/repository/tree?path=packages/`
    );
    const json = await response.json();
    this.setState({
      projects: await Promise.all(
        json.map(
          async ({
            name,
            path,
            ...rest
          }: IProjectListProviderResponseProjects) => ({
            title: name,
            lastUpdateDate: await this.getLastCommitDate(path),
            text: await this.getDescription(path),
            path,
            ...rest
          })
        )
      ),
      loading: false
    });
  };

  getLastCommitDate = async (path: IProjectProviderProps["path"]) => {
    const response = await fetch(
      `${this.props.endpoint}/api/v4/projects/${
        this.props.projectID
      }/repository/commits?path=${path}`
    );
    const json = await response.json();
    return new Date(json[0].committed_date);
  };

  getDescription = async (path: IProjectProviderProps["path"]) => {
    const response = await fetch(
      `${this.props.endpoint}/api/v4/projects/${
        this.props.projectID
      }/repository/tree/?path=${path}`
    );
    const json = await response.json();
    const packageJsonFile = json.filter(
      ({ name }: IProjectProviderPackageJSON) => name === "package.json"
    );
    const packageJsonBlobSHA = packageJsonFile[0].id;
    const packageJsonContentResponse = await fetch(
      `${this.props.endpoint}/api/v4/projects/${
        this.props.projectID
      }/repository/blobs/${packageJsonBlobSHA}/raw`
    );
    const { description } = await packageJsonContentResponse.json();
    return description;
  };

  render = () => this.props.children(this.state);
}

export { ProjectListProvider };
