import React from "react";
import {
  Divider as DividerTemplate,
  Icon as IconTemplate
} from "semantic-ui-react";
import styled from "react-emotion";

const Wrapper = styled(DividerTemplate)`
  margin-${props => {
    switch (props.offset) {
      case "top":
        return "top";
      case "bottom":
        return "bottom";
      default:
        return "top";
    }
  }}: 2em!important;
`;

const Icon = styled(IconTemplate)`
  padding-right: 1.75em;
`;

export const Divider = ({ offset, label, icon, ...otherProps }) => (
  <Wrapper offset={offset} horizontal {...otherProps}>
    <Icon name={icon} />
    {label}
  </Wrapper>
);
