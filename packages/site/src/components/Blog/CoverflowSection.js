import React from "react";
import { withPrefix, StaticQuery, graphql } from "gatsby";
import { Coverflow } from "./Coverflow";

const CoverflowView = (
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

export const CoverflowSection = props => (
  <StaticQuery
    query={graphql`
      query CoverflowQuery {
        allMdx {
          edges {
            node {
              fileNode {
                name
              }
              frontmatter {
                author
                imgSrc
              }
              headings {
                value
                depth
              }
              excerpt
            }
          }
        }
      }
    `}
    render={data => <CoverflowView data={data} {...props} />}
  />
);
