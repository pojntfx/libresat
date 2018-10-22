import { INavbarProps } from "./navbar.type";
import { IFooterProps } from "./footer.type";

interface IDefaultLayoutProps {
  navbar: INavbarProps;
  children: JSX.Element | JSX.Element[];
  footer: IFooterProps;
  segment?: boolean;
  bg: string;
}

export { IDefaultLayoutProps };
