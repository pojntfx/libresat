import styled from "react-emotion";
import { Image } from "semantic-ui-react";

const maxWidth = "600px";

const ImageWithCaptionImageWrapper = styled(Image)`
  display: block !important;
  max-width: ${maxWidth} !important;
  margin-top: 4em;
`;

export { ImageWithCaptionImageWrapper };
