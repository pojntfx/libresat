import React, { Component } from "react";
import { Button } from "../Button";

// Docs
import { DocsSection } from "../../../components/docs/DocsSection";

export const ButtonDocs = () => (
  <DocsSection
    title="Button"
    id="button"
    demos={<ButtonDemo />}
    code={code}
    api={[
      {
        title: "value (string)",
        description: "The text in the button."
      },
      {
        title: "onClick (func)",
        description:
          "Event handler (gets fired when the button has been clicked)."
      },
      {
        title: "equal (bool)",
        description:
          "Whether all nearby buttons should have an equal width (used with tabs)."
      },
      {
        title: "...otherProps",
        description: "Other (HTML5) props that should be passed to the button."
      }
    ]}
  />
);

const code = `
class ButtonDemo extends Component {
    handleClick = () => {
      console.log("Button has been pressed!");
    };
  
    render() {
      const { handleClick } = this;
      return <Button value="Log to console" onClick={handleClick} />;
    }
  }
`;

class ButtonDemo extends Component {
  handleClick = () => {
    console.log("Button has been pressed!");
  };

  render() {
    const { handleClick } = this;
    return <Button value="Log to console" onClick={handleClick} />;
  }
}
