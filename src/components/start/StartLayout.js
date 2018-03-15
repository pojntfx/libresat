import React, { Component } from "react";

// Eluseum
import { Card } from "../../lib/eluseum-framework";

// Components
import ResizableGridLayout from "./ResizableGridLayout";

export default class StartLayout extends Component {
  state = {
    layouts: {}
  };

  // Both layout and layouts are neccessary for responsiveness
  onLayoutChange = (layout, layouts) => {
    this.setState({
      layouts
    });
  };

  render() {
    const { layouts } = this.state;
    const { onLayoutChange } = this;

    return (
      <ResizableGridLayout layouts={layouts} onLayoutChange={onLayoutChange}>
        <div
          data-grid={{
            w: 12,
            h: 2,
            x: 0,
            y: 0,
            minW: 2,
            minH: 2,
            static: true
          }}
        >
          Navbar
        </div>
        <div>StatusPane</div>
        <InteractionPane />
        <div>CommPane</div>
      </ResizableGridLayout>
    );
  }
}

// StartLayout components
const InteractionPane = () => (
  <Card header="Header" body="Body" footer="Footer" />
);
