import React from "react";
import { Base } from "../layouts/Base";
import styled from "styled-components";
import {
  Button,
  Modal,
  Card,
  Grid,
  Header,
  Divider,
  Icon,
  Statistic
} from "semantic-ui-react";
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

const CardAction = styled(Button)`
  white-space: nowrap;
`;

const CardActions = styled(Grid.Column).attrs({
  width: 10
})`
  display: flex !important;
  overflow-x: auto;
  & > ${CardAction}:first-child {
    margin-left: auto;
    @media (max-width: 767px) {
      margin-left: auto;
    }
  }
  & > ${CardAction}:last-child {
    @media (max-width: 767px) {
      margin-right: auto;
    }
  }
`;

const SoftwareCardHeader = () => (
  <Grid stackable colums={2}>
    <Grid.Column width={6}>
      <Header
        content="Software"
        subheader="Liberate your Spacecraft"
        icon="code"
      />
    </Grid.Column>
    <CardActions>
      <CardAction color="blue" content="Read the docs" icon="book" />
      <CardAction content="Contribute" icon="fork" />
      <CardAction content="Discuss" icon="conversation" />
    </CardActions>
  </Grid>
);

const SoftwareCardDescription = styled(Card.Description)`
  padding: 1em 0;
`;

const SoftwareCardOverviewIcon = styled(Icon)`
  padding-right: 1.75em;
`;

const SoftwareCardOverview = () => (
  <>
    <Divider horizontal>
      <SoftwareCardOverviewIcon name="compass" />
      Overview
    </Divider>
    <Grid stackable divided="vertically" columns={3} textAlign="center">
      <Grid.Column>
        <Statistic>
          <Statistic.Value>10024</Statistic.Value>
          <Statistic.Label>
            <Icon name="file code" /> Lines of Code
          </Statistic.Label>
        </Statistic>
      </Grid.Column>
      <Grid.Column>
        <Statistic>
          <Statistic.Value>1</Statistic.Value>
          <Statistic.Label>
            <Icon name="users" /> Contributor
          </Statistic.Label>
        </Statistic>
      </Grid.Column>
      <Grid.Column>
        <Statistic>
          <Statistic.Value>AGPL</Statistic.Value>
          <Statistic.Label>
            <Icon name="lock open" /> Licensed
          </Statistic.Label>
        </Statistic>
      </Grid.Column>
    </Grid>
  </>
);

const SoftwareCard = () => (
  <Card fluid color="blue">
    <Card.Content>
      <SoftwareCardHeader />
      <SoftwareCardDescription>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, ullam
        similique? Maxime laborum blanditiis repellendus facere fuga alias rerum
        minima!
      </SoftwareCardDescription>
      <SoftwareCardOverview />
    </Card.Content>
  </Card>
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
    <SoftwareCard />
  </Base>
);
