import * as React from "react";
import { ProjectWrapper } from "./ProjectWrapper";
import { CardProps, Card } from "semantic-ui-react";

const ProjectPlaceholderWrapper = ({ children, props }: CardProps) => (
  <ProjectWrapper {...props}>
    <Card.Content>{children}</Card.Content>
  </ProjectWrapper>
);

export { ProjectPlaceholderWrapper };
