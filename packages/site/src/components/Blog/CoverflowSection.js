import React from "react";
import styled from "styled-components";
import { Card } from "semantic-ui-react";
import Link, { withPrefix } from "gatsby-link";
import { Coverflow } from "./Coverflow";

const PostTemplate = ({ imgSrc, ...otherProps }) => (
  <Card image={withPrefix(imgSrc)} {...otherProps} />
);

const Post = styled(PostTemplate)`
  margin-top: 1em !important;
  margin-bottom: 1em !important;
`;

const CoverflowSectionView = ({ posts, ...otherProps }) => (
  <Coverflow rotate={10}>
    {posts.map(({ link, ...props }, index) => (
      <Post {...props} as={Link} to={link} key={index} />
    ))}
  </Coverflow>
);

export const CoverflowSection = props => (
  <CoverflowSectionView
    posts={[
      {
        imgSrc: withPrefix("/img/software-card.png"),
        link: withPrefix("/"),
        header: "Post Title",
        meta: "2 days ago by Felicitas Pojtinger",
        description: "Post Description"
      },
      {
        imgSrc: withPrefix("/img/software-card.png"),
        link: withPrefix("/"),
        header: "Post Title",
        meta: "2 days ago by Felicitas Pojtinger",
        description: "Post Description"
      },
      {
        imgSrc: withPrefix("/img/software-card.png"),
        link: withPrefix("/"),
        header: "Post Title",
        meta: "2 days ago by Felicitas Pojtinger",
        description: "Post Description"
      }
    ]}
    {...props}
  />
);
