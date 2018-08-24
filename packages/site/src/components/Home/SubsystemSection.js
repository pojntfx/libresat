import React from "react";
import { withPrefix, StaticQuery, graphql } from "gatsby";
import { Subsystem } from "./Subsystem";

const SubsystemView = (
  {
    data: {
      allSubsystemsYaml: { edges }
    }
  },
  ...otherProps
) =>
  edges.map(
    (
      {
        node: {
          imgSrc,
          header: { docsLink, ...header },
          ...subsystemYaml
        }
      },
      key
    ) => (
      <Subsystem
        imgSrc={withPrefix(imgSrc)}
        header={{
          docsLink: withPrefix(docsLink),
          ...header
        }}
        key={key}
        {...subsystemYaml}
        {...otherProps}
      />
    )
  );

export const SubsystemSection = props => (
  <StaticQuery
    query={graphql`
      query SubsystemQuery {
        allSubsystemsYaml {
          edges {
            node {
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
        }
      }
    `}
    render={data => <SubsystemView data={data} {...props} />}
  />
);
