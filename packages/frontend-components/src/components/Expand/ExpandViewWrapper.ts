import styled from "react-emotion";
import { Accordion } from "semantic-ui-react";
import { IExpandViewWrapperProps } from "../../types";

const ExpandViewWrapper = styled(Accordion)`
  & .title {
    ${(props: { theme: IExpandViewWrapperProps }) =>
      props.theme.disabled &&
      props.theme.initiallyClosed &&
      `color: rgba(40,40,40,.3) !important;`} ${(props: {
      theme: IExpandViewWrapperProps;
    }) =>
      ((props.theme.disabled && !props.theme.initiallyClosed) ||
        (props.theme.disabled && props.theme.initiallyClosed)) &&
      `cursor: default !important;;`};
  }
`;

export { ExpandViewWrapper };
