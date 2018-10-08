import * as React from "react";
import { CodeWrapper } from "./CodeWrapper";
import { Code } from "./Code";

interface ITextProps {
  children: JSX.Element | string;
}

const Text = ({ children, ...otherProps }: ITextProps) => (
  <CodeWrapper {...otherProps}>
    <Code>{children}</Code>
  </CodeWrapper>
);

export { Text };
