import React from "react";
import { Base } from "../layouts/Base";
import { Container, Card, Header } from "semantic-ui-react";
import { Paper } from "../components/Paper";
import CoverflowTemplate from "reactjs-coverflow";
import { withPrefix } from "gatsby";
import Link from "gatsby-link";
import styled from "styled-components";
import MasonryTemplate from "react-masonry-component";

const FeaturedPostTemplate = props => (
  <Card
    image={withPrefix("/img/software-card.png")}
    header="Post Title"
    meta="2 days ago by Felicitas Pojtinger"
    description="Post Description"
    {...props}
  />
);

const FeaturedPost = styled(FeaturedPostTemplate)`
  margin-top: 1em !important;
  margin-bottom: 1em !important;
`;

const Coverflow = styled(CoverflowTemplate)`
  margin-top: 1em;
  margin-bottom: 1em;
`;

const CoverflowSection = () => (
  <Coverflow rotate={10}>
    <FeaturedPost as={Link} to={withPrefix("/")} />
    <FeaturedPost as={Link} to={withPrefix("/")} />
    <FeaturedPost as={Link} to={withPrefix("/")} />
    <FeaturedPost as={Link} to={withPrefix("/")} />
    <FeaturedPost as={Link} to={withPrefix("/")} />
  </Coverflow>
);

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

const Masonry = styled(MasonryTemplate)`
  margin-top: -1em;
  margin-bottom: -1em;
`;

const Gallery = () => (
  <Masonry options={{ gutter: 30 }}>
    <LatestPost as={Link} to={withPrefix("/")} />
    <LatestPost as={Link} to={withPrefix("/")} />
    <LatestPost as={Link} to={withPrefix("/")} />
    <LatestPost as={Link} to={withPrefix("/")} />
    <LatestPost as={Link} to={withPrefix("/")} />
    <LatestPost as={Link} to={withPrefix("/")} />
  </Masonry>
);

const BlogHeader = styled(Header).attrs({
  inverted: true,
  textAlign: "center"
})`
  padding-top: 4em !important;
  padding-bottom: 4em !important;
`;

export default () => (
  <Base noContainer>
    <Container>
      <BlogHeader
        as="h1"
        content="The LibreSat Blog"
        subheader="Posts on all things LibreSat."
      />
      <Paper>
        <Header
          content="Featured Posts"
          icon="star"
          subheader={`Check out the featured, editorial posts below and get an insight into
          recent news, updates and changes.`}
        />
      </Paper>
    </Container>
    <CoverflowSection />
    <Container>
      <Paper>
        <Header
          content="Latest Posts"
          icon="newspaper"
          subheader={`Non-editorial, federated posts by the community and/or core devs.
          Consider contributing your own post by submitting a merge request!`}
        />
      </Paper>
      <Gallery />
    </Container>
  </Base>
);
