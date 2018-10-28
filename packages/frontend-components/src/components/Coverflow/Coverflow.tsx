import * as React from "react";
import { CoverflowWrapper } from "./CoverflowWrapper";
import { CoverflowItem } from "./CoverflowItem";
import { ICoverflowProps } from "../../types";

const Coverflow = ({
  items,
  linkComponent,
  ...otherProps
}: ICoverflowProps) => (
  <CoverflowWrapper rotate={10} {...otherProps}>
    {items.map(({ link, ...props }, index) => (
      <CoverflowItem {...props} as={linkComponent} to={link} key={index} />
    ))}
  </CoverflowWrapper>
);

export { Coverflow, CoverflowItem };
