import React from "react";
import { Base } from "../layouts/Base";
import { Hero } from "../components/Home/Hero";
import { SubsystemCard } from "../components/Home/SubsystemCard";
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
    <SubsystemCard />
  </Base>
);
