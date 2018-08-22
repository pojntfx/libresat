import React from "react";
import "semantic-ui-css/semantic.min.css";
import { Container } from "semantic-ui-react";

export const DefaultLayout = ({ children, ...otherProps }) => (
  <Container {...otherProps}>{children}</Container>
);
