import React from "react";
import { withPrefix } from "gatsby";
import { Coverflow } from "./Coverflow";
import { NonFeaturedSection } from "./NonFeaturedSection";
import { FeaturedSection } from "./FeaturedSection";

export const CoverflowView = (
  {
    data: {
      allMdx: { edges }
    }
  },
  ...otherProps
) => (
  <Coverflow
    posts={edges.map(
      ({
        node: {
          fileNode,
          frontmatter: { author, imgSrc },
          headings,
          excerpt
        }
      }) => {
        return {
          imgSrc: withPrefix(imgSrc),
          link: `/blog/${fileNode.name}`,
          header: headings.filter(({ depth }) => depth === 1)[0].value,
          meta: `${fileNode.name
            .split("-")
            .filter((element, index) => (index < 3 ? element : null)) // Get the date from the post's filename, like with Jekyll
            .join("-")} by ${author}`,
          description: excerpt
        };
      }
    )}
    {...otherProps}
  />
);

export const CoverflowSection = ({ featured, ...otherProps }) =>
  featured ? <FeaturedSection /> : <NonFeaturedSection />;
