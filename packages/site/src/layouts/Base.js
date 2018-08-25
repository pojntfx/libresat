import React from "react";
import "semantic-ui-css/semantic.min.css";
import { Container } from "semantic-ui-react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { injectGlobal } from "styled-components";
import { withPrefix } from "gatsby-link";

injectGlobal`
  body {
    background: url("${withPrefix(
      "/img/bg.jpg"
    )}") no-repeat center center fixed;
    background-size: cover;
  }
`;

export const Base = ({ children, noContainer, ...otherProps }) => (
  <>
    <Navbar />
    {noContainer ? (
      <>
        {children}
        <Container>
          <Footer />
        </Container>
      </>
    ) : (
      <Container {...otherProps}>
        {children}
        <Footer />
      </Container>
    )}
  </>
);
