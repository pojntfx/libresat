import React from "react";
import { Base } from "../layouts/Base";
import styled from "styled-components";
import { Button, Modal } from "semantic-ui-react";
import Link from "gatsby-link";
import { withPrefix } from "gatsby";

const HeroWrapper = styled.div`
  padding-top: 10em;
  padding-bottom: 10em;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: center;
  color: white;
`;

const HeroSubHeader = styled.h5`
  margin-top: 0;
`;

const HeroActions = styled.div`
  margin-top: 0.5em;
`;

const VideoModalVideo = styled.video`
  width: 100%;
`;

const VideoModal = ({ icon, label, header, src, ...otherProps }) => (
  <Modal
    trigger={<Button secondary icon={icon} content={label} />}
    closeIcon
    {...otherProps}
  >
    <Modal.Header>{header}</Modal.Header>
    <Modal.Content>
      <VideoModalVideo controls src={src} />
    </Modal.Content>
  </Modal>
);

const Hero = ({ title, subtitle, primaryAction, secondaryAction }) => (
  <HeroWrapper>
    <h1>{title}</h1>
    <HeroSubHeader>{subtitle}</HeroSubHeader>
    <HeroActions>
      <Button
        primary
        content={primaryAction.label}
        icon={primaryAction.icon}
        as={Link}
        to={primaryAction.link}
      />
      <VideoModal
        label={secondaryAction.label}
        icon={secondaryAction.icon}
        header={secondaryAction.header}
        src={secondaryAction.videoSrc}
      />
    </HeroActions>
  </HeroWrapper>
);

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
  </Base>
);
