import * as React from "react";
import "semantic-ui-css/semantic.min.css";
import { Navbar, INavbarProps, Container } from "../global";
import { Footer } from "../global/Footer/Footer";
import { IFooterContentProps } from "../global/Footer/Content";

interface IDefaultLayoutProps {
  navbar: INavbarProps;
  children: JSX.Element;
  footer: IFooterContentProps;
}

const DefaultLayout = ({
  navbar,
  children,
  footer,
  ...otherProps
}: IDefaultLayoutProps) => (
  <>
    <Navbar {...navbar} />
    <Container {...otherProps}>
      {children}
      <Footer {...footer} />
    </Container>
  </>
);

export { DefaultLayout };
