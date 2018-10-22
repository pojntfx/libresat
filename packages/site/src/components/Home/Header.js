import React from "react";
import styled from "react-emotion";
import { Button, Grid, Header as HeaderTemplate } from "semantic-ui-react";
import { Link } from "../Link";

const ActionTemplate = styled(Button)`
  white-space: nowrap;
  /* This is necessary to prevent glitches if the row get's to high */
  max-height: 3em;
`;

const Action = props => <ActionTemplate labelPosition="left" {...props} />;

const ActionsTemplate = styled(Grid.Column)`
  display: flex !important;
  overflow-x: auto;
  & > .button:first-child {
    margin-left: auto;
    @media (max-width: 767px) {
      margin-left: auto;
    }
  }
  & > .button:last-child {
    @media (max-width: 767px) {
      margin-right: auto;
    }
  }
`;

const Actions = props => <ActionsTemplate width={10} {...props} />;

export const Header = ({
  title,
  subtitle,
  icon,
  docsLink,
  docsDisabled,
  repoLink,
  forumLink,
  forumDisabled,
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
        disabled={docsDisabled}
      />
      <Action as="a" href={repoLink} content="Contribute" icon="fork" />
      <Action
        as={Link}
        to={forumLink}
        content="Discuss"
        icon="conversation"
        disabled={forumDisabled}
      />
    </Actions>
  </Grid>
);
