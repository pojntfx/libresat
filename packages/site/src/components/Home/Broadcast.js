import React, { Component } from "react";
import { Message, Icon } from "semantic-ui-react";
import { Link } from "../Link";

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
        onDismiss={this.handleDismiss}
        hidden={!this.state.isVisible}
        icon
        info
      >
        <Icon name={this.props.icon} />
        <Message.Content>
          <Message.Header>{this.props.title}</Message.Header>
          {this.props.excerpt}
          <br />
          <Link to={this.props.link}>
            <Icon name="arrow right" />
            {this.props.readMore}
          </Link>
        </Message.Content>
      </Message>
    );
  }
}