import * as React from "react";
import { ImageProps } from "semantic-ui-react";
import { ImageWithCaptionImageWrapper } from "./ImageWithCaptionImageWrapper";

const ImageWithCaptionImage = (props: ImageProps) => (
  <ImageWithCaptionImageWrapper centered rounded {...props} />
);

export { ImageWithCaptionImage };
