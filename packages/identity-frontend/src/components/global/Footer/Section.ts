import styled from "styled-components";
import { Grid } from "semantic-ui-react";

const Section = styled(Grid.Column)`
  display: flex !important;
  align-items: center;
  justify-content: start;
  &:last-child {
    justify-content: end;
  }
  @media (max-width: 767px) {
    justify-content: center !important;
  }
`;

export { Section };
