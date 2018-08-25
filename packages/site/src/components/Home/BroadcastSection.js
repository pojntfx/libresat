import React from "react";
import { withPrefix, StaticQuery, graphql } from "gatsby";
import { Broadcast } from "./Broadcast";

const BroadcastView = (
  {
    data: {
      mdx: { relativePath, frontmatter },
      broadcastYaml: { postsLink, ...broadcastYaml }
    }
  },
  ...otherProps
) => (
  <Broadcast
    link={withPrefix(`${postsLink}/${relativePath.split(".")[0]}`)}
    {...frontmatter}
    {...broadcastYaml}
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
        broadcastYaml {
          icon
          postsLink
          readMore
        }
      }
    `}
    render={data => <BroadcastView data={data} {...props} />}
  />
);
