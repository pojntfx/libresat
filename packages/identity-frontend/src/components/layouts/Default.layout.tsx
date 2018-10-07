import * as React from "react";
import { Container } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import { Navbar } from "../global";
import { INavbarProps } from "../global/Navbar";

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
