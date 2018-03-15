import React, { Component } from "react";

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
        <div data-grid={{ w: 2, h: 6, x: 0, y: 0, minW: 2, minH: 2 }}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem ex
          aperiam id officiis voluptate voluptatibus? Maxime laborum dolor
          exercitationem eligendi!
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, odit
          minima sunt voluptas sed voluptatem mollitia quam! Perspiciatis quo
          eligendi est dolorem doloribus aliquam facilis a, quibusdam tempore,
          nulla obcaecati.
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem quia
          eligendi ab, omnis error quis enim nemo optio eius doloribus
          voluptates vitae velit. Id, consectetur. Modi ipsa non repellendus
          veritatis iusto ab commodi cupiditate nemo excepturi adipisci nulla in
          eveniet ad eum delectus aliquid deserunt asperiores, provident magnam
          minus error.
        </div>
      </ResizableGridLayout>
    );
  }
}
