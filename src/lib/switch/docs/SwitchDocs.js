import React, { Component } from "react";
import { Switch } from "../Switch";
import { List } from "../../list/List";

// Docs
import { DocsSection } from "../../../components/docs/DocsSection";

export const SwitchDocs = () => (
  <DocsSection
    title="Switch"
    id="switch"
    code={code}
    scope={scope}
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
        description: "Other props that should be passed to the Switch."
      }
    ]}
  />
);

const scope = { List, Switch, Component };

const code = `class SwitchDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      wifiIsOn: true,
      bluetoothIsOn: false
    };
    this.toggleWifi = this.toggleWifi.bind(this);
    this.toggleBluetooth = this.toggleBluetooth.bind(this);
  }

  toggleWifi() {
    this.setState({
      wifiIsOn: !this.state.wifiIsOn
    });
  }

  toggleBluetooth() {
    this.setState({
      bluetoothIsOn: !this.state.bluetoothIsOn
    });
  }

  render() {
    const { wifiIsOn, bluetoothIsOn } = this.state;
    const { toggleWifi, toggleBluetooth } = this;
    return (
      <List>
        <Switch label="Wi-Fi" name="wifi" on={wifiIsOn} onClick={toggleWifi} />
        <Switch
          label="Bluetooth"
          name="bluetooth"
          on={bluetoothIsOn}
          onClick={toggleBluetooth}
        />
      </List>
    );
  }
}`;

// eslint-disable-next-line no-unused-vars
class SwitchDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      wifiIsOn: true,
      bluetoothIsOn: false
    };
    this.toggleWifi = this.toggleWifi.bind(this);
    this.toggleBluetooth = this.toggleBluetooth.bind(this);
  }

  toggleWifi() {
    this.setState({
      wifiIsOn: !this.state.wifiIsOn
    });
  }

  toggleBluetooth() {
    this.setState({
      bluetoothIsOn: !this.state.bluetoothIsOn
    });
  }

  render() {
    const { wifiIsOn, bluetoothIsOn } = this.state;
    const { toggleWifi, toggleBluetooth } = this;
    return (
      <List>
        <Switch label="Wi-Fi" name="wifi" on={wifiIsOn} onClick={toggleWifi} />
        <Switch
          label="Bluetooth"
          name="bluetooth"
          on={bluetoothIsOn}
          onClick={toggleBluetooth}
        />
      </List>
    );
  }
}
