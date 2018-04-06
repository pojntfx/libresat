import React, { Component } from "react";
import { Button } from "../Button";
import styled from "styled-components";

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
        title: `context (optional) ("positive", "warning", "negative")`,
        description:
          "Whether the button triggers an additive, modifying or destructive action."
      },
      {
        title: "primary (optional) (bool)",
        description: "Whether the button is the primary/main call to action."
      },
      {
        title: "equal (optional) (bool)",
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
  ButtonWrapper = styled.menu\`
    display: flex;
    overflow-x: auto;
    padding: 0;
    margin: 0;
    & > button:not(:last-child) {
      margin-right: 1rem;
    }
  \`;

  onLog = () => {
    console.log("Logging to console.");
  };

  onSave = () => {
    console.log("Saving.");
  };

  onDiscard = () => {
    console.log("Discarding.");
  };

  onDelete = () => {
    console.log("Deleting.");
  };

  render() {
    const { ButtonWrapper, onLog, onSave, onDiscard, onDelete } = this;
    return (
      <ButtonWrapper>
        <Button value="Log to console" onClick={onLog} />
        <Button value="Save" context="positive" onClick={onSave} />
        <Button value="Discard" context="warning" onClick={onDiscard} />
        <Button value="Delete" context="negative" onClick={onDelete} />
        <Button value="Log to console" primary onClick={onLog} />
        <Button value="Save" context="positive" primary onClick={onSave} />
        <Button value="Discard" context="warning" primary onClick={onDiscard} />
        <Button value="Delete" context="negative" primary onClick={onDelete} />
      </ButtonWrapper>
    );
  }
}
`;

class ButtonDemo extends Component {
  ButtonWrapper = styled.menu`
    display: flex;
    overflow-x: auto;
    padding: 0;
    margin: 0;
    & > button:not(:last-child) {
      margin-right: 1rem;
    }
  `;

  onLog = () => {
    console.log("Logging to console.");
  };

  onSave = () => {
    console.log("Saving.");
  };

  onDiscard = () => {
    console.log("Discarding.");
  };

  onDelete = () => {
    console.log("Deleting.");
  };

  render() {
    const { ButtonWrapper, onLog, onSave, onDiscard, onDelete } = this;
    return (
      <ButtonWrapper>
        <Button value="Log to console" onClick={onLog} />
        <Button value="Save" context="positive" onClick={onSave} />
        <Button value="Discard" context="warning" onClick={onDiscard} />
        <Button value="Delete" context="negative" onClick={onDelete} />
        <Button value="Log to console" primary onClick={onLog} />
        <Button value="Save" context="positive" primary onClick={onSave} />
        <Button value="Discard" context="warning" primary onClick={onDiscard} />
        <Button value="Delete" context="negative" primary onClick={onDelete} />
      </ButtonWrapper>
    );
  }
}
