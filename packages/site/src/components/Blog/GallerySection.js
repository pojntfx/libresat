import React from "react";
import styled from "styled-components";
import { Card } from "semantic-ui-react";
import Link, { withPrefix } from "gatsby-link";
import { Gallery } from "./Gallery";

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

const GallerySectionView = ({ posts, ...otherProps }) => (
  <Gallery options={{ gutter: 30 }} {...otherProps}>
    {posts.map(({ link, ...props }, index) => (
      <Post {...props} as={Link} to={link} key={index} />
    ))}
  </Gallery>
);
export const GallerySection = props => (
  <GallerySectionView
    posts={[
      {
        imgSrc: withPrefix("/img/software-card.png"),
        link: withPrefix("/"),
        header: "Post Title",
        meta:
          "2 days ago by Felix Pojtinger. Last edit 1 day ago. Estimated reading time: 1 Minute.",
        description:
          "Lorem ipsum dolor sit nesciunt cumque alias beatae Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, hic voluptatem nesciunt cumque alias beatae"
      },
      {
        imgSrc: withPrefix("/img/software-card.png"),
        link: withPrefix("/"),
        header: "Post Title",
        meta:
          "2 days ago by Felix Pojtinger. Last edit 1 day ago. Estimated reading time: 1 Minute.",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, hic voluptatem nesciunt cumque alias beataeLorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, hic voluptatem nesciunt cumque alias beataeLorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, hic voluptatem nesciunt cumque alias beatae"
      },
      {
        imgSrc: withPrefix("/img/software-card.png"),
        link: withPrefix("/"),
        header: "Post Title",
        meta:
          "2 days ago by Felix Pojtinger. Last edit 1 day ago. Estimated reading time: 1 Minute.",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, hic voluptatem nesciunt cumque alias beatae"
      }
    ]}
    {...props}
  />
);
