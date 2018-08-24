import React from "react";
import styled from "styled-components";
import { Button, Grid, Header as HeaderTemplate } from "semantic-ui-react";
import { Link } from "gatsby-link";

const CardAction = styled(Button)`
  white-space: nowrap;
`;

const CardActions = styled(Grid.Column).attrs({
  width: 10
})`
  display: flex !important;
  overflow-x: auto;
  & > ${CardAction}:first-child {
    margin-left: auto;
    @media (max-width: 767px) {
      margin-left: auto;
    }
  }
  & > ${CardAction}:last-child {
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
  ...otherProps
}) => (
  <Grid stackable colums={2} {...otherProps}>
    <Grid.Column width={6}>
      <HeaderTemplate content={title} subheader={subtitle} icon={icon} />
    </Grid.Column>
    <CardActions>
      <CardAction
        as={Link}
        to={docsLink}
        color="blue"
        content="Read the docs"
        icon="book"
      />
      <CardAction as={Link} to={repoLink} content="Contribute" icon="fork" />
      <CardAction
        as={Link}
        to={forumLink}
        content="Discuss"
        icon="conversation"
      />
    </CardActions>
  </Grid>
);
