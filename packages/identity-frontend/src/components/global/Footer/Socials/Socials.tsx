import * as React from "react";
import { SocialsWrapper } from "./SocialsWrapper";
import { SocialButton } from "./SocialsButton";
import { ISocialsProps } from "../../../../types";

const Socials = ({ links, ...otherProps }: ISocialsProps) => (
  <SocialsWrapper {...otherProps}>
    {links.map((props, index) => (
      <SocialButton {...props} key={index} />
    ))}
  </SocialsWrapper>
);

export { Socials };
