import React from "react";
import { withPrefix, StaticQuery, graphql } from "gatsby";
import { Hero } from "./Hero";

const HeroView = (
  {
    data: {
      heroYaml: { primaryAction, ...heroYaml }
    }
  },
  ...otherProps
) => (
  <Hero
    primaryAction={{ link: withPrefix(primaryAction.link), ...primaryAction }}
    {...heroYaml}
    {...otherProps}
  />
);

export const HeroSection = props => (
  <StaticQuery
    query={graphql`
      query HeroQuery {
        heroYaml {
          title
          subtitle
          primaryAction {
            label
            icon
            link
          }
          secondaryAction {
            label
            icon
            header
            videoSrc
          }
        }
      }
    `}
    render={data => <HeroView data={data} {...props} />}
  />
);
