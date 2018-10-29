import * as React from "react";
import { ImageProps } from "semantic-ui-react";
import { ImageWithCaptionCaption } from "./ImageWithCaptionCaption";
import { ImageWithCaptionImage } from "./ImageWithCaptionImage";

const ImageWithCaption = ({ src, as, to, alt, ...otherProps }: ImageProps) => (
  <>
    <ImageWithCaptionImage
      alt="alt"
      as={as}
      to={to}
      src={src}
      {...otherProps}
    />
    <ImageWithCaptionCaption>{alt}</ImageWithCaptionCaption>
  </>
);

export { ImageWithCaption };
