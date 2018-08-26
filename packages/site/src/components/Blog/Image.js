import React from "react";
import styled from "styled-components";
import { Image as ImageTemplate } from "semantic-ui-react";

const maxWidth = "600px";

const ImageInternal = styled(ImageTemplate).attrs({
  centered: true,
  rounded: true
})`
  display: block !important;
  max-width: ${maxWidth} !important;
  margin-top: 4em;
`;

const Caption = styled.figcaption`
  margin-left: auto;
  margin-right: auto;
  margin-top: 1em;
  max-width: ${maxWidth} !important;
  margin-bottom: 4em;
  font-style: italic;
  text-align: center;
`;

export const Image = ({ src, as, to, alt, ...otherProps }) => (
  <figure {...otherProps}>
    <ImageInternal alt="alt" as={as} to={to} src={src} />
    <Caption>{alt}</Caption>
  </figure>
);
