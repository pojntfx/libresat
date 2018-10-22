import React from "react";
import styled from "react-emotion";
import { Link } from "../Link";
import { Modal, Button } from "semantic-ui-react";

const Wrapper = styled("div")`
  padding-top: 10em;
  padding-bottom: 10em;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: center;
  color: white;
`;

const SubHeader = styled("h5")`
  margin-top: 0;
`;

const Actions = styled("div")`
  margin-top: 0.5em;
`;

const Video = styled("video")`
  width: 100%;
`;

const VideoModal = ({ icon, label, header, src, disabled, ...otherProps }) => (
  <Modal
    trigger={
      <Button secondary icon={icon} content={label} disabled={disabled} />
    }
    closeIcon
    {...otherProps}
  >
    <Modal.Header>{header}</Modal.Header>
    <Modal.Content>
      <Video controls src={src} />
    </Modal.Content>
  </Modal>
);

export const Hero = ({ title, subtitle, primaryAction, secondaryAction }) => (
  <Wrapper>
    <h1>{title}</h1>
    <SubHeader>{subtitle}</SubHeader>
    <Actions>
      <Button
        primary
        content={primaryAction.label}
        icon={primaryAction.icon}
        as={Link}
        to={primaryAction.link}
        disabled={primaryAction.disabled}
      />
      <VideoModal
        label={secondaryAction.label}
        icon={secondaryAction.icon}
        header={secondaryAction.header}
        src={secondaryAction.videoSrc}
        disabled={secondaryAction.disabled}
      />
    </Actions>
  </Wrapper>
);
