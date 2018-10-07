import * as React from "react";
import { Container } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

interface IDefaultLayoutProps {
  children: JSX.Element;
}

const DefaultLayout = ({ children, ...otherProps }: IDefaultLayoutProps) => (
  <Container {...otherProps}>{children}</Container>
);

export { DefaultLayout };
