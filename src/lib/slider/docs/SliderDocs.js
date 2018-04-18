import React, { Component } from "react";
import { Slider } from "../Slider";

// Docs
import { DocsSection } from "../../../components/docs/DocsSection";

export const SliderDocs = () => (
  <DocsSection
    title="Slider"
    id="slider"
    code={code}
    scope={scope}
    api={[
      {
        title: "value (string)",
        description: "The slider's current value."
      },
      {
        title: "label (string)",
        description: "A description of what information to enter."
      },
      {
        title: "name (string)",
        description: "Unique identifier."
      },
      {
        title: "onChange (func)",
        description:
          "Event handler (gets fired when the user clicks the slider)."
      },
      {
        title: "...otherProps",
        description: "Other props that should be passed to the slider."
      }
    ]}
  />
);

const scope = { Slider, Component };

const code = `class SliderDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      brightness: 15
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick({ target: { value } }) {
    this.setState({
      brightness: parseInt(value, 10)
    });
  }

  render() {
    const { brightness } = this.state;
    const { handleClick } = this;
    return (
      <Slider
        label="Brightness"
        name="currentbrightness1"
        value={brightness}
        onChange={handleClick}
        range={10}
        min={0}
        max={100}
      />
    );
  }
}`;

// eslint-disable-next-line no-unused-vars
class SliderDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      brightness: 15
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick({ target: { value } }) {
    this.setState({
      brightness: parseInt(value, 10)
    });
  }

  render() {
    const { brightness } = this.state;
    const { handleClick } = this;
    return (
      <Slider
        label="Brightness"
        name="currentbrightness1"
        value={brightness}
        onChange={handleClick}
        range={10}
        min={0}
        max={100}
      />
    );
  }
}
