import React, { Component } from "react";
import { TextField } from "../TextField";

// Docs
import { DocsSection } from "../../../components/docs/DocsSection";

export const TextFieldDocs = () => (
  <DocsSection
    title="TextField"
    id="textfield"
    code={code}
    scope={scope}
    api={[
      {
        title: "label (optional) (string)",
        description: "Describes the the TextField."
      },
      {
        title: "type (string)",
        description: `TextField type (i.e. "text", "password" etc.`
      },
      {
        title: "name (string)",
        description: "Unique identifier for the TextField."
      },
      {
        title: "value (string || number)",
        description: "Content of the TextField."
      },
      {
        title: "onInput (func)",
        description:
          "Event handler (gets fired when content has been modified)."
      },
      {
        title: "...otherProps",
        description: "Other props that should be passed to the TextField."
      }
    ]}
  />
);

const scope = { TextField, Component };

const code = `class TextFieldDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "Lorem ipsum"
    };
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput({ target: { value } }) {
    this.setState({
      text: value
    });
  }

  render() {
    const { text } = this.state;
    const { handleInput } = this;
    return (
      <TextField
        type="text"
        label="Your name"
        name="TextFieldDemo1"
        value={text}
        onInput={handleInput}
      />
    );
  }
}`;

// eslint-disable-next-line no-unused-vars
class TextFieldDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "Lorem ipsum"
    };
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput({ target: { value } }) {
    this.setState({
      text: value
    });
  }

  render() {
    const { text } = this.state;
    const { handleInput } = this;
    return (
      <TextField
        type="text"
        label="Your name"
        name="TextFieldDemo1"
        value={text}
        onInput={handleInput}
      />
    );
  }
}
