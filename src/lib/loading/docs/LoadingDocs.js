import React, { Component } from "react";
import { Loading } from "../Loading";

// Docs
import { DocsSection } from "../../../components/docs/DocsSection";

export const LoadingDocs = () => (
  <DocsSection
    title="Loading"
    id="loading"
    code={code}
    scope={scope}
    api={[
      {
        title: "...otherProps",
        description: "Other props that should be passed to the GridLayout."
      }
    ]}
  />
);

const scope = { Loading, Component };

const code = `class LoadingDemo extends Component {
  render() {
    return <Loading />;
  }
}`;

// eslint-disable-next-line no-unused-vars
class LoadingDemo extends Component {
  render() {
    return <Loading />;
  }
}
