import React, { Component } from "react";
import { Nav } from "../Nav";

// Docs
import { DocsSection } from "../../../components/docs/DocsSection";

export const NavDocs = () => (
  <DocsSection
    title="Nav"
    id="nav"
    code={code}
    scope={scope}
    api={[
      {
        title: "children (node[])",
        description: "Links in the Nav."
      },
      {
        title: "...otherProps",
        description: "Other props that should be passed to the Nav."
      }
    ]}
  />
);

const scope = { Nav, Component };

const code = `class NavDemo extends Component {
  render() {
    return (
      <Nav>
        <a href="#home">Home</a>
        <a href="#docs">Docs</a>
        <a href="#blog">Blog</a>
        <a href="#forum">Forum</a>
      </Nav>
    );
  }
}`;

// eslint-disable-next-line no-unused-vars
class NavDemo extends Component {
  render() {
    return (
      <Nav>
        <a href="#home">Home</a>
        <a href="#docs">Docs</a>
        <a href="#blog">Blog</a>
        <a href="#forum">Forum</a>
      </Nav>
    );
  }
}
