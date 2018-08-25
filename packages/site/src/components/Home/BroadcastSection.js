import React from "react";
import { withPrefix, StaticQuery, graphql } from "gatsby";
import { Broadcast } from "./Broadcast";

const BroadcastView = (
  {
    data: {
      mdx: { relativePath, headings, frontmatter },
      broadcastYaml: { postsLink, ...broadcastYaml }
    }
  },
  ...otherProps
) => (
  <Broadcast
    link={withPrefix(`${postsLink}/${relativePath.split(".")[0]}`)}
    title={headings.filter(({ depth }) => depth === 1)[0].value}
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
            excerpt
          }
          relativePath
          headings {
            value
            depth
          }
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
