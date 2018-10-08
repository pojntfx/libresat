import * as React from "react";
import styled from "styled-components";

interface ISocialButton {
  img: string;
  title: string;
  link: string;
}

const SocialButtonTemplate = (
  { img, title, link, ...otherProps }: ISocialButton,
  index: number
) => (
  <a href={link} key={index} {...otherProps}>
    <img src={img} alt={title} />
  </a>
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
