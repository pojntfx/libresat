import React, { Component } from "react";
import { TextArea } from "../TextArea";

// Docs
import { DocsSection } from "../../../components/docs/DocsSection";

export const TextAreaDocs = () => (
  <DocsSection
    title="TextArea"
    id="textarea"
    demos={<TextAreaDemo />}
    code={code}
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
        description:
          "Other (HTML5) props that should be passed to the TextArea."
      }
    ]}
  />
);

const code = `
class TextAreaDemo extends Component {
    state = {
      text: "Lorem ipsum"
    };
  
    handleInput = ({ target: { value } }) => {
      this.setState({
        text: value
      });
    };
  
    render() {
      const { text } = this.state;
      const { handleInput } = this;
      return (
        <TextArea
          label="Some text:"
          name="textAreaDemo1"
          value={text}
          onInput={handleInput}
        />
      );
    }
  }
`;

class TextAreaDemo extends Component {
  state = {
    text: "Lorem ipsum"
  };

  handleInput = ({ target: { value } }) => {
    this.setState({
      text: value
    });
  };

  render() {
    const { text } = this.state;
    const { handleInput } = this;
    return (
      <TextArea
        label="Some text:"
        name="textAreaDemo1"
        value={text}
        onInput={handleInput}
      />
    );
  }
}
