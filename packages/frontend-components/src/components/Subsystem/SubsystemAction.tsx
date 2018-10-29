import * as React from "react";
import { SubsystemActionWrapper } from "./SubsystemActionWrapper";
import { ButtonProps } from "semantic-ui-react";

const SubsystemAction = (props: ButtonProps) => (
  <SubsystemActionWrapper labelPosition="left" {...props} />
);

export { SubsystemAction };
