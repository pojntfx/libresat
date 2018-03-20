import React, { Component } from "react";
import { CheckBox } from "../CheckBox";

// Docs
import { DocsSection } from "../../../components/docs/DocsSection";

export const CheckBoxDocs = () => (
  <DocsSection
    title="CheckBox"
    id="checkbox"
    demos={<CheckBoxDemo />}
    code={code}
    api={[
      {
        title: "on (boolean)",
        description: "Whether the checkbox is on or off."
      },
      {
        title: "label (string)",
        description: "A description of what the checkbox toggles."
      },
      {
        title: "name (string)",
        description: "Unique identifier."
      },
      {
        title: "onClick (func)",
        description:
          "Event handler (gets fired when the user clicks the checkbox). Returns the checkbox's name."
      },
      {
        title: "...otherProps",
        description:
          "Other (HTML5) props that should be passed to the checkbox."
      }
    ]}
  />
);

const code = `
class CheckBoxDemo extends Component {
    state = {
      CheckBoxIsOn: false
    };
  
    handleClick = () => {
      this.setState({
        CheckBoxIsOn: !this.state.CheckBoxIsOn
      });
    };
  
    render() {
      const { CheckBoxIsOn } = this.state;
      const { handleClick } = this;
      return (
        <CheckBox
        label="Stay awesome?:"
        name="stayAwesome4"
        on={CheckBoxIsOn}
        onClick={handleClick}
        />
      );
    }
  }
`;

class CheckBoxDemo extends Component {
  state = {
    CheckBoxIsOn: false
  };

  handleClick = () => {
    this.setState({
      CheckBoxIsOn: !this.state.CheckBoxIsOn
    });
  };

  render() {
    const { CheckBoxIsOn } = this.state;
    const { handleClick } = this;
    return (
      <CheckBox
        label="Stay awesome?:"
        name="stayAwesome4"
        on={CheckBoxIsOn}
        onClick={handleClick}
      />
    );
  }
}
