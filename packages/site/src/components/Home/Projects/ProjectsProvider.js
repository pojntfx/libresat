import { Component } from "react";

export class ProjectsProvider extends Component {
  state = {
    loading: true,
    projects: []
  };

  componentDidMount = async () => {
    const response = await fetch(
      "https://gitlab.com/api/v4/projects/8000820/repository/tree?path=packages/"
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
