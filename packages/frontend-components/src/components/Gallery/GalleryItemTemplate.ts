import styled from "react-emotion";
import { Card } from "semantic-ui-react";

const GalleryItemTemplate = styled(Card)`
  margin-top: 1em !important;
  margin-bottom: 1em !important;
  width: auto !important;
  max-width: ${1127 / 2 - 15}px !important;
  @media (max-width: 1127px) {
    max-width: 100% !important;
    width: 100% !important;
  }
`;

export { GalleryItemTemplate };
