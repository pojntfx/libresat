import * as React from "react";
import { ProjectPlaceholderWrapper } from "./ProjectPlaceholderWrapper";
import { CardProps, Placeholder } from "semantic-ui-react";

const ProjectPlaceholder = (props: CardProps) => (
  <ProjectPlaceholderWrapper {...props}>
    <Placeholder>
      <Placeholder.Header>
        <Placeholder.Line length="very short" />
        <Placeholder.Line length="short" />
      </Placeholder.Header>
      <Placeholder.Paragraph>
        <Placeholder.Line />
        <Placeholder.Line />
      </Placeholder.Paragraph>
    </Placeholder>
  </ProjectPlaceholderWrapper>
);

export { ProjectPlaceholder };
