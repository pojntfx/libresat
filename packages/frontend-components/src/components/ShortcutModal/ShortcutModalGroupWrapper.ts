import styled from "react-emotion";
import { Grid } from "semantic-ui-react";

const ShortcutModalGroupWrapper = styled(Grid.Column)`
  /* Second two last elements, or last element if odd amount of elements */
  @media (min-width: 992px) {
    margin-bottom: 1em !important;
    &:last-child {
      margin-bottom: 0 !important;
    }
    &:nth-last-child(2) {
      &:nth-child(odd) {
        margin-bottom: 0 !important;
      }
    }
  }
`;

export { ShortcutModalGroupWrapper };
