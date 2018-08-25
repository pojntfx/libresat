import React from "react";
import { Card, Header, Icon } from "semantic-ui-react";
import styled from "styled-components";
import Link from "gatsby-link";

const Description = styled(Card.Description)`
  margin-bottom: 2em;
`;

const Links = ({ links, linksPerRow, ...otherProps }) => (
  <Card.Group stackable itemsPerRow={linksPerRow} {...otherProps}>
    {links.map(({ label, icon, link, description }, index) => (
      <Card as={Link} to={link} fluid key={index}>
        <Card.Content>
          <Header as="h2" textAlign="center" icon>
            <Icon name={icon} />
            {label}
            <Header.Subheader>{description}</Header.Subheader>
          </Header>
        </Card.Content>
      </Card>
    ))}
  </Card.Group>
);

export const HighlightedParts = ({
  header,
  description,
  linksPerRow,
  links,
  ...otherProps
}) => (
  <Card fluid {...otherProps}>
    <Card.Content>
      <Header textAlign="center" {...header} />
      <Description>{description}</Description>
      <Links links={links} linksPerRow={linksPerRow} />
    </Card.Content>
  </Card>
);
