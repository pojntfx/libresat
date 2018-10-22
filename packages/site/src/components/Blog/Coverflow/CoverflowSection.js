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
          parent,
          frontmatter: { author, imgSrc },
          headings,
          excerpt
        }
      }) => ({
        imgSrc: withPrefix(imgSrc),
        link: `/blog/${parent.name}`,
        header: headings.filter(({ depth }) => depth === 1)[0].value,
        meta: `${new Date(
          parent.name
            .split("-")
            .filter((element, index) => (index < 3 ? element : null)) // Get the date from the post's filename, like with Jekyll
            .join("-")
        ).toLocaleDateString()} by ${author}`,
        description: excerpt
      })
    )}
    {...otherProps}
  />
);

export const CoverflowSection = ({ featured, ...otherProps }) =>
  featured ? <FeaturedSection /> : <NonFeaturedSection />;
