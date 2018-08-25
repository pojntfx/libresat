import React, { Component } from "react";
import { Base } from "../layouts/Base";
import { Container, Card } from "semantic-ui-react";
import { Paper } from "../components/Paper";
import CoverflowTemplate from "reactjs-coverflow";
import { withPrefix } from "gatsby";
import Link from "gatsby-link";
import styled from "styled-components";

const FeaturedPostTemplate = props => (
  <Card
    image={withPrefix("/img/software-card.png")}
    header="Post Title"
    meta="2 days ago by Felix Pojtinger"
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

export default class Blog extends Component {
  render() {
    return (
      <Base noContainer>
        <Container>
          <Paper>
            <h1>Featured Posts</h1>
            <p>
              Check out the featured, editorial posts below and get an insight
              into recent news, updates and changes.
            </p>
          </Paper>
        </Container>
        <CoverflowSection />
        <Container>
          <Paper>
            <h1>Latest Posts</h1>
            <p>
              Non-editorial, federated posts by the community and/or core devs.
              Consider contributing your own article by submitting a merge
              request!
            </p>
          </Paper>
        </Container>
      </Base>
    );
  }
}
