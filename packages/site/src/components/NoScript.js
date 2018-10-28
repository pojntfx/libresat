import React from "react";
import { StaticQuery, graphql } from "gatsby";
import { NoScript as NoScriptTemplate } from "@libresat/frontend-components";

const NoScriptView = ({
  data: {
    siteYaml: { noscriptHeader, noscriptBody }
  },
  ...otherProps
}) => (
  <NoScriptTemplate
    title={noscriptHeader}
    text={noscriptBody}
    {...otherProps}
  />
);

export const NoScript = props => (
  <StaticQuery
    query={graphql`
      query NoScript {
        siteYaml {
          noscriptHeader
          noscriptBody
        }
      }
    `}
    render={data => <NoScriptView data={data} {...props} />}
  />
);
