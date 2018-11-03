import * as React from "react";
import { Expand } from "./Expand/Expand";
import { IExpandProps } from "../types";
import { Paper } from "./Paper";

const ExpandablePaper = ({
  children,
  disabled,
  title,
  ...otherProps
}: IExpandProps) => (
  <Paper id={title.toLowerCase()}>
    <Expand disabled={disabled} title={title} {...otherProps}>
      {children}
    </Expand>
  </Paper>
);

export { ExpandablePaper };
