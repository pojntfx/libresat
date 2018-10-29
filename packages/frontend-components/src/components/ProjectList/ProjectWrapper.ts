import styled from "react-emotion";
import { Card } from "semantic-ui-react";

const ProjectWrapper = styled(Card)`
  min-width: 18em;
  margin-top: 1em !important;
  margin-bottom: 1em !important;
  margin-left: 0.5em !important;
  margin-right: 0.5em !important;
  & > .content {
    min-width: 16em !important;
  }
`;

export { ProjectWrapper };
