import * as React from "react";
import { NoScriptWrapper } from "./NoScriptWrapper";
import { INoScriptProps } from "../../types";
import { Container } from "../Container";

const NoScript = ({ title, text, ...otherProps }: INoScriptProps) => (
  <noscript {...otherProps}>
    <Container>
      <NoScriptWrapper warning icon="js" header={title} content={text} />
    </Container>
  </noscript>
);

export { NoScript };
