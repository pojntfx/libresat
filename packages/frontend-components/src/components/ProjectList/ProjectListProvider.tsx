import { Component } from "react";
import {
  IProjectListProviderProps,
  IProjectListProviderState,
  IProjectListProviderResponseProjects
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
      projects: json.map(
        ({ name, ...rest }: IProjectListProviderResponseProjects) => ({
          title: name,
          ...rest
        })
      ),
      loading: false
    });
  };

  render = () =>
    this.props.children({
      ...this.state
    });
}

export { ProjectListProvider };
