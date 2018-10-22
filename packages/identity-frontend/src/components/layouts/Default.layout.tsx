import * as React from "react";
import "semantic-ui-css/semantic.min.css";
import { createGlobalStyle } from "styled-components";
import bg from "../../assets/bg.jpg";
import { Segment } from "semantic-ui-react";
import {
  Navbar,
  Container,
  Footer,
  IDefaultLayoutProps
} from "@libresat/frontend-components";
import { NavLink } from "react-router-dom";

const DefaultLayoutStyles = createGlobalStyle`
  body {
    background: url(${bg}) no-repeat center center fixed;
    background-size: cover;
  }
`;

const DefaultLayout = ({
  navbar,
  children,
  footer,
  segment,
  ...otherProps
}: IDefaultLayoutProps) => (
  <>
    <DefaultLayoutStyles />
    <Navbar linkComponent={NavLink} {...navbar} />
    <Container {...otherProps}>
      {segment ? <Segment>{children}</Segment> : children}
      <Footer {...footer} />
    </Container>
  </>
);

export { DefaultLayout };
