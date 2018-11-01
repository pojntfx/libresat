import * as React from "react";
import { Component } from "react";
import { HotKeys } from "react-hotkeys";
import { IShortcutModalProviderProps } from "../../types";

class ShortcutModalProvider extends Component<IShortcutModalProviderProps> {
  state = {
    modalIsOpen: false
  };

  toggleModal = () =>
    this.setState({
      modalIsOpen: !this.state.modalIsOpen
    });

  render() {
    const keyMap = {
      openModal: this.props.triggerKey || "?"
    };

    const handlers = {
      openModal: () => this.toggleModal()
    };

    return (
      <HotKeys keyMap={keyMap} handlers={handlers}>
        {this.props.children({
          modalIsOpen: this.state.modalIsOpen,
          toggleModal: this.toggleModal
        })}
      </HotKeys>
    );
  }
}

export { ShortcutModalProvider };
