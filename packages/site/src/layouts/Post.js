import React from "react";
import { Base } from "./Base";
import styled from "styled-components";
import { Paper } from "../components/Paper";
import { BlogHeader } from "../components/Blog/Headers/Blog";
import { Card, Image } from "semantic-ui-react";
import { CoverflowSection } from "../components/Blog/Coverflow/CoverflowSection";
import { withPrefix } from "gatsby-link";
import { Link } from "../components/Link";
import { FeaturedHeader } from "../components/Blog/Headers/Featured";
import { LatestHeader } from "../components/Blog/Headers/Latest";
import { Head } from "../components/Head";

const Author = styled.div`
  font-style: italic;
`;

export default ({
  children,
  pageContext: {
    author,
    featured,
    date,
    lastEdit,
    imgSrc,
    imgAlt,
    timeToRead,
    title
  }
}) => (
  <Base>
    <Head title={title} />
    <Link to="/blog">
      <BlogHeader />
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
    <Paper>{featured ? <FeaturedHeader more /> : <LatestHeader more />}</Paper>
    <CoverflowSection featured={featured} />
  </Base>
);
