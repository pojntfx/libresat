import * as React from "react";
import { SocialsWrapper } from "./SocialsWrapper";
import { SocialButton } from "./SocialsButton";
import { ISocialsProps, ISocialButton } from "../../../../types";

const Socials = ({ links, ...otherProps }: ISocialsProps) => (
  <SocialsWrapper {...otherProps}>
    {links.map((props, index) => (
      <SocialButton {...props as ISocialButton} key={index} />
    ))}
  </SocialsWrapper>
);

export { Socials };
