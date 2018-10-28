import * as React from "react";
import { IVideoModalProps } from "../../types";
import { Modal } from "semantic-ui-react";
import { Button } from "../Button";
import { VideoModalVideo } from "./VideoModalVideo";

const VideoModal = ({
  title,
  header,
  icon,
  video,
  disabled,
  ...otherProps
}: IVideoModalProps) => (
  <Modal
    trigger={
      <Button secondary icon={icon} content={title} disabled={disabled} />
    }
    closeIcon
    disabled={disabled}
    {...otherProps}
  >
    <Modal.Header>{header}</Modal.Header>
    <Modal.Content>
      <VideoModalVideo controls src={video} />
    </Modal.Content>
  </Modal>
);

export { VideoModal };
