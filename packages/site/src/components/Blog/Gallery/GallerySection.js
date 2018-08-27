import React from "react";
import { withPrefix } from "gatsby";
import { Gallery } from "./Gallery";
import { NonFeaturedSection } from "./NonFeaturedSection";
import { FeaturedSection } from "./FeaturedSection";

export const GallerySectionView = (
  {
    data: {
      allMdx: { edges }
    }
  },
  ...otherProps
) => (
  <Gallery
    posts={edges.map(
      ({
        node: {
          fileNode,
          frontmatter: { author, imgSrc, lastEdit },
          headings,
          timeToRead,
          excerpt
        }
      }) => {
        return {
          imgSrc: withPrefix(imgSrc),
          link: `/blog/${fileNode.name}`,
          header: headings.filter(({ depth }) => depth === 1)[0].value,
          meta: `${new Date(
            fileNode.name
              .split("-")
              .filter((element, index) => (index < 3 ? element : null)) // Get the date from the post's filename, like with Jekyll
              .join("-")
          ).toLocaleDateString()} by ${author}. Last edit on ${new Date(
            lastEdit
          ).toLocaleDateString()}. Estimated time to read: ${timeToRead} ${
            timeToRead === 1 ? "minute" : "minutes"
          }.`,
          description: excerpt
        };
      }
    )}
    {...otherProps}
  />
);

export const GallerySection = ({ featured, ...otherProps }) =>
  featured ? <FeaturedSection /> : <NonFeaturedSection />;
