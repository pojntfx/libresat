import React, { Component } from "react";
import { GridLayout } from "../GridLayout";

// Docs
import { DocsSection } from "../../../components/docs/DocsSection";

export const GridLayoutDocs = () => (
  <DocsSection
    title="GridLayout"
    id="gridlayout"
    code={code}
    scope={scope}
    api={[
      {
        title: "layouts ({} || [])",
        description: "Layouts of the GridLayout (one for each breakpoint)."
      },
      {
        title: "onLayoutChange (func)",
        description:
          "Event handler (gets fired when the user moves a component of the GridLayout)."
      },
      {
        title: "children (node[])",
        description: "Components of the GridLayout."
      },
      {
        title: "...otherProps",
        description: "Other props that should be passed to the GridLayout."
      }
    ]}
  />
);

const scope = { GridLayout, Component };

const code = `class GridLayoutDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      warnOnPageReloadIsOn: false,
      reportBugsIsOn: true
    };
    this.getFromLocalStorage = this.getFromLocalStorage.bind(this);
    this.saveToLocalStorage = this.saveToLocalStorage.bind(this);
    this.onLayoutChange = this.onLayoutChange.bind(this);
  }

  getFromLocalStorage(breakpoint) {
    return localStorage.getItem("grid-layout-demo")
      ? JSON.parse(localStorage.getItem("grid-layout-demo"))[breakpoint]
      : {};
  }

  saveToLocalStorage(breakpoint, value) {
    localStorage.setItem(
      "grid-layout-demo",
      JSON.stringify({ [breakpoint]: value })
    );
  }

  onLayoutChange(layout, layouts) {
    this.saveToLocalStorage("layouts", layouts);
    this.setState({ layouts });
  }

  render() {
    return (
      <GridLayout
        layouts={this.state.layouts}
        onLayoutChange={function(layout, layouts) {
          // Disabled due to ES5 in this demo
          // this.onLayoutChange(layout, layouts);
          return false;
        }}
      >
        {/* Custom data-grid */}
        <div key="1" data-grid={{ x: 0, y: 0, w: 8, h: 15 }}>
          <video controls style={{ width: "100%", height: "100%" }}>
            <source
              src="https://www.videvo.net/videvo_files/converted/2018_01/preview/171124_E1_HD_017.mp476574.webm"
              type="video/webm"
            />
          </video>
        </div>
        {/* Custom data-grid */}
        <div key="1" data-grid={{ x: 9, y: 0, w: 4, h: 3 }}>
          <span>User Information</span>
        </div>
        {/* Auto-generated data-grid */}
        <span>Chat</span>
      </GridLayout>
    );
  }
}`;

// eslint-disable-next-line no-unused-vars
class GridLayoutDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      warnOnPageReloadIsOn: false,
      reportBugsIsOn: true
    };
    this.getFromLocalStorage = this.getFromLocalStorage.bind(this);
    this.saveToLocalStorage = this.saveToLocalStorage.bind(this);
    this.onLayoutChange = this.onLayoutChange.bind(this);
  }

  getFromLocalStorage(breakpoint) {
    return localStorage.getItem("grid-layout-demo")
      ? JSON.parse(localStorage.getItem("grid-layout-demo"))[breakpoint]
      : {};
  }

  saveToLocalStorage(breakpoint, value) {
    localStorage.setItem(
      "grid-layout-demo",
      JSON.stringify({ [breakpoint]: value })
    );
  }

  onLayoutChange(layout, layouts) {
    this.saveToLocalStorage("layouts", layouts);
    this.setState({ layouts });
  }

  render() {
    return (
      <GridLayout
        layouts={this.state.layouts}
        onLayoutChange={function(layout, layouts) {
          // Disabled due to ES5 in this demo
          // this.onLayoutChange(layout, layouts);
          return false;
        }}
      >
        {/* Custom data-grid */}
        <div key="1" data-grid={{ x: 0, y: 0, w: 8, h: 15 }}>
          <video controls style={{ width: "100%", height: "100%" }}>
            <source
              src="https://www.videvo.net/videvo_files/converted/2018_01/preview/171124_E1_HD_017.mp476574.webm"
              type="video/webm"
            />
          </video>
        </div>
        {/* Custom data-grid */}
        <div key="1" data-grid={{ x: 9, y: 0, w: 4, h: 3 }}>
          <span>User Information</span>
        </div>
        {/* Auto-generated data-grid */}
        <span>Chat</span>
      </GridLayout>
    );
  }
}
