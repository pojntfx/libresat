import React, { Component } from "react";
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
      switchIsOn: false
    };
  
    handleClick = () => {
      this.setState({
        switchIsOn: !this.state.switchIsOn
      });
    };
  
    render() {
      const { switchIsOn } = this.state;
      const { handleClick } = this;
      return (
        <Switch
        label="Stay awesome?:"
        name="stayAwesome3"
        on={switchIsOn}
        onClick={handleClick}
        />
      );
    }
  }
`;

class SwitchDemo extends Component {
  state = {
    switchIsOn: false
  };

  handleClick = () => {
    this.setState({
      switchIsOn: !this.state.switchIsOn
    });
  };

  render() {
    const { switchIsOn } = this.state;
    const { handleClick } = this;
    return (
      <Switch
        label="Stay awesome?:"
        name="stayAwesome3"
        on={switchIsOn}
        onClick={handleClick}
      />
    );
  }
}
