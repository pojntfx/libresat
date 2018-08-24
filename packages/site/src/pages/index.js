import React, { Component } from "react";
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
  Statistic,
  Image
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

const DividerIcon = styled(Icon)`
  padding-right: 1.75em;
`;

const OverviewDivider = styled(Divider)`
  margin-bottom: 2em !important;
`;

const SoftwareCardOverview = () => (
  <>
    <OverviewDivider horizontal>
      <DividerIcon name="compass" />
      Overview
    </OverviewDivider>
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

const TrendingProjectsList = styled.div`
  display: flex;
  align-items: center;
  overflow-x: auto;
  &::after {
    content: "";
    padding: 0.1em;
  }
`;

const TrendingProjectWrapper = styled(Card)`
  min-width: 18em;
  margin-top: 1em !important;
  margin-bottom: 1em !important;
  margin-left: 0.5em !important;
  margin-right: 0.5em !important;
  & > .content {
    min-width: 16em !important;
  }
`;

const TrendingProject = ({ link, title, lastUpdate, description }) => (
  <TrendingProjectWrapper as="a" href={link} fluid>
    <Card.Content>
      <Card.Header>{title}</Card.Header>
      <Card.Meta>Last update: {lastUpdate}</Card.Meta>
      <Card.Description>{description}</Card.Description>
    </Card.Content>
  </TrendingProjectWrapper>
);

class TrendingProjectProvider extends Component {
  constructor() {
    super();
    this.state = { lastCommitDate: {}, description: "" };
  }

  componentDidMount = async () => {
    this.getLastCommitDate();
    this.getDescription();
  };

  getLastCommitDate = async () => {
    const response = await fetch(
      `https://gitlab.com/api/v4/projects/8000820/repository/commits?path=${
        this.props.link.split("/master/")[1]
      }`
    );
    const json = await response.json();
    this.setState({ lastCommitDate: new Date(json[0].committed_date) });
  };

  getDescription = async () => {
    const response = await fetch(
      `https://gitlab.com/api/v4/projects/8000820/repository/tree/?path=${
        this.props.link.split("/master/")[1]
      }`
    );
    const json = await response.json();
    const packageJsonFile = json.filter(({ name }) => name === "package.json");
    const packageJsonBlobSHA = packageJsonFile[0].id;
    const packageJsonContentResponse = await fetch(
      `https://gitlab.com/api/v4/projects/8000820/repository/blobs/${packageJsonBlobSHA}/raw`
    );
    const { description } = await packageJsonContentResponse.json();
    this.setState({
      description
    });
  };

  render() {
    return (
      <TrendingProject
        link={this.props.link}
        title={this.props.title}
        lastUpdate={this.state.lastCommitDate.toLocaleString()}
        description={this.state.description}
      />
    );
  }
}

const TrendingProjectsDivider = styled(Divider)`
  margin-top: 2em !important;
`;

class SoftwareCardTrendingProjects extends Component {
  constructor() {
    super();
    this.state = { projects: [] };
  }

  componentDidMount = async () => {
    const response = await fetch(
      "https://gitlab.com/api/v4/projects/8000820/repository/tree?path=packages/"
    );
    const json = await response.json();
    this.setState({ projects: json });
  };

  render() {
    return (
      <>
        <TrendingProjectsDivider horizontal>
          <DividerIcon name="bar chart" />
          Trending Projects
        </TrendingProjectsDivider>
        <TrendingProjectsList>
          {this.state.projects.map(({ name, path }, index) => (
            <TrendingProjectProvider
              link={`https://gitlab.com/libresat/libresat/tree/master/${path}`}
              title={name}
              description="The central hub for all things LibreSat."
              key={index}
            />
          ))}
        </TrendingProjectsList>
      </>
    );
  }
}

const SoftwareCard = () => (
  <Card fluid color="blue">
    <Image src={withPrefix("/img/software-card.png")} />
    <Card.Content>
      <SoftwareCardHeader />
      <SoftwareCardDescription>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, ullam
        similique? Maxime laborum blanditiis repellendus facere fuga alias rerum
        minima!
      </SoftwareCardDescription>
      <SoftwareCardOverview />
      <SoftwareCardTrendingProjects />
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
