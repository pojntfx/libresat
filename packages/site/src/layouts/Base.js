import React from "react";
import "semantic-ui-css/semantic.min.css";
import { Container } from "semantic-ui-react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

export const Base = ({ children, ...otherProps }) => (
  <>
    <Navbar />
    <Container {...otherProps}>
      {children}
      <Footer />
    </Container>
  </>
);
