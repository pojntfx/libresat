import { Divider } from "semantic-ui-react";
import styled from "react-emotion";
import { IDividerWrapperProps } from "../../types";

const DividerWrapper = styled(Divider)`
  margin-${(props: IDividerWrapperProps) => {
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

export { DividerWrapper };
