import React, { Component } from "react";
import { Expand } from "../Expand";

// Docs
import { DocsSection } from "../../../components/docs/DocsSection";

export const ExpandDocs = () => (
  <DocsSection
    title="Expand"
    id="expand"
    demos={<ExpandDemo />}
    code={code}
    api={[
      {
        title: "open (optional) (bool)",
        description: "Whether the Expand is open or closed."
      },
      {
        title: "onClick (func)",
        description:
          "Event handler (gets fired when the Expand has been clicked)."
      },
      {
        title: "summary (optional) (string)",
        description: "Description of what's inside the Expand."
      },
      {
        title: "children (node || node[])",
        description: "Items in the Expand."
      },
      {
        title: "...otherProps",
        description: "Other props that should be passed to the GridLayout."
      }
    ]}
  />
);

const code = `
class ExpandDemo extends Component {
  state = {
    descriptionIsShown: true
  };

  toggleDescription = () => {
    this.setState({
      descriptionIsShown: !this.descriptionIsShown
    });
  };

  render() {
    const { toggleDescription } = this;
    const { descriptionIsShown } = this.state;

    return (
      <Expand
        open={descriptionIsShown}
        summary="Corsica beach introduction"
        onClick={toggleDescription}
      >
        Judging which beaches are meant to be more beautiful than others is a
        slippery slope. Let{"'"}s just say that Corsica has a variety of
        beaches, from white sandy quiet bays to large stretch of stone or black
        sand coast and that we are presenting a sample of them below. If you
        think some unmissable places have been missed, do not hesitate to
        contact us with some pictures and references and we might add them to
        the list.
      </Expand>
    );
  }
}
`;

class ExpandDemo extends Component {
  state = {
    descriptionIsShown: true
  };

  toggleDescription = () => {
    this.setState({
      descriptionIsShown: !this.descriptionIsShown
    });
  };

  render() {
    const { toggleDescription } = this;
    const { descriptionIsShown } = this.state;

    return (
      <Expand
        open={descriptionIsShown}
        summary="Corsica beach introduction"
        onClick={toggleDescription}
      >
        Judging which beaches are meant to be more beautiful than others is a
        slippery slope. Let{"'"}s just say that Corsica has a variety of
        beaches, from white sandy quiet bays to large stretch of stone or black
        sand coast and that we are presenting a sample of them below. If you
        think some unmissable places have been missed, do not hesitate to
        contact us with some pictures and references and we might add them to
        the list.
      </Expand>
    );
  }
}
