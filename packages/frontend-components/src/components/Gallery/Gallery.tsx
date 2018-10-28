import * as React from "react";
import { GalleryWrapper } from "./GalleryWrapper";
import { GalleryItem } from "./GalleryItem";
import { IGalleryProps } from "../../types";

const Gallery = ({ items, linkComponent, ...otherProps }: IGalleryProps) => (
  <GalleryWrapper options={{ gutter: 30 }} {...otherProps}>
    {items.map(({ link, ...props }, index) => (
      <GalleryItem {...props} as={linkComponent} to={link} key={index} />
    ))}
  </GalleryWrapper>
);

export { Gallery, GalleryItem };
