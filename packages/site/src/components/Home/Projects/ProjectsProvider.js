import { Component } from "react";

export class ProjectsProvider extends Component {
  state = {
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
    this.setState({ projects: json, loading: false });
  };

  render = () =>
    this.props.children({
      ...this.props,
      ...this.state
    });
}
