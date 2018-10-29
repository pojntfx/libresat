import { Component } from "react";
import {
  IProjectProviderProps,
  IProjectProviderPackageJSON,
  IProjectProviderState
} from "../../types";

class ProjectProvider extends Component<IProjectProviderProps> {
  state: IProjectProviderState = {
    loading: true,
    lastUpdateDate: new Date(),
    text: ""
  };

  componentDidMount = async () => {
    await this.getLastCommitDate(this.props.path);
    this.getDescription(this.props.path);
  };

  getLastCommitDate = async (path: IProjectProviderProps["path"]) => {
    const response = await fetch(
      `${this.props.endpoint}/api/v4/projects/${
        this.props.projectID
      }/repository/commits?path=${path}`
    );
    const json = await response.json();
    this.setState({
      lastUpdateDate: new Date(json[0].committed_date)
    });
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
    this.setState({
      text: description,
      loading: false
    });
  };

  render = () => this.props.children(this.state);
}

export { ProjectProvider };
