import React from "react";
import { Base } from "./Base";
import styled from "styled-components";
import { Paper } from "../components/Paper";
import { PageHeader } from "../components/Blog/PageHeader";
import { Header, Card, Image } from "semantic-ui-react";
import { CoverflowSection } from "../components/Blog/Coverflow/CoverflowSection";
import Link, { withPrefix } from "gatsby-link";

const Author = styled.div`
  font-style: italic;
`;

export default ({
  children,
  pageContext: { author, featured, date, lastEdit, imgSrc, imgAlt, timeToRead }
}) => (
  <Base>
    <Link to={withPrefix("/blog")}>
      <PageHeader
        as="h1"
        content="The LibreSat Blog"
        subheader="Posts on all things LibreSat."
      />
    </Link>
    <Card fluid>
      <Card.Content>
        <Author>
          A {featured ? "featured " : null}
          post by {author} on {date}. Last edit on {lastEdit}. Estimated time to
          read: {timeToRead} {timeToRead === 1 ? "minute" : "minutes"}.
        </Author>
      </Card.Content>
      <a href={withPrefix(imgSrc)}>
        <Image src={withPrefix(imgSrc)} alt={imgAlt} />
      </a>
      <Card.Content>{children}</Card.Content>
    </Card>
    <Paper>
      {featured ? (
        <Header
          content="More Featured Posts"
          icon="star"
          subheader={`Check out the featured, editorial posts below and get an insight into
          recent news, updates and changes.`}
        />
      ) : (
        <Header
          content="More Posts"
          icon="newspaper"
          subheader={`Non-editorial, federated posts by the community and/or core devs.
      Consider contributing your own post by submitting a merge request!`}
        />
      )}
    </Paper>
    <CoverflowSection featured={featured} />
  </Base>
);
