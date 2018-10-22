import React from "react";
import styled from "react-emotion";
import { Image as ImageTemplate } from "semantic-ui-react";

const maxWidth = "600px";

const ImageInternalTemplate = styled(ImageTemplate)`
  display: block !important;
  max-width: ${maxWidth} !important;
  margin-top: 4em;
`;

const ImageInternal = props => (
  <ImageInternalTemplate centered rounded {...props} />
);

const Caption = styled("span")`
  margin-top: 1em;
  width: 100%;
  margin-bottom: 4em;
  font-style: italic;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Image = ({ src, as, to, alt, ...otherProps }) => (
  <>
    <ImageInternal alt="alt" as={as} to={to} src={src} {...otherProps} />
    <Caption>{alt}</Caption>
  </>
);
