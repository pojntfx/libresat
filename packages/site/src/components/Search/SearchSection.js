import React from "react";
import { StaticQuery, graphql } from "gatsby";
import { SearchFilter } from "./Search";
import { withPrefix } from "gatsby-link";

const Search = ({
  data: {
    allMdx: { edges },
    allSitePage: { totalCount }
  },
  ...otherProps
}) => (
  <SearchFilter
    placeholder={`Search ${totalCount} ${
      totalCount === 1 ? "page" : "pages"
    } ...`}
    source={edges.map(
      ({
        node: {
          rawBody,
          frontmatter: { author, imgSrc },
          headings,
          excerpt,
          fileNode: { name }
        }
      }) => {
        return {
          body: rawBody,
          imgSrc: withPrefix(imgSrc),
          link: `/blog/${name}`,
          header: headings.filter(({ depth }) => depth === 1)[0].value,
          meta: `${name
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

export const SearchSection = props => (
  <StaticQuery
    query={graphql`
      query SiteSearch {
        allMdx {
          edges {
            node {
              rawBody
              fileNode {
                name
              }
              headings {
                value
                depth
              }
              frontmatter {
                author
                imgSrc
              }
              excerpt
            }
          }
        }
        allSitePage {
          totalCount
        }
      }
    `}
    render={data => <Search data={data} {...props} />}
  />
);
