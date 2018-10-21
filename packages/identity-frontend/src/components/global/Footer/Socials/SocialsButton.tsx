import * as React from "react";
import styled from "styled-components";
import { ISocialButton } from "../../../../types";
import { Help } from "../../Help/Help";

const SocialButtonTemplate = (
  { img, title, link, help, ...otherProps }: ISocialButton,
  index: number
) => (
  <Help {...help}>
    <a href={link} key={index} {...otherProps}>
      <img src={img} alt={title} />
    </a>
  </Help>
);

const SocialButton = styled(SocialButtonTemplate)`
  display: block;
  margin-right: 1em;
  &:first-child {
    margin-left: auto;
  }
  &:last-child {
    margin-right: auto;
  }
`;

export { SocialButton };
