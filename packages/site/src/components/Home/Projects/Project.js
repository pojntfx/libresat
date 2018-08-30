import React from "react";
import { Card } from "semantic-ui-react";
import styled from "styled-components";

const ProjectWrapper = styled(Card)`
  min-width: 18em;
  margin-top: 1em !important;
  margin-bottom: 1em !important;
  margin-left: 0.5em !important;
  margin-right: 0.5em !important;
  & > .content {
    min-width: 16em !important;
  }
`;

export const Project = ({
  link,
  name,
  lastUpdateDate,
  description,
  ...otherProps
}) => (
  <ProjectWrapper as="a" href={link} fluid {...otherProps}>
    <Card.Content>
      <Card.Header>{name}</Card.Header>
      <Card.Meta>Last update: {lastUpdateDate.toLocaleDateString()}</Card.Meta>
      <Card.Description>{description}</Card.Description>
    </Card.Content>
  </ProjectWrapper>
);
