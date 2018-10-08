import * as React from "react";
import "semantic-ui-css/semantic.min.css";
import { Navbar, INavbarProps, Container } from "../global";

interface IDefaultLayoutProps extends INavbarProps {
  children: JSX.Element;
}

const DefaultLayout = ({ children, ...otherProps }: IDefaultLayoutProps) => (
  <>
    <Navbar {...otherProps} />
    <Container>{children}</Container>
  </>
);

export { DefaultLayout };
