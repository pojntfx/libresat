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
          frontmatter: { author },
          headings,
          excerpt
        }
      }) => {
        return {
          imgSrc: withPrefix("/img/software-card.png"),
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

// export const CoverflowSection = props => (
//   <CoverflowSectionView
//     posts={[
//       {
//         imgSrc: withPrefix("/img/software-card.png"),
//         link: withPrefix("/"),
//         header: "Post Title",
//         meta: "2 days ago by Felix Pojtinger",
//         description: "Post Description"
//       },
//       {
//         imgSrc: withPrefix("/img/software-card.png"),
//         link: withPrefix("/"),
//         header: "Post Title",
//         meta: "2 days ago by Felix Pojtinger",
//         description: "Post Description"
//       },
//       {
//         imgSrc: withPrefix("/img/software-card.png"),
//         link: withPrefix("/"),
//         header: "Post Title",
//         meta: "2 days ago by Felix Pojtinger",
//         description: "Post Description"
//       }
//     ]}
//     {...props}
//   />
// );
