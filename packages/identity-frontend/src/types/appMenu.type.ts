import { IHelp } from "./help.type";
import { SemanticICONS } from "semantic-ui-react";
import { IActionBarProps } from "./actionBar.type";

interface IAppMenuProps {
  apps: IAppButtonProps[];
  search: IActionBarProps["search"];
}

interface IAppButtonProps {
  title: string;
  icon: SemanticICONS;
  help: IHelp;
  link: string;
}

export { IAppButtonProps, IAppMenuProps };
