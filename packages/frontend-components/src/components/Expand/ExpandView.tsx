import * as React from "react";
import { Accordion, Icon } from "semantic-ui-react";
import { IExpandViewProps } from "../../types";

const ExpandView = ({
  title,
  open,
  onToggle,
  children,
  disabled,
  initiallyClosed: _,
  ...otherProps
}: IExpandViewProps) => (
  <Accordion fluid {...otherProps}>
    <Accordion.Title active={open} onClick={onToggle}>
      {!disabled && <Icon name="dropdown" />}
      {title}
    </Accordion.Title>
    <Accordion.Content active={open}>{children}</Accordion.Content>
  </Accordion>
);

export { ExpandView };
