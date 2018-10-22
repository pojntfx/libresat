import { SemanticICONS } from "semantic-ui-react";
import { IHelp } from "./help.type";

interface INavbarProps {
  brand: IBrand;
  firstItems: IItem[];
  startItems: IItem[];
  endItems: IItem[];
  lastItems: IItem[];
  linkComponent: JSX.Element;
}

interface IBrand {
  title: string;
  img: string;
  link: string;
  disabled: boolean;
  help: IHelp;
}

interface IItem {
  title: string;
  icon?: SemanticICONS;
  link: string;
  disabled?: boolean;
  help: IHelp;
}

export { INavbarProps, IBrand, IItem };
