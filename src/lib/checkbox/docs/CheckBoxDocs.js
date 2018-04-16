import React, { Component, Fragment } from "react";
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
        description: "Whether the CheckBox is checked or not."
      },
      {
        title: "label (string)",
        description: "A description of what the CheckBox checks."
      },
      {
        title: "name (string)",
        description: "Unique identifier."
      },
      {
        title: "onClick (func)",
        description:
          "Event handler (gets fired when the user clicks the CheckBox). Returns the CheckBox's name."
      },
      {
        title: "...otherProps",
        description: "Other props that should be passed to the CheckBox."
      }
    ]}
  />
);

const code = `
class CheckBoxDemo extends Component {
  state = {
    warnOnPageReloadIsOn: false,
    reportBugsIsOn: true
  };

  toggleOnPageReloadWarning = () => {
    this.setState({
      warnOnPageReloadIsOn: !this.state.warnOnPageReloadIsOn
    });
  };

  toggleReportBugs = () => {
    this.setState({
      reportBugsIsOn: !this.state.reportBugsIsOn
    });
  };

  render() {
    const { warnOnPageReloadIsOn, reportBugsIsOn } = this.state;
    const { toggleOnPageReloadWarning, toggleReportBugs } = this;
    return (
      <Fragment>
        <CheckBox
          label="Warn on page reload"
          name="warn-on-page-reload"
          on={warnOnPageReloadIsOn}
          onClick={toggleOnPageReloadWarning}
        />
        <CheckBox
          label="Report bugs"
          name="report-bugs"
          on={reportBugsIsOn}
          onClick={toggleReportBugs}
        />
      </Fragment>
    );
  }
}
`;

class CheckBoxDemo extends Component {
  state = {
    warnOnPageReloadIsOn: false,
    reportBugsIsOn: true
  };

  toggleOnPageReloadWarning = () => {
    this.setState({
      warnOnPageReloadIsOn: !this.state.warnOnPageReloadIsOn
    });
  };

  toggleReportBugs = () => {
    this.setState({
      reportBugsIsOn: !this.state.reportBugsIsOn
    });
  };

  render() {
    const { warnOnPageReloadIsOn, reportBugsIsOn } = this.state;
    const { toggleOnPageReloadWarning, toggleReportBugs } = this;
    return (
      <Fragment>
        <CheckBox
          label="Warn on page reload"
          name="warn-on-page-reload"
          on={warnOnPageReloadIsOn}
          onClick={toggleOnPageReloadWarning}
        />
        <CheckBox
          label="Report bugs"
          name="report-bugs"
          on={reportBugsIsOn}
          onClick={toggleReportBugs}
        />
      </Fragment>
    );
  }
}
