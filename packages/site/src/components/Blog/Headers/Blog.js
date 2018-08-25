import React from "react";
import { StaticQuery, graphql } from "gatsby";
import { PageHeader } from "./PageHeader";

const BlogHeaderView = (
  {
    data: {
      allBlogHeadersYaml: { edges }
    }
  },
  ...otherProps
) => <PageHeader as="h1" {...edges[0].node} {...otherProps} />;

export const BlogHeader = props => (
  <StaticQuery
    query={graphql`
      {
        allBlogHeadersYaml(filter: { scope: { eq: "blog" } }) {
          edges {
            node {
              content
              subheader
            }
          }
        }
      }
    `}
    render={data => <BlogHeaderView data={data} {...props} />}
  />
);
