import React, { Component, Fragment } from "react";
import { Select } from "../Select";
import { Option } from "../Option";

// Docs
import { DocsSection } from "../../../components/docs/DocsSection";

export const SelectDocs = () => (
  <DocsSection
    title="Select"
    id="select"
    demos={<SelectDemo />}
    code={code}
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
        description: "Other (HTML5) props that should be passed to the select."
      }
    ]}
  />
);

const code = `
class SelectDemo extends Component {
  state = {
    currrentlySelected: "CET"
  };

  handleSelect = ({ target: { value } }) => {
    this.setState({
      currrentlySelected: value
    });
  };

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
          <Fragment key="timezones">
            <Option value="CET" text="CET" />
            <Option value="UTC" text="UTC" />
          </Fragment>
        ]}
      />
    );
  }
}
`;

class SelectDemo extends Component {
  state = {
    currrentlySelected: "CET"
  };

  handleSelect = ({ target: { value } }) => {
    this.setState({
      currrentlySelected: value
    });
  };

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
          <Fragment key="timezones">
            <Option value="CET" text="CET" />
            <Option value="UTC" text="UTC" />
          </Fragment>
        ]}
      />
    );
  }
}
