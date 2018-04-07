import React, { Component, Fragment } from "react";
import { Switch } from "../Switch";

// Docs
import { DocsSection } from "../../../components/docs/DocsSection";

export const SwitchDocs = () => (
  <DocsSection
    title="Switch"
    id="switch"
    demos={<SwitchDemo />}
    code={code}
    api={[
      {
        title: "on (boolean)",
        description: "Whether the switch is on or off."
      },
      {
        title: "label (string)",
        description: "A description of what the switch toggles."
      },
      {
        title: "name (string)",
        description: "Unique identifier."
      },
      {
        title: "onClick (func)",
        description:
          "Event handler (gets fired when the user clicks the switch). Returns the switch's name."
      },
      {
        title: "...otherProps",
        description: "Other (HTML5) props that should be passed to the Switch."
      }
    ]}
  />
);

const code = `
class SwitchDemo extends Component {
  state = {
    wifiIsOn: true,
    bluetoothIsOn: false
  };

  toggleWifi = () => {
    this.setState({
      wifiIsOn: !this.state.wifiIsOn
    });
  };

  toggleBluetooth = () => {
    this.setState({
      bluetoothIsOn: !this.state.bluetoothIsOn
    });
  };

  render() {
    const { wifiIsOn, bluetoothIsOn } = this.state;
    const { toggleWifi, toggleBluetooth } = this;
    return (
      <Fragment>
        <Switch label="Wi-Fi" name="wifi" on={wifiIsOn} onClick={toggleWifi} />
        <Switch
          label="Bluetooth"
          name="bluetooth"
          on={bluetoothIsOn}
          onClick={toggleBluetooth}
        />
      </Fragment>
    );
  }
}
`;

class SwitchDemo extends Component {
  state = {
    wifiIsOn: true,
    bluetoothIsOn: false
  };

  toggleWifi = () => {
    this.setState({
      wifiIsOn: !this.state.wifiIsOn
    });
  };

  toggleBluetooth = () => {
    this.setState({
      bluetoothIsOn: !this.state.bluetoothIsOn
    });
  };

  render() {
    const { wifiIsOn, bluetoothIsOn } = this.state;
    const { toggleWifi, toggleBluetooth } = this;
    return (
      <Fragment>
        <Switch label="Wi-Fi" name="wifi" on={wifiIsOn} onClick={toggleWifi} />
        <Switch
          label="Bluetooth"
          name="bluetooth"
          on={bluetoothIsOn}
          onClick={toggleBluetooth}
        />
      </Fragment>
    );
  }
}
