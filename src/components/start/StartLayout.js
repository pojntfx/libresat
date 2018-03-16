import React, { Component } from "react";

// Eluseum
import { Card, Dialog, Navigation, Button } from "../../lib/eluseum-framework";

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
      <div>
        <NavigationView />
        <ResizableGridLayout layouts={layouts} onLayoutChange={onLayoutChange}>
          {/* <div
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
            Navigation
          </div> */}
          <div>StatusPane</div>
          <InteractionPane />
        </ResizableGridLayout>
        <CommPane />
      </div>
    );
  }
}

// InteractionPane components
const InteractionPane = () => (
  <Card header="Header" body="Body" footer="Footer" />
);

// CommPane components
const CommPane = () => (
  <Dialog
    open={true}
    fullscreen={true}
    leftButtonValue="Cancel"
    leftButtonColor="red"
    // leftButtonIcon="ion-ios-close-outline"
    // eslint-disable-next-line no-console
    onLeftButtonClick={() => console.log("Cancelled.")}
    title="License agreement"
    rightButtonValue="Accept"
    rightButtonColor="green"
    // rightButtonIcon="ion-ios-checkmark-empty"
    // eslint-disable-next-line no-console
    onRightButtonClick={() => console.log("Accepted.")}
  >
    OpenSNET Bridge Client Copyright (C) 2018 Felix Pojtinger
    <br />
    This program is free software: you can redistribute it and/or modify it
    under the terms of the GNU General Public License as published by the Free
    Software Foundation, either version 3 of the License, or (at your option)
    any later version. This program is distributed in the hope that it will be
    useful, but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General
    Public License for more details. You should have received a copy of the GNU
    General Public License along with this program. If not, see
    http://www.gnu.org/licenses/.
    <br />
    This is obviously just a test of the {"<Dialog/>"} component.
  </Dialog>
);

// Navigation components
const NavigationView = () => (
  <Navigation
    title="OpenSDCP"
    leftMenu="Home    Docs    News"
    rightMenu={<RightNavigationView />}
    sticky
  />
);

// Right Navigation
const RightNavigationView = () => (
  // eslint-disable-next-line no-console
  <Button value="Login" primary onClick={() => console.log("Logged in.")} />
);
