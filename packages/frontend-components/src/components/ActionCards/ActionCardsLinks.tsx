import * as React from "react";
import { ActionCard } from "./ActionCard";
import { Card, Icon, Header } from "semantic-ui-react";
import { IActionCardsLinks } from "../../types";

const ActionCardsLinks = ({
  links,
  linksPerRow,
  linkComponent,
  ...otherProps
}: IActionCardsLinks) => (
  <Card.Group stackable itemsPerRow={linksPerRow} {...otherProps}>
    {links.map(({ title, icon, link, text, disabled }, index) => (
      <ActionCard
        as={disabled ? undefined : linkComponent}
        to={disabled ? undefined : link}
        disabled={disabled}
        fluid
        key={index}
      >
        <Card.Content>
          <Header as="h2" textAlign="center" icon>
            <Icon name={icon} />
            {title}
            <Header.Subheader>{text}</Header.Subheader>
          </Header>
        </Card.Content>
      </ActionCard>
    ))}
  </Card.Group>
);

export { ActionCardsLinks };
