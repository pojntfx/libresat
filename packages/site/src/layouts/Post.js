import React from "react";
import { Base } from "./Base";
import styled from "styled-components";
import { Paper } from "../components/Paper";

const Heading = styled.div`
  font-style: italic;
`;

export default ({ children, pageContext: { author } }) => (
  <Base>
    <Paper>
      <Heading>By {author}</Heading>
      {children}
    </Paper>
  </Base>
);
