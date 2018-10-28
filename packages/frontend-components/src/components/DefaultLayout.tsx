import * as React from "react";
import "semantic-ui-css/semantic.min.css";
import { Segment } from "semantic-ui-react";
import { injectGlobal } from "emotion";
import { Navbar } from "./Navbar/Navbar";
import { Container } from "./Container";
import { Footer } from "./Footer/Footer";
import { IDefaultLayoutProps } from "../types";

const DefaultLayout = ({
  navbar,
  children,
  footer,
  segment,
  bg,
  linkComponent,
  ...otherProps
}: IDefaultLayoutProps) => (
  <>
    {injectGlobal`
      body {
        background: url(${bg}) no-repeat center center fixed !important;
        background-size: cover !important;
      }
    `}
    <Navbar linkComponent={linkComponent} {...navbar} />
    <Container {...otherProps}>
      {segment ? <Segment>{children}</Segment> : children}
      <Footer {...footer} />
    </Container>
  </>
);

export { DefaultLayout };
