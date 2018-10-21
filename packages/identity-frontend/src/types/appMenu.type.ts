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
  link: string;
  disabled?: boolean;
  help: IHelp;
}

export { IAppButtonProps, IAppMenuProps };
