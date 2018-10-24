import * as React from "react";
import { CardProps } from "semantic-ui-react";
import { ICoverflowItemProps } from "../../types";
import { CoverflowItemTemplate } from "./CoverflowItemTemplate";

const CoverflowItem = (props: ICoverflowItemProps & CardProps) => (
  <CoverflowItemTemplate
    {...props}
    image={(props.image !== "/null" && props.image) || undefined}
  />
);

export { CoverflowItem };
