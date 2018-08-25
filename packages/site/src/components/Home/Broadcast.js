import React, { Component } from "react";
import { Message } from "semantic-ui-react";

export class Broadcast extends Component {
  state = {
    isVisible: true
  };

  componentDidMount = () =>
    this.setState({
      isVisible: localStorage.getItem("libresat-latest-broadcast-visible")
        ? localStorage.getItem("libresat-latest-broadcast-visible") === "true"
          ? true
          : false
        : true
    });

  handleDismiss = () => {
    this.setState({ isVisible: false });
    localStorage.setItem("libresat-latest-broadcast-visible", false);
  };

  render() {
    return (
      <Message
        icon="podcast"
        header="This is a broadcast"
        content="I am the content body"
        onDismiss={this.handleDismiss}
        hidden={!this.state.isVisible}
        info
        {...this.props}
      />
    );
  }
}
