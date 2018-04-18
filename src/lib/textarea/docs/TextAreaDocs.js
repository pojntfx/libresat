import React, { Component } from "react";
import { TextArea } from "../TextArea";

// Docs
import { DocsSection } from "../../../components/docs/DocsSection";

export const TextAreaDocs = () => (
  <DocsSection
    title="TextArea"
    id="textarea"
    code={code}
    scope={scope}
    api={[
      {
        title: "label (optional) (string)",
        description: "Describes the the TextArea."
      },
      {
        title: "name (string)",
        description: "Unique identifier for the TextArea."
      },
      {
        title: "value (string || number)",
        description: "Content of the TextArea."
      },
      {
        title: "onInput (func)",
        description:
          "Event handler (gets fired when content has been modified)."
      },
      {
        title: "...otherProps",
        description: "Other props that should be passed to the TextArea."
      }
    ]}
  />
);

const scope = { TextArea, Component };

const code = `class TextAreaDemo extends Component {
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
      <TextArea
        label="Your bio"
        name="textAreaDemo1"
        type="text"
        value={text}
        onInput={handleInput}
      />
    );
  }
}`;

// eslint-disable-next-line no-unused-vars
class TextAreaDemo extends Component {
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
      <TextArea
        label="Your bio"
        name="textAreaDemo1"
        type="text"
        value={text}
        onInput={handleInput}
      />
    );
  }
}
