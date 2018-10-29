import React from "react";
import { withPrefix, StaticQuery, graphql } from "gatsby";
import { ActionCards } from "@libresat/frontend-components";
import { Link } from "../Link";

const HighlightedPartsView = ({
  data: {
    highlightedPartsYaml: { links, description, ...highlightedPartsYaml }
  },
  ...otherProps
}) => (
  <ActionCards
    links={links.map(({ link, label, description, ...rest }) => ({
      link: withPrefix(link),
      title: label,
      text: description,
      ...rest
    }))}
    text={description}
    linkComponent={Link}
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
