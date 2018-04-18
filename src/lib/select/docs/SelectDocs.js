import React, { Component } from "react";
import { Select } from "../Select";
import { Option } from "../Option";

// Docs
import { DocsSection } from "../../../components/docs/DocsSection";

export const SelectDocs = () => (
  <DocsSection
    title="Select"
    id="select"
    code={code}
    scope={scope}
    api={[
      {
        title: "label (optional) (string)",
        description: "Describes the the select."
      },
      {
        title: "name (string)",
        description: "Unique identifier for the select."
      },
      {
        title: "value (string || number)",
        description: "Which option has been selected."
      },
      {
        title: "onSelect (func)",
        description:
          "Event handler (gets fired when something has been selected)."
      },
      {
        title: "options (Option[])",
        description: `The options that can be selected. <Option/> has both a "text" and "value" prop.`
      },
      {
        title: "...otherProps",
        description: "Other props that should be passed to the select."
      }
    ]}
  />
);

const scope = { Select, Option, Component };

const code = `class SelectDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currrentlySelected: "CET"
    };
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect({ target: { value } }) {
    this.setState({
      currrentlySelected: value
    });
  }

  render() {
    const { currrentlySelected } = this.state;
    const { handleSelect } = this;
    return (
      <Select
        label="Your timezone"
        name="selectDemo1"
        value={currrentlySelected}
        onSelect={handleSelect}
        options={[
            <Option value="CET" text="CET" key="1"/>,
            <Option value="UTC" text="UTC" key="2"/>
        ]}
      />
    );
  }
}`;

// eslint-disable-next-line no-unused-vars
class SelectDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currrentlySelected: "CET"
    };
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect({ target: { value } }) {
    this.setState({
      currrentlySelected: value
    });
  }

  render() {
    const { currrentlySelected } = this.state;
    const { handleSelect } = this;
    return (
      <Select
        label="Your timezone"
        name="selectDemo1"
        value={currrentlySelected}
        onSelect={handleSelect}
        options={[
          <Option value="CET" text="CET" key="1" />,
          <Option value="UTC" text="UTC" key="2" />
        ]}
      />
    );
  }
}
