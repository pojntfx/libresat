import * as React from "react";
import { SubsystemDescription } from "./SubsystemDescription";
import { Divider } from "../Divider/Divider";
import { Statistics } from "../Statistics";
import { ProjectList } from "../ProjectList/ProjectList";
import { Card, Image } from "semantic-ui-react";
import { ISubsystemProps } from "../../types";
import { SubsystemHeader } from "./SubsystemHeader";

const Subsystem = ({
  color,
  imgAlt,
  image,
  header,
  text,
  overviewDivider,
  statistics,
  trendingProjectsDivider,
  trendingProjects
}: ISubsystemProps) => (
  <Card fluid color={color}>
    <Image alt={imgAlt} src={image} />
    <Card.Content>
      <SubsystemHeader
        repoLink={`${trendingProjects.endpoint}/${trendingProjects.groupName}/${
          trendingProjects.projectName
        }`}
        {...header}
        color={color}
      />
      <SubsystemDescription>{text}</SubsystemDescription>
      <Divider offset="bottom" {...overviewDivider} />
      <Statistics statistics={statistics} />
      <Divider offset="top" {...trendingProjectsDivider} />
      <ProjectList {...trendingProjects} />
    </Card.Content>
  </Card>
);

export { Subsystem };
