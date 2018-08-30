import React from "react";
import { withPrefix } from "gatsby";
import { Card, Image } from "semantic-ui-react";
import { Overview } from "./Overview";
import { Description } from "./Description";
import { Header } from "./Header";
import { Divider } from "./Divider";
import { TrendingProjects } from "./TrendingProjects";

export const Subsystem = ({
  color,
  imgAlt,
  imgSrc,
  header,
  description,
  overviewDivider,
  statistics,
  trendingProjectsDivider,
  trendingProjects
}) => (
  <Card fluid color={color}>
    <Image alt={imgAlt} src={withPrefix(imgSrc)} />
    <Card.Content>
      <Header
        repoLink={`${trendingProjects.endpoint}/${trendingProjects.groupName}/${
          trendingProjects.projectName
        }`}
        {...header}
        color={color}
      />
      <Description>{description}</Description>
      <Divider offset="bottom" {...overviewDivider} />
      <Overview statistics={statistics} />
      <Divider offset="top" {...trendingProjectsDivider} />
      <TrendingProjects {...trendingProjects} />
    </Card.Content>
  </Card>
);
