import * as React from "react";
import { BadgeImage } from "./BadgeImage";

interface IBadgeProps {
  src: string;
  alt: string;
  href: string;
}

const Badge = ({ src, alt, href, ...otherProps }: IBadgeProps) => (
  <a href={href}>
    <BadgeImage src={src} alt={alt} {...otherProps} />
  </a>
);

export { Badge };
