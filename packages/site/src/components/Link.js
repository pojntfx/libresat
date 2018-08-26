import React from "react";
import LinkTemplate, { withPrefix } from "gatsby-link";

const isExternalLink = link =>
  link.includes("http://") || link.includes("https://");

export const Link = ({ to, children, ...otherProps }) =>
  isExternalLink(to) ? (
    <a href={to} {...otherProps}>
      {children ? children : null}
    </a>
  ) : (
    <LinkTemplate to={withPrefix(to)}>
      {children ? children : null}
    </LinkTemplate>
  );
