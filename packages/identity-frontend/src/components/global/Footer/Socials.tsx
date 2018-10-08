import * as React from "react";
import { SocialsWrapper } from "./SocialsWrapper";
import { SocialButton } from "./SocialButton";

interface ISocialsProps {
  links: ILinkProps[];
}

interface ILinkProps {
  title: string;
  img: string;
  link: string;
}

const Socials = ({ links, ...otherProps }: ISocialsProps) => (
  <SocialsWrapper {...otherProps}>
    {links.map((props, index) => (
      <SocialButton {...props} key={index} />
    ))}
  </SocialsWrapper>
);

export { Socials, ILinkProps };
