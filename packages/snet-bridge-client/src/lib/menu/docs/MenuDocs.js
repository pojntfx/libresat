import React, { Component } from "react";
import { Menu } from "../Menu";

// Docs
import { DocsSection } from "../../../components/docs/DocsSection";

// Components
import { Button } from "../../button/Button";

export const MenuDocs = () => (
  <DocsSection
    title="Menu"
    id="menu"
    code={code}
    scope={scope}
    api={[
      {
        title: "label (optional) (string)",
        description: "Text of the Menu activation button."
      },
      {
        title: "onClick (func)",
        description:
          "Event handler (gets fired when the user clicks the Menu activation button)."
      },
      {
        title: "onInnerClick (optional) (func)",
        description:
          "Event handler (gets fired when the user clicks a Menu's action)."
      },
      {
        title: "active (bool)",
        description: "Whether the menu is open or not."
      },
      {
        title: "children (node[])",
        description: "Actions in the Menu."
      },
      {
        title: "left (optional) (bool)",
        description: "Whether the menu should float to the left or not."
      },
      {
        title: "bottom (optional) (bool)",
        description:
          "Whether the menu should be attached to the top or the bottom."
      },
      {
        title: "...otherProps",
        description:
          "Other props that should be passed to the Menu activation button."
      }
    ]}
  />
);

const scope = { Menu, Button, Component };

const code = `class MenuDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuIsOpen: false
    };
    this.onToggleMenu = this.onToggleMenu.bind(this);
  }

  onToggleMenu() {
    this.setState({ menuIsOpen: !this.state.menuIsOpen });
  }

  onSave() {
    console.log("Saving.");
  }

  onSaveAs() {
    console.log("Saving as.");
  }

  onUpload() {
    console.log("Uploading.");
  }

  render() {
    const { onToggleMenu, onSave, onSaveAs, onUpload } = this;
    const { menuIsOpen } = this.state;

    return (
      <Menu
        label="Edit"
        onClick={onToggleMenu}
        onInnerClick={onToggleMenu}
        active={menuIsOpen}
      >
        <Button value="Save" onClick={onSave} style={{ width: "100%" }} />
        <Button value="Save as" onClick={onSaveAs} style={{ width: "100%" }} />
        <Button value="Upload" onClick={onUpload} style={{ width: "100%" }} />
      </Menu>
    );
  }
}`;

// eslint-disable-next-line no-unused-vars
class MenuDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuIsOpen: false
    };
    this.onToggleMenu = this.onToggleMenu.bind(this);
  }

  onToggleMenu() {
    this.setState({ menuIsOpen: !this.state.menuIsOpen });
  }

  onSave() {
    console.log("Saving.");
  }

  onSaveAs() {
    console.log("Saving as.");
  }

  onUpload() {
    console.log("Uploading.");
  }

  render() {
    const { onToggleMenu, onSave, onSaveAs, onUpload } = this;
    const { menuIsOpen } = this.state;

    return (
      <Menu
        label="Edit"
        onClick={onToggleMenu}
        onInnerClick={onToggleMenu}
        active={menuIsOpen}
      >
        <Button value="Save" onClick={onSave} style={{ width: "100%" }} />
        <Button value="Save as" onClick={onSaveAs} style={{ width: "100%" }} />
        <Button value="Upload" onClick={onUpload} style={{ width: "100%" }} />
      </Menu>
    );
  }
}
