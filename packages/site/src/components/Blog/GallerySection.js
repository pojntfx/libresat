import React from "react";
import styled from "styled-components";
import { Card } from "semantic-ui-react";
import Link, { withPrefix } from "gatsby-link";
import { Gallery } from "./Gallery";

const LatestPostTemplate = props => (
  <Card
    fluid
    image={withPrefix("/img/software-card.png")}
    header="Post Title"
    meta="2 days ago by Felicitas Pojtinger. Last edit 1 day ago. Estimated reading time: 1 Minute."
    description={`Waaayyyy longeeer Post Description ${Math.random()
      .toString(36)
      .substring(7)}`}
    {...props}
  />
);

const LatestPost = styled(LatestPostTemplate)`
  margin-top: 1em !important;
  margin-bottom: 1em !important;
  width: auto !important;
  max-width: ${1127 / 2 - 15}px !important;
  @media (max-width: 1127px) {
    max-width: 100% !important;
    width: 100% !important;
  }
`;

export const GallerySection = () => (
  <Gallery options={{ gutter: 30 }}>
    <LatestPost as={Link} to={withPrefix("/")} />
    <LatestPost as={Link} to={withPrefix("/")} />
    <LatestPost as={Link} to={withPrefix("/")} />
    <LatestPost as={Link} to={withPrefix("/")} />
    <LatestPost as={Link} to={withPrefix("/")} />
    <LatestPost as={Link} to={withPrefix("/")} />
  </Gallery>
);
