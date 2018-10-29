import { Segment } from "semantic-ui-react";
import styled from "react-emotion";

const Paper = styled(Segment)`
  margin-top: 1em !important;
  &:not(:last-child) {
    margin-bottom: 1em !important;
  }
`;

export { Paper };
