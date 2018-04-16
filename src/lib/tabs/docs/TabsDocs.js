import React, { Component } from "react";
import { Tab } from "../Tab";

// Docs
import { DocsSection } from "../../../components/docs/DocsSection";

export const TabsDocs = () => (
  <DocsSection
    title="Tabs"
    id="tabs"
    demos={<TabDemo />}
    code={code}
    api={[
      {
        title: "links (string[])",
        description: "Tab headers."
      },
      {
        title: "panes (node[])",
        description: "Tab contents."
      },
      {
        title: "activePane (number)",
        description: "Currently active pane."
      },
      {
        title: "onChange (func)",
        description:
          "Event handler (gets fired when a tab title has been clicked). Returns the tab's index."
      },
      {
        title: "disabled (bool)",
        description: "Whether activePane can be changed."
      },
      {
        title: "...otherProps",
        description: "Other props that should be passed to the tab titles."
      }
    ]}
  />
);

const code = `
class TabDemo extends Component {
  state = {
    activePaneIndex: 0
  };

  handleTabChange = activePaneIndex => {
    this.setState({
      activePaneIndex
    });
  };

  render() {
    const { activePaneIndex } = this.state;
    const { handleTabChange } = this;
    return (
      <Tab
        links={[
          "First tab",
          "Second tab",
          "Third tab",
          "Fourth tab",
          "Fifth tab"
        ]}
        panes={[
          <div key="first">a</div>,
          <div key="second">b</div>,
          <div key="third">c</div>,
          <div key="fourth">d</div>,
          <div key="fifth">e</div>
        ]}
        onChange={id => handleTabChange(id)}
        activePane={activePaneIndex}
      />
    );
  }
}
`;

class TabDemo extends Component {
  state = {
    activePaneIndex: 0
  };

  handleTabChange = activePaneIndex => {
    this.setState({
      activePaneIndex
    });
  };

  render() {
    const { activePaneIndex } = this.state;
    const { handleTabChange } = this;
    return (
      <Tab
        links={[
          "First tab",
          "Second tab",
          "Third tab",
          "Fourth tab",
          "Fifth tab"
        ]}
        panes={[
          <div key="first">a</div>,
          <div key="second">b</div>,
          <div key="third">c</div>,
          <div key="fourth">d</div>,
          <div key="fifth">e</div>
        ]}
        onChange={id => handleTabChange(id)}
        activePane={activePaneIndex}
      />
    );
  }
}
