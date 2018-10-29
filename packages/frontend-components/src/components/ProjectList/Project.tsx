import * as React from "react";
import { ProjectWrapper } from "./ProjectWrapper";
import { Card } from "semantic-ui-react";
import { IProjectProps } from "../../types";

const Project = ({
  title,
  link,
  lastUpdateDate,
  text,
  ...otherProps
}: IProjectProps) => (
  <ProjectWrapper as="a" href={link} fluid {...otherProps}>
    <Card.Content>
      <Card.Header>{title}</Card.Header>
      <Card.Meta>Last update: {lastUpdateDate.toLocaleDateString()}</Card.Meta>
      <Card.Description>{text}</Card.Description>
    </Card.Content>
  </ProjectWrapper>
);

export { Project };
