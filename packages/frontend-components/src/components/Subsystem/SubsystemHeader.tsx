import * as React from "react";
import { SubsystemAction } from "./SubsystemAction";
import { SubsystemActions } from "./SubsystemActions";
import { Grid, Header } from "semantic-ui-react";
import { ISubsystemHeaderProps } from "../../types";

const SubsystemHeader = ({
  title,
  subtitle,
  icon,
  docsLink,
  docsDisabled,
  repoLink,
  repoDisabled,
  forumLink,
  forumDisabled,
  color,
  linkComponent,
  ...otherProps
}: ISubsystemHeaderProps) => (
  <Grid stackable colums={2} {...otherProps}>
    <Grid.Column width={6}>
      <Header content={title} subheader={subtitle} icon={icon} />
    </Grid.Column>
    <SubsystemActions>
      <SubsystemAction
        as={linkComponent}
        to={docsLink}
        color={color}
        content="Read the docs"
        icon="book"
        disabled={docsDisabled}
      />
      <SubsystemAction
        as="a"
        href={repoLink}
        content="Contribute"
        icon="fork"
        disabled={repoDisabled}
      />
      <SubsystemAction
        as={linkComponent}
        to={forumLink}
        content="Discuss"
        icon="conversation"
        disabled={forumDisabled}
      />
    </SubsystemActions>
  </Grid>
);

export { SubsystemHeader };
