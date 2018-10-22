import styled from "react-emotion";
import { Accordion } from "semantic-ui-react";

const HelpAccordion = styled(Accordion)`
  & > .title:not(.active) {
    padding-bottom: 0 !important;
  }
`;

export { HelpAccordion };
