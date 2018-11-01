import { IHeadProps } from "./head.type";
import {
  IShortcutModalProviderProps,
  IShortcutModalViewProps
} from "./shortcutModal.type";
import { IDefaultLayoutProps } from "./default.layout.type";
import { SemanticICONS } from "semantic-ui-react";
import { IHelp } from "./help.type";
import { IFooterProps } from "./footer.type";

interface IShellProps {
  head: IHeadProps;
  navbar: IDefaultLayoutProps["navbar"];
  footer: IShellFooterProps;
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

interface IShellFooterProps {
  socialLinks: IFooterProps["socialLinks"];
  legal: IFooterProps["legal"];
  shortcutTrigger: IShellShortcutsTrigger;
}

// We don't need to have the shortcuts here again
interface IShellShortcutsTrigger {
  title: string;
  icon: SemanticICONS;
  help: IHelp;
}

export { IShellProps };
