import React, { Component, Fragment } from "react";
import { NavBar } from "../NavBar";
import { Button } from "../../button/Button";

// Docs
import { DocsSection } from "../../../components/docs/DocsSection";

export const NavBarDocs = () => (
  <DocsSection
    title="NavBar"
    id="navbar"
    demos={<NavBarDemo />}
    code={code}
    api={[
      {
        title: "title (string || node)",
        description: "Title/brand of the page."
      },
      {
        title: "links (node[])",
        description: "Links on the left side of the NavBar."
      },
      {
        title: "items (node[])",
        description: "Items on the right side of the NavBar."
      }
    ]}
  />
);

const code = `
class NavBarDemo extends Component {
  onSignIn = () => {
    console.log("Signed in.");
  };

  onSignUp = () => {
    console.log("Signed up.");
  };

  render() {
    const { onSignIn, onSignUp } = this;

    return (
      <NavBar
        title="Title"
        links={[
          <Fragment key="mainNavigation">
            <a href="/software">Software</a>
            <a href="/hardware">Hardware</a>
            <a href="/network">Network</a>
          </Fragment>
        ]}
        items={[
          <Fragment key="instanceControl">
            <Button value="Sign up" onClick={onSignIn} />
            <Button value="Sign in" onClick={onSignUp} />
          </Fragment>
        ]}
      />
    );
  }
}
`;

class NavBarDemo extends Component {
  onSignIn = () => {
    console.log("Signed in.");
  };

  onSignUp = () => {
    console.log("Signed up.");
  };

  render() {
    const { onSignIn, onSignUp } = this;

    return (
      <NavBar
        title="Title"
        links={[
          <Fragment key="mainNavigation">
            <a href="/software">Software</a>
            <a href="/hardware">Hardware</a>
            <a href="/network">Network</a>
          </Fragment>
        ]}
        items={[
          <Fragment key="instanceControl">
            <Button value="Sign up" onClick={onSignIn} />
            <Button value="Sign in" onClick={onSignUp} />
          </Fragment>
        ]}
      />
    );
  }
}
