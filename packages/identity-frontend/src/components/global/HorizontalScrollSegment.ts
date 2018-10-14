import styled from "styled-components";
import { Segment } from "semantic-ui-react";

const HorizontalScrollSegment = styled(Segment)`
  display: flex;
  align-items: center;
  overflow-x: auto;
  padding-right: 0 !important;
  &::after {
    content: "";
    padding: 0.5em;
  }
`;

export { HorizontalScrollSegment };
