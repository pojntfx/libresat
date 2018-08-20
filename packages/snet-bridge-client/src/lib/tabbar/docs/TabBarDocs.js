import React, { Component } from "react";
import { TabBar } from "../TabBar";

// Docs
import { DocsSection } from "../../../components/docs/DocsSection";

export const TabBarDocs = () => (
  <DocsSection
    title="TabBar"
    id="tabbar"
    code={code}
    scope={scope}
    api={[
      {
        title: "links (string[])",
        description: "TabBar headers."
      },
      {
        title: "panes (node[])",
        description: "TabBar contents."
      },
      {
        title: "activePane (number)",
        description: "Currently active pane."
      },
      {
        title: "onChange (func)",
        description:
          "Event handler (gets fired when a TabBar title has been clicked). Returns the TabBar's index."
      },
      {
        title: "disabled (bool)",
        description: "Whether activePane can be changed."
      },
      {
        title: "...otherProps",
        description: "Other props that should be passed to the TabBar titles."
      }
    ]}
  />
);

const scope = { TabBar, Component };

const code = `class TabBarDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activePaneIndex: 0
    };
    this.handleTabBarChange = this.handleTabBarChange.bind(this);
  }

  handleTabBarChange(activePaneIndex) {
    this.setState({
      activePaneIndex
    });
  }

  render() {
    const { activePaneIndex } = this.state;
    const { handleTabBarChange } = this;
    return (
      <TabBar
        links={["First Tab", "Second Tab", "Third Tab"]}
        panes={[
          <div key="first">First pane</div>,
          <div key="second">Second pane</div>,
          <div key="third">Third pane</div>
        ]}
        onChange={id => handleTabBarChange(id)}
        activePane={activePaneIndex}
      />
    );
  }
}`;

// eslint-disable-next-line no-unused-vars
class TabBarDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activePaneIndex: 0
    };
    this.handleTabBarChange = this.handleTabBarChange.bind(this);
  }

  handleTabBarChange(activePaneIndex) {
    this.setState({
      activePaneIndex
    });
  }

  render() {
    const { activePaneIndex } = this.state;
    const { handleTabBarChange } = this;
    return (
      <TabBar
        links={["First Tab", "Second Tab", "Third Tab"]}
        panes={[
          <div key="first">First pane</div>,
          <div key="second">Second pane</div>,
          <div key="third">Third pane</div>
        ]}
        onChange={id => handleTabBarChange(id)}
        activePane={activePaneIndex}
      />
    );
  }
}
