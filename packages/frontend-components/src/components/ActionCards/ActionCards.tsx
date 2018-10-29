import * as React from "react";
import { ActionCard } from "./ActionCard";
import { Card, Header } from "semantic-ui-react";
import { ActionCardsLinks } from "./ActionCardsLinks";
import { ActionCardDescription } from "./ActionCardsDescription";
import { IActionCardsProps } from "../../types";

const ActionCards = ({
  header,
  text,
  linksPerRow,
  links,
  linkComponent,
  ...otherProps
}: IActionCardsProps) => (
  <ActionCard fluid {...otherProps}>
    <Card.Content>
      <Header textAlign="center" {...header} />
      <ActionCardDescription>{text}</ActionCardDescription>
      <ActionCardsLinks
        links={links}
        linksPerRow={linksPerRow}
        linkComponent={linkComponent}
      />
    </Card.Content>
  </ActionCard>
);

export { ActionCards };
