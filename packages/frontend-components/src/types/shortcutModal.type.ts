import { ModalProps } from "semantic-ui-react";
import { IHelp } from "./help.type";

interface IShortcutModalViewProps {
  title: string;
  shortcuts: IShortcutGroup[];
  modalIsOpen?: boolean;
  toggleModal?(event: any): any;
  trigger?: ModalProps["trigger"];
  help: IHelp;
}

interface IShortcutModalProviderProps {
  children(props: IShortcutModalShortcutProviderChildrenProps): JSX.Element;
  triggerKey: string;
}

interface IShortcutModalShortcutProviderChildrenProps {
  modalIsOpen?: IShortcutModalViewProps["modalIsOpen"];
  toggleModal?(event: any): any;
}

interface IShortcutModalProps {
  children: JSX.Element;
  triggerKey: IShortcutModalProviderProps["triggerKey"];
  title: IShortcutModalViewProps["title"];
  shortcuts: IShortcutModalViewProps["shortcuts"];
  help: IShortcutModalViewProps["help"];
}

interface IShortcutGroup {
  title: string;
  shortcuts: IShortcut[];
}

interface IShortcut {
  title: string;
  keys: string[];
}

export {
  IShortcutModalProps,
  IShortcutModalViewProps,
  IShortcutModalProviderProps
};
