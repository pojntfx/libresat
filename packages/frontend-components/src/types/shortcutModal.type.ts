interface IShortcutModalViewProps {
  title: string;
  shortcuts: IShortcutGroup[];
  modalIsOpen: boolean;
  toggleModal(event: any): any;
}

interface IShortcutModalProviderProps {
  children(props: IShortcutModalShortcutProviderChildrenProps): JSX.Element;
  triggerKey: string;
}

interface IShortcutModalShortcutProviderChildrenProps {
  modalIsOpen: IShortcutModalViewProps["modalIsOpen"];
  toggleModal(event: any): any;
}

interface IShortcutModalProps {
  children: IShortcutModalProviderProps["children"];
  triggerKey: IShortcutModalProviderProps["triggerKey"];
  title: IShortcutModalViewProps["title"];
  shortcuts: IShortcutModalViewProps["shortcuts"];
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
