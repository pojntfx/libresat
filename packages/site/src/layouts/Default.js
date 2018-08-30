import React from "react";
import { Base } from "./Base";
import { Paper } from "../components/Paper";

export default ({ children }) => (
  <Base>
    <Paper>{children}</Paper>
  </Base>
);
