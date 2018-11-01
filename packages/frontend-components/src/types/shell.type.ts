import { IHeadProps } from "./head.type";
import {
  IShortcutModalProviderProps,
  IShortcutModalViewProps
} from "./shortcutModal.type";
import { SemanticICONS } from "semantic-ui-react";
import { IHelp } from "./help.type";
import { IFooterProps } from "./footer.type";
import { INavbarProps } from "./navbar.type";
import { INoScriptProps } from "./noScript.type";

interface IShellProps {
  head?: IHeadProps;
  navbar: INavbarProps;
  footer: IShellFooterProps;
  noScript: INoScriptProps;
  shortcuts?: IShellShortcutModalProps;
  background: string;
  children: JSX.Element | JSX.Element[];
  linkComponent: JSX.Element;
  segment?: boolean;
  noContainer?: boolean;
}

interface IShellShortcutModalProps {
  triggerKey: IShortcutModalProviderProps["triggerKey"];
  title: IShortcutModalViewProps["title"];
  shortcuts: IShortcutModalViewProps["shortcuts"];
  help: IShortcutModalViewProps["help"];
}

interface IShellFooterProps {
  socialLinks: IFooterProps["socialLinks"];
  legal: IFooterProps["legal"];
  shortcutTrigger?: IShellShortcutsTrigger;
}

// We don't need to have the shortcuts here again
interface IShellShortcutsTrigger {
  title: string;
  icon: SemanticICONS;
  help: IHelp;
}

export { IShellProps };
