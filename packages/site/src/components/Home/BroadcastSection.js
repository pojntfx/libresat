import React from "react";
import { withPrefix, StaticQuery, graphql } from "gatsby";
import { Broadcast } from "./Broadcast";

const BroadcastView = (
  {
    data: {
      mdx: {
        relativePath,
        frontmatter: { title, excerpt }
      }
    }
  },
  ...otherProps
) => (
  <Broadcast
    link={withPrefix(`/posts/${relativePath}`)}
    title={title}
    excerpt={excerpt}
    {...otherProps}
  />
);

export const BroadcastSection = props => (
  <StaticQuery
    query={graphql`
      query BroadcastQuery {
        mdx {
          frontmatter {
            title
            excerpt
          }
          relativePath
        }
      }
    `}
    render={data => <BroadcastView data={data} {...props} />}
  />
);
