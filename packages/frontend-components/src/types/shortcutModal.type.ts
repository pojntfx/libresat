interface IShortcutModalProps {
  triggerKey: string;
  title: string;
  shortcuts: IShortcutGroup[];
}

interface IShortcutGroup {
  title: string;
  shortcuts: IShortcut[];
}

interface IShortcut {
  title: string;
  keys: string[];
}

export { IShortcutModalProps };
