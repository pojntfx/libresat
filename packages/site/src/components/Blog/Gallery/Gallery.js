import React from "react";
import styled from "react-emotion";
import MasonryTemplate from "react-masonry-component";
import { Card } from "semantic-ui-react";
import { withPrefix } from "gatsby-link";
import { Link } from "../../Link";

const PostsGallery = styled(MasonryTemplate)`
  margin-top: -1em;
  margin-bottom: -1em;
`;

const PostTemplate = ({ imgSrc, ...otherProps }) => (
  <Card image={withPrefix(imgSrc)} {...otherProps} />
);

const Post = styled(PostTemplate)`
  margin-top: 1em !important;
  margin-bottom: 1em !important;
  width: auto !important;
  max-width: ${1127 / 2 - 15}px !important;
  @media (max-width: 1127px) {
    max-width: 100% !important;
    width: 100% !important;
  }
`;

export const Gallery = ({ posts, ...otherProps }) => (
  <PostsGallery options={{ gutter: 30 }}>
    {posts.map(({ link, ...props }, index) => (
      <Post {...props} as={Link} to={link} key={index} />
    ))}
  </PostsGallery>
);
