import * as React from "react";
import { HeaderProps } from "semantic-ui-react";
import { HeaderWrapper } from "./HeaderWrapper";

const Header = (props: HeaderProps) => (
  <HeaderWrapper inverted textAlign="center" {...props} />
);

export { Header };
