import React from "react";
import { withPrefix } from "gatsby";
import { Card, Image } from "semantic-ui-react";
import { Statistics } from "@libresat/frontend-components";
import { Description } from "./Description";
import { Header } from "./Header";
import { Divider, ProjectList } from "@libresat/frontend-components";

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
      <Statistics statistics={statistics} />
      <Divider offset="top" {...trendingProjectsDivider} />
      <ProjectList {...trendingProjects} />
    </Card.Content>
  </Card>
);
