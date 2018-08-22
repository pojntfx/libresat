import React from "react";
import { StaticQuery, graphql } from "gatsby";

const Title = ({
  data: {
    dataYaml: { title }
  },
  ...otherProps
}) => <span {...otherProps}>{title}</span>;

export default () => (
  <StaticQuery
    query={graphql`
      query SiteTitle {
        dataYaml {
          title
        }
      }
    `}
    render={data => <Title data={data} />}
  />
);
