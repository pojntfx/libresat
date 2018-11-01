import { IHeadProps } from "./head.type";
import {
  IShortcutModalProviderProps,
  IShortcutModalViewProps
} from "./shortcutModal.type";
import { IDefaultLayoutProps } from "./default.layout.type";

interface IShellProps {
  head: IHeadProps;
  navbar: IDefaultLayoutProps["navbar"];
  footer: IDefaultLayoutProps["footer"];
  shortcuts: IShellShortcutModalProps;
  background: IDefaultLayoutProps["bg"];
  children: IDefaultLayoutProps["children"];
  linkComponent: IDefaultLayoutProps["linkComponent"];
  segment?: boolean;
  noContainer?: boolean;
}

interface IShellShortcutModalProps {
  triggerKey: IShortcutModalProviderProps["triggerKey"];
  title: IShortcutModalViewProps["title"];
  shortcuts: IShortcutModalViewProps["shortcuts"];
}

export { IShellProps };
