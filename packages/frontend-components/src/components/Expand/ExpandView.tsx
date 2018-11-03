import * as React from "react";
import { Accordion, Icon } from "semantic-ui-react";
import { IExpandViewProps } from "../../types";
import { ExpandViewWrapper } from "./ExpandViewWrapper";

const ExpandView = ({
  title,
  open,
  onToggle,
  children,
  disabled,
  initiallyClosed,
  ...otherProps
}: IExpandViewProps) => (
  <ExpandViewWrapper
    fluid
    theme={{ disabled, initiallyClosed }}
    {...otherProps}
  >
    <Accordion.Title active={open} onClick={onToggle}>
      {!disabled && <Icon name="dropdown" />}
      {title}
    </Accordion.Title>
    <Accordion.Content active={open}>{children}</Accordion.Content>
  </ExpandViewWrapper>
);

export { ExpandView };
