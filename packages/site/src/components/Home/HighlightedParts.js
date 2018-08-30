import React from "react";
import { Card, Header, Icon } from "semantic-ui-react";
import styled from "styled-components";
import { Link } from "../Link";

const HighlightedPart = styled(Card)`
  & > .content {
    & > h2 {
      ${props => (props.disabled ? "color: grey!important" : null)};
    }
  }
`;

const Description = styled(HighlightedPart.Description)`
  margin-bottom: 2em;
`;

const Links = ({ links, linksPerRow, ...otherProps }) => (
  <HighlightedPart.Group stackable itemsPerRow={linksPerRow} {...otherProps}>
    {links.map(({ label, icon, link, description, disabled }, index) => (
      <HighlightedPart
        as={disabled ? undefined : Link}
        to={disabled ? undefined : link}
        disabled={disabled}
        fluid
        key={index}
      >
        <HighlightedPart.Content>
          <Header as="h2" textAlign="center" icon>
            <Icon name={icon} />
            {label}
            <Header.Subheader>{description}</Header.Subheader>
          </Header>
        </HighlightedPart.Content>
      </HighlightedPart>
    ))}
  </HighlightedPart.Group>
);

export const HighlightedParts = ({
  header,
  description,
  linksPerRow,
  links,
  ...otherProps
}) => (
  <HighlightedPart fluid {...otherProps}>
    <HighlightedPart.Content>
      <Header textAlign="center" {...header} />
      <Description>{description}</Description>
      <Links links={links} linksPerRow={linksPerRow} />
    </HighlightedPart.Content>
  </HighlightedPart>
);
