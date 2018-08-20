import React, { Component } from "react";
import { NavBar } from "../NavBar";
import { Button } from "../../button/Button";

// Docs
import { DocsSection } from "../../../components/docs/DocsSection";

export const NavBarDocs = () => (
  <DocsSection
    title="NavBar"
    id="navbar"
    code={code}
    scope={scope}
    api={[
      {
        title: "title (optional) (string || node)",
        description: "Title/brand of the page."
      },
      {
        title: "links (optional) (node[])",
        description: "Links on the left side of the NavBar."
      },
      {
        title: "items (optional) (node[])",
        description: "Items on the right side of the NavBar."
      },
      {
        title: "...otherProps",
        description: "Other props that should be passed to the button."
      }
    ]}
  />
);

const scope = { NavBar, Button, Component };

const code = `class NavBarDemo extends Component {
  onSignIn() {
    console.log("Signed in.");
  }

  onSignUp() {
    console.log("Signed up.");
  }

  render() {
    const { onSignIn, onSignUp } = this;

    return (
      <NavBar
        title="Title"
        links={[
          <a key="1" href="#software">
            Software
          </a>,
          <a key="2" href="#hardware">
            Hardware
          </a>,
          <a key="3" href="#network">
            Network
          </a>
        ]}
        items={[
          <Button key="1" value="Sign up" onClick={onSignIn} />,
          <Button key="2" value="Sign in" onClick={onSignUp} />
        ]}
      />
    );
  }
}`;

// eslint-disable-next-line no-unused-vars
class NavBarDemo extends Component {
  onSignIn() {
    console.log("Signed in.");
  }

  onSignUp() {
    console.log("Signed up.");
  }

  render() {
    const { onSignIn, onSignUp } = this;

    return (
      <NavBar
        title="Title"
        links={[
          <a key="1" href="#software">
            Software
          </a>,
          <a key="2" href="#hardware">
            Hardware
          </a>,
          <a key="3" href="#network">
            Network
          </a>
        ]}
        items={[
          <Button key="1" value="Sign up" onClick={onSignIn} />,
          <Button key="2" value="Sign in" onClick={onSignUp} />
        ]}
      />
    );
  }
}
