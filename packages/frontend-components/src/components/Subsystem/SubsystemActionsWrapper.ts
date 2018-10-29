import { Grid } from "semantic-ui-react";
import styled from "react-emotion";

const SubsystemActionsWrapper = styled(Grid.Column)`
  display: flex !important;
  overflow-x: auto;
  & > .button:first-child {
    margin-left: auto;
    @media (max-width: 767px) {
      margin-left: auto;
    }
  }
  & > .button:last-child {
    @media (max-width: 767px) {
      margin-right: auto;
    }
  }
`;

export { SubsystemActionsWrapper };
