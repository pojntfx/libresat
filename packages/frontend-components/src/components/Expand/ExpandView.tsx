import * as React from "react";
import { Accordion, Icon } from "semantic-ui-react";
import { IExpandViewProps } from "../../types";

const ExpandView = ({
  title,
  open,
  onToggle,
  children,
  ...otherProps
}: IExpandViewProps) => (
  <Accordion fluid styled {...otherProps}>
    <Accordion.Title active={open} onClick={onToggle}>
      <Icon name="dropdown" />
      {title}
    </Accordion.Title>
    <Accordion.Content active={open}>{children}</Accordion.Content>
  </Accordion>
);

export { ExpandView };
