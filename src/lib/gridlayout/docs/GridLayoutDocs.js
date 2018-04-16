import React, { Component } from "react";
import { GridLayout } from "../GridLayout";

// Styled components
import styled from "styled-components";

// Docs
import { DocsSection } from "../../../components/docs/DocsSection";

export const GridLayoutDocs = () => (
  <DocsSection
    title="GridLayout"
    id="gridlayout"
    demos={<GridLayoutDemo />}
    code={code}
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

const code = `
class GridLayoutDemo extends Component {
    ResponsiveVideo = styled.video\`
      width: 100%;
      height: 100%;
    \`;
  
    getFromLocalStorage = breakpoint =>
      localStorage.getItem("grid-layout-demo")
        ? JSON.parse(localStorage.getItem("grid-layout-demo"))[breakpoint]
        : {};
  
    saveToLocalStorage = (breakpoint, value) =>
      localStorage.setItem(
        "grid-layout-demo",
        JSON.stringify({ [breakpoint]: value })
      );
  
    onLayoutChange = (layout, layouts) => {
      this.saveToLocalStorage("layouts", layouts);
      this.setState({ layouts });
    };
  
    state = {
      layouts: this.getFromLocalStorage("layouts") || {}
    };
  
    render() {
      const { ResponsiveVideo } = this;
  
      return (
        <GridLayout
          layouts={this.state.layouts}
          onLayoutChange={(layout, layouts) =>
            this.onLayoutChange(layout, layouts)
          }
        >
          {/* Custom data-grid */}
          <div key="1" data-grid={{ x: 0, y: 0, w: 8, h: 15 }}>
            <ResponsiveVideo controls>
              <source
                src="https://www.videvo.net/videvo_files/converted/2018_01/preview/171124_E1_HD_017.mp476574.webm"
                type="video/webm"
              />
            </ResponsiveVideo>
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
`;

class GridLayoutDemo extends Component {
  ResponsiveVideo = styled.video`
    width: 100%;
    height: 100%;
  `;

  getFromLocalStorage = breakpoint =>
    localStorage.getItem("grid-layout-demo")
      ? JSON.parse(localStorage.getItem("grid-layout-demo"))[breakpoint]
      : {};

  saveToLocalStorage = (breakpoint, value) =>
    localStorage.setItem(
      "grid-layout-demo",
      JSON.stringify({ [breakpoint]: value })
    );

  onLayoutChange = (layout, layouts) => {
    this.saveToLocalStorage("layouts", layouts);
    this.setState({ layouts });
  };

  state = {
    layouts: this.getFromLocalStorage("layouts") || {}
  };

  render() {
    const { ResponsiveVideo } = this;

    return (
      <GridLayout
        layouts={this.state.layouts}
        onLayoutChange={(layout, layouts) =>
          this.onLayoutChange(layout, layouts)
        }
      >
        {/* Custom data-grid */}
        <div key="1" data-grid={{ x: 0, y: 0, w: 8, h: 15 }}>
          <ResponsiveVideo controls>
            <source
              src="https://www.videvo.net/videvo_files/converted/2018_01/preview/171124_E1_HD_017.mp476574.webm"
              type="video/webm"
            />
          </ResponsiveVideo>
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
