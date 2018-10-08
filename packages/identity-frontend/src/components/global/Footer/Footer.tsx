import * as React from "react";
import { FooterContent, IFooterContentProps } from "./Content";

const Footer = ({ socialLinks, legal, ...otherProps }: IFooterContentProps) => (
  <FooterContent socialLinks={socialLinks} legal={legal} {...otherProps} />
);

export { Footer };
