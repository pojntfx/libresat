import * as React from "react";
import { ShortcutModalProvider } from "./ShortcutModalProvider";
import { ShortcutModalView } from "./ShortcutModalView";
import { IShortcutModalProps } from "../../types";

const ShortcutModal = ({
  triggerKey,
  children,
  ...otherProps
}: IShortcutModalProps) => (
  <ShortcutModalProvider triggerKey={triggerKey}>
    {({ modalIsOpen, toggleModal }) => (
      <>
        {children}
        <ShortcutModalView
          modalIsOpen={modalIsOpen}
          toggleModal={toggleModal}
          {...otherProps}
        />
      </>
    )}
  </ShortcutModalProvider>
);

export { ShortcutModal };
