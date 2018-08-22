import React from "react";
import { Base } from "./Base";
import styled from "styled-components";

const Heading = styled.div`
  font-style: italic;
`;

export default ({ children, pageContext: { author } }) => (
  <Base>
    <Heading>By {author}</Heading>
    {children}
  </Base>
);
