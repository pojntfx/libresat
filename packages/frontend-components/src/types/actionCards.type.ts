import { SemanticICONS, CardGroupProps, HeaderProps } from "semantic-ui-react";

interface IActionCardsLinks {
  links: IActionCardLink[];
  linksPerRow: CardGroupProps["itemsPerRow"];
  linkComponent: JSX.Element;
}

interface IActionCardLink {
  title: string;
  icon: SemanticICONS;
  link: string;
  text: string;
  disabled?: boolean;
}

interface IActionCardsProps extends IActionCardsLinks {
  header: HeaderProps;
  text: string;
}

export { IActionCardsLinks, IActionCardsProps };
