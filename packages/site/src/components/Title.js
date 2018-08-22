import React from "react";
import { StaticQuery, graphql } from "gatsby";

const Title = ({
  data: {
    siteYaml: { title }
  },
  ...otherProps
}) => <span {...otherProps}>{title}</span>;

export default () => (
  <StaticQuery
    query={graphql`
      query SiteTitle {
        siteYaml {
          title
        }
      }
    `}
    render={data => <Title data={data} />}
  />
);
