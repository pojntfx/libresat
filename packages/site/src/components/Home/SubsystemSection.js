import React from "react";
import { withPrefix, StaticQuery, graphql } from "gatsby";
import { Subsystem } from "./Subsystem";

const SubsystemView = (
  {
    data: {
      subsystemsYaml: {
        imgSrc,
        header: { docsLink, ...header },
        ...subsystemsYaml
      }
    }
  },
  ...otherProps
) => (
  <Subsystem
    imgSrc={withPrefix(imgSrc)}
    header={{
      docsLink: withPrefix(docsLink),
      ...header
    }}
    {...subsystemsYaml}
    {...otherProps}
  />
);

export const SubsystemSection = props => (
  <StaticQuery
    query={graphql`
      query SubsystemQuery {
        subsystemsYaml {
          color
          imgAlt
          imgSrc
          header {
            title
            subtitle
            icon
            docsLink
            forumLink
          }
          description
          overviewDivider {
            label
            icon
          }
          statistics {
            value
            label
            icon
          }
          trendingProjectsDivider {
            label
            icon
          }
          trendingProjects {
            endpoint
            groupName
            projectName
            projectID
          }
        }
      }
    `}
    render={data => <SubsystemView data={data} {...props} />}
  />
);
