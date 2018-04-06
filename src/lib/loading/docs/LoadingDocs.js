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
        title: "This is a wrapper component.",
        description: "It does not have any props."
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
