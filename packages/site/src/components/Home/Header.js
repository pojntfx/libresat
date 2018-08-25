import React from "react";
import styled from "styled-components";
import { Button, Grid, Header as HeaderTemplate } from "semantic-ui-react";
import Link from "gatsby-link";

const Action = styled(Button).attrs({
  labelPosition: "left"
})`
  white-space: nowrap;
  /* This is necessary to prevent glitches if the row get's to high */
  max-height: 3em;
`;

const Actions = styled(Grid.Column).attrs({
  width: 10
})`
  display: flex !important;
  overflow-x: auto;
  & > ${Action}:first-child {
    margin-left: auto;
    @media (max-width: 767px) {
      margin-left: auto;
    }
  }
  & > ${Action}:last-child {
    @media (max-width: 767px) {
      margin-right: auto;
    }
  }
`;

export const Header = ({
  title,
  subtitle,
  icon,
  docsLink,
  repoLink,
  forumLink,
  color,
  ...otherProps
}) => (
  <Grid stackable colums={2} {...otherProps}>
    <Grid.Column width={6}>
      <HeaderTemplate content={title} subheader={subtitle} icon={icon} />
    </Grid.Column>
    <Actions>
      <Action
        as={Link}
        to={docsLink}
        color={color}
        content="Read the docs"
        icon="book"
      />
      <Action as="a" href={repoLink} content="Contribute" icon="fork" />
      <Action as={Link} to={forumLink} content="Discuss" icon="conversation" />
    </Actions>
  </Grid>
);
