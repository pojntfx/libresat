import React, { Component } from "react";
import { Button } from "../Button";

// Docs
import { DocsSection } from "../../../components/docs/DocsSection";

// Components
import { Tool } from "../../tool/Tool";

export const ButtonDocs = () => (
  <DocsSection
    title="Button"
    id="button"
    code={code}
    scope={scope}
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
        title: "...otherProps",
        description: "Other props that should be passed to the button."
      }
    ]}
  />
);

const scope = { Button, Tool, Component };

const code = `class ButtonDemo extends Component {
  onLog() {
    console.log("Logging to console.");
  }

  onSave() {
    console.log("Saving.");
  }

  onDiscard() {
    console.log("Discarding.");
  }

  onDelete() {
    console.log("Deleting.");
  }

  render() {
    const { onLog, onSave, onDiscard, onDelete } = this;
    return (
      <Tool equal>
        <Button value="Log to console" onClick={onLog} />
        <Button value="Save" context="positive" onClick={onSave} />
        <Button value="Discard" context="warning" onClick={onDiscard} />
        <Button value="Delete" context="negative" onClick={onDelete} />
        <Button value="Log to console" primary onClick={onLog} />
        <Button value="Save" context="positive" primary onClick={onSave} />
        <Button value="Discard" context="warning" primary onClick={onDiscard} />
        <Button value="Delete" context="negative" primary onClick={onDelete} />
      </Tool>
    );
  }
}`;

// eslint-disable-next-line no-unused-vars
class ButtonDemo extends Component {
  onLog() {
    console.log("Logging to console.");
  }

  onSave() {
    console.log("Saving.");
  }

  onDiscard() {
    console.log("Discarding.");
  }

  onDelete() {
    console.log("Deleting.");
  }

  render() {
    const { onLog, onSave, onDiscard, onDelete } = this;
    return (
      <Tool equal>
        <Button value="Log to console" onClick={onLog} />
        <Button value="Save" context="positive" onClick={onSave} />
        <Button value="Discard" context="warning" onClick={onDiscard} />
        <Button value="Delete" context="negative" onClick={onDelete} />
        <Button value="Log to console" primary onClick={onLog} />
        <Button value="Save" context="positive" primary onClick={onSave} />
        <Button value="Discard" context="warning" primary onClick={onDiscard} />
        <Button value="Delete" context="negative" primary onClick={onDelete} />
      </Tool>
    );
  }
}
