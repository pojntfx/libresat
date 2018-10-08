import * as React from "react";
import "semantic-ui-css/semantic.min.css";
import { Navbar, Container } from "../global";
import { Footer } from "../global/Footer/Footer";
import { IDefaultLayoutProps } from "../../types";
import { injectGlobal } from "styled-components";
import bg from "../../assets/bg.jpg";

injectGlobal`
  body {
    background: url(${bg}) no-repeat center center fixed;
    background-size: cover;
  }
`;

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
