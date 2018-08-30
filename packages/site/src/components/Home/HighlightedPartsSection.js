import React from "react";
import { withPrefix, StaticQuery, graphql } from "gatsby";
import { HighlightedParts } from "./HighlightedParts";

const HighlightedPartsView = ({
  data: {
    highlightedPartsYaml: { links, ...highlightedPartsYaml }
  },
  ...otherProps
}) => (
  <HighlightedParts
    links={links.map(({ link, ...rest }) => {
      return {
        link: withPrefix(link),
        ...rest
      };
    })}
    {...highlightedPartsYaml}
    {...otherProps}
  />
);

export const HighlightedPartsSection = props => (
  <StaticQuery
    query={graphql`
      query HighlightedPartsQuery {
        highlightedPartsYaml {
          header {
            content
            subheader
          }
          description
          linksPerRow
          links {
            label
            icon
            link
            description
            disabled
          }
        }
      }
    `}
    render={data => <HighlightedPartsView data={data} {...props} />}
  />
);
