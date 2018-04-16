import React, { Component } from "react";
import { Loading } from "../Loading";

// Docs
import { DocsSection } from "../../../components/docs/DocsSection";

export const LoadingDocs = () => (
  <DocsSection
    title="Loading"
    id="loading"
    demos={<LoadingDemo />}
    code={code}
    api={[
      {
        title: "...otherProps",
        description: "Other props that should be passed to the GridLayout."
      }
    ]}
  />
);

const code = `
class LoadingDemo extends Component {
  render() {
    return <Loading />;
  }
}
`;

class LoadingDemo extends Component {
  render() {
    return <Loading />;
  }
}
