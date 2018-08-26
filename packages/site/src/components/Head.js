import React from "react";
import { StaticQuery, graphql } from "gatsby";
import { Helmet } from "react-helmet";

const Title = ({
  data: {
    siteYaml: { title: siteTitle }
  },
  title: pageTitle,
  ...otherProps
}) => (
  <Helmet {...otherProps}>
    <title>
      {siteTitle} | {pageTitle}
    </title>
  </Helmet>
);

export const Head = props => (
  <StaticQuery
    query={graphql`
      query SiteTitle {
        siteYaml {
          title
        }
      }
    `}
    render={data => <Title data={data} {...props} />}
  />
);
