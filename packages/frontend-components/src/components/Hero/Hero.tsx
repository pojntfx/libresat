import * as React from "react";
import { IHeroProps } from "../../types";
import { HeroWrapper } from "./HeroWrapper";
import { HeroSubHeader } from "./HeroSubHeader";
import { HeroActions } from "./HeroActions";
import { VideoModal } from "../VideoModal/VideoModal";
import { Button } from "../Button";
import { SemanticICONS } from "semantic-ui-react";

const Hero = ({
  title,
  subtitle,
  primaryAction,
  secondaryAction,
  linkComponent
}: IHeroProps) => (
  <HeroWrapper>
    <h1>{title}</h1>
    <HeroSubHeader>{subtitle}</HeroSubHeader>
    <HeroActions>
      <Button
        primary
        content={primaryAction.title}
        icon={primaryAction.icon}
        as={linkComponent}
        to={primaryAction.link}
        disabled={primaryAction.disabled}
      />
      <VideoModal
        title={secondaryAction.title}
        header={secondaryAction.header}
        icon={secondaryAction.icon as SemanticICONS}
        video={secondaryAction.video}
        disabled={secondaryAction.disabled}
      />
    </HeroActions>
  </HeroWrapper>
);

export { Hero };
