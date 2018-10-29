import { Button } from "../Button";
import styled from "react-emotion";

const SubsystemActionWrapper = styled(Button)`
  /* This is necessary to prevent glitches if the row get's to high */
  max-height: 3em;
`;

export { SubsystemActionWrapper };
