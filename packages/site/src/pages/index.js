import React from "react";
import { Base } from "../layouts/Base";
import { Hero } from "../components/Home/Hero";
import { Subsystem } from "../components/Home/Subsystem";
import { withPrefix } from "gatsby";

export default () => (
  <Base>
    <Hero
      title="Develop and Control Satellites, the Libre Way"
      subtitle="The Free/Libre and Open Source Satellite Development and Control Platform"
      primaryAction={{
        label: "Get started",
        icon: "rocket",
        link: withPrefix("/docs")
      }}
      secondaryAction={{
        label: "Watch video",
        icon: "video",
        header: "LibreSat Introduction Video",
        videoSrc: "http://lunduke.com/720classic/LinuxSucks-2016.mp4"
      }}
    />
    <Subsystem
      color="blue"
      imgAlt="Screenshot of the LibreSat OS concept"
      imgSrc={withPrefix("/img/software-card.png")}
      header={{
        title: "Software",
        subtitle: "Liberate your Spacecraft",
        icon: "code",
        docsLink: withPrefix("/docs/software"),
        forumLink: "https://forum.libresat.space/forum"
      }}
      description="Lorem dolor sit space is awesome"
      overviewDivider={{
        label: "Overview",
        icon: "compass"
      }}
      statistics={[
        {
          value: 10024,
          label: "Lines of Code",
          icon: "code file"
        },
        {
          value: 1,
          label: "Contributor",
          icon: "users"
        },
        {
          value: "AGPL",
          label: "Licensed",
          icon: "unlock"
        }
      ]}
      trendingProjectsDivider={{
        label: "Trending Projects",
        icon: "bar chart"
      }}
      trendingProjects={{
        endpoint: "https://gitlab.com",
        groupName: "libresat",
        projectName: "libresat",
        projectID: 8000820
      }}
    />
  </Base>
);
