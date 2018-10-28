import * as React from "react";
import { DividerWrapper } from "./DividerWrapper";
import { DividerIcon } from "./DividerIcon";
import { IDividerProps } from "../../types";

const Divider = ({ offset, title, icon, ...otherProps }: IDividerProps) => (
  <DividerWrapper offset={offset} horizontal {...otherProps}>
    <DividerIcon name={icon} />
    {title}
  </DividerWrapper>
);

export { Divider };
