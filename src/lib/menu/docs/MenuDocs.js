import React, { Component } from "react";
import { Menu } from "../Menu";

// Docs
import { DocsSection } from "../../../components/docs/DocsSection";

// Styled components
import styled from "styled-components";

// Components
import { Button } from "../../button/Button";

export const MenuDocs = () => (
  <DocsSection
    title="Menu"
    id="menu"
    demos={<MenuDemo />}
    code={code}
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

const code = `
class MenuDemo extends Component {
  state = {
    menuIsOpen: false
  };

  MenuButton = styled(Button)\`
    width: 100%;
  \`;

  onToggleMenu = () => {
    this.setState({ menuIsOpen: !this.state.menuIsOpen });
  };

  onSave = () => {
    console.log("Saving.");
  };

  onSaveAs = () => {
    console.log("Saving as.");
  };

  onUpload = () => {
    console.log("Uploading.");
  };

  render() {
    const { onToggleMenu, MenuButton, onSave, onSaveAs, onUpload } = this;

    const { menuIsOpen } = this.state;

    return (
      <Menu
        label="Edit"
        onClick={onToggleMenu}
        onInnerClick={onToggleMenu}
        active={menuIsOpen}
      >
        <MenuButton value="Save" onClick={onSave} />
        <MenuButton value="Save as" onClick={onSaveAs} />
        <MenuButton value="Upload" onClick={onUpload} />
      </Menu>
    );
  }
}
`;

class MenuDemo extends Component {
  state = {
    menuIsOpen: false
  };

  MenuButton = styled(Button)`
    width: 100%;
  `;

  onToggleMenu = () => {
    this.setState({ menuIsOpen: !this.state.menuIsOpen });
  };

  onSave = () => {
    console.log("Saving.");
  };

  onSaveAs = () => {
    console.log("Saving as.");
  };

  onUpload = () => {
    console.log("Uploading.");
  };

  render() {
    const { onToggleMenu, MenuButton, onSave, onSaveAs, onUpload } = this;

    const { menuIsOpen } = this.state;

    return (
      <Menu
        label="Edit"
        onClick={onToggleMenu}
        onInnerClick={onToggleMenu}
        active={menuIsOpen}
      >
        <MenuButton value="Save" onClick={onSave} />
        <MenuButton value="Save as" onClick={onSaveAs} />
        <MenuButton value="Upload" onClick={onUpload} />
      </Menu>
    );
  }
}
