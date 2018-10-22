import * as React from "react";
import { LegalBadgeImage } from "./LegalBadgeImage";
import { ILegalBadgeProps } from "../../../types";

const LegalBadge = ({ src, alt, href, ...otherProps }: ILegalBadgeProps) => (
  <a href={href}>
    <LegalBadgeImage src={src} alt={alt} {...otherProps} />
  </a>
);

export { LegalBadge };
