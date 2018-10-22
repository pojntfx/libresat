import { IHelp } from "./help.type";
import { SemanticICONS } from "semantic-ui-react";
import { IActionBarProps } from "./actionBar.type";

interface IAppMenuProps {
  apps: IAppButtonProps[];
  search: IActionBarProps["search"];
  linkComponent(
    to: IAppButtonProps["link"],
    children: JSX.Element
  ): JSX.Element;
}

interface IAppButtonProps {
  title: string;
  icon: SemanticICONS;
  link: string;
  disabled?: boolean;
  help: IHelp;
  linkComponent: IAppMenuProps["linkComponent"];
}

interface IAppButtonContentProps {
  title: IAppButtonProps["title"];
  icon: IAppButtonProps["icon"];
  link: IAppButtonProps["link"];
}

export { IAppButtonProps, IAppMenuProps, IAppButtonContentProps };
