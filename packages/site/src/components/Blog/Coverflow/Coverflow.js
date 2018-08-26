import React from "react";
import styled from "styled-components";
import CoverflowTemplate from "reactjs-coverflow";
import { Card } from "semantic-ui-react";
import { withPrefix } from "gatsby-link";
import { Link } from "../../Link";

const PostsCoverflow = styled(CoverflowTemplate)`
  margin-top: 1em;
  margin-bottom: 1em;
  background: transparent;
`;

const PostTemplate = ({ imgSrc, ...otherProps }) => (
  <Card image={withPrefix(imgSrc)} {...otherProps} />
);

const Post = styled(PostTemplate)`
  margin-top: 1em !important;
  margin-bottom: 1em !important;
`;

export const Coverflow = ({ posts, ...otherProps }) => (
  <PostsCoverflow rotate={10}>
    {posts.map(({ link, ...props }, index) => (
      <Post {...props} as={Link} to={link} key={index} />
    ))}
  </PostsCoverflow>
);
