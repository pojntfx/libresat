import * as React from "react";
import { CardProps } from "semantic-ui-react";
import { IGalleryItemProps } from "../../types";
import { GalleryItemTemplate } from "./GalleryItemTemplate";

const GalleryItem = (props: IGalleryItemProps & CardProps) => (
  <GalleryItemTemplate
    {...props}
    image={(props.image !== "/null" && props.image) || undefined}
  />
);

export { GalleryItem };
