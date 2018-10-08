import * as React from "react";
import "semantic-ui-css/semantic.min.css";
import { Navbar, Container } from "../global";
import { Footer } from "../global/Footer/Footer";
import { IDefaultLayoutProps } from "../../types";

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
