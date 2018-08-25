import React from "react";
import { Base } from "./Base";
import styled from "styled-components";
import { Paper } from "../components/Paper";

const Author = styled.div`
  font-style: italic;
  margin-bottom: 1em;
`;

export default ({ children, pageContext: { author, date, lastEdit } }) => (
  <Base>
    <Paper>
      <Author>
        By {author} on {date}. Last edit on {lastEdit}.
      </Author>
      {children}
    </Paper>
  </Base>
);
