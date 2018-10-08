import { SemanticICONS } from "semantic-ui-react";

interface INavbarProps {
  brand: IBrand;
  firstItems: IItem[];
  startItems: IItem[];
  endItems: IItem[];
  lastItems: IItem[];
}

interface IBrand {
  title: string;
  img: string;
  link: string;
  disabled: boolean;
}

interface IItem {
  title: string;
  icon?: SemanticICONS;
  link: string;
  disabled?: boolean;
}

export { INavbarProps, IBrand, IItem };
