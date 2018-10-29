import * as React from "react";
import { GridColumnProps } from "semantic-ui-react";
import { SubsystemActionsWrapper } from "./SubsystemActionsWrapper";

const SubsystemActions = (props: GridColumnProps) => (
  <SubsystemActionsWrapper width={10} {...props} />
);

export { SubsystemActions };
