import React, { Component } from "react";
import styled from "styled-components";
import { withPrefix } from "gatsby";
import {
  Button,
  Card,
  Grid,
  Header,
  Divider,
  Icon,
  Statistic,
  Image
} from "semantic-ui-react";

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

const SubsystemCardHeader = () => (
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

const SubsystemCardDescription = styled(Card.Description)`
  padding: 1em 0;
`;

const DividerIcon = styled(Icon)`
  padding-right: 1.75em;
`;

const OverviewDivider = styled(Divider)`
  margin-bottom: 2em !important;
`;

const SubsystemCardOverview = () => (
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

const ProjectList = styled.div`
  display: flex;
  align-items: center;
  overflow-x: auto;
  &::after {
    content: "";
    padding: 0.1em;
  }
`;

const ProjectDivider = styled(Divider)`
  margin-top: 2em !important;
`;

class ProjectsProvider extends Component {
  state = {
    loading: true,
    projects: []
  };

  componentDidMount = async () => {
    const response = await fetch(
      "https://gitlab.com/api/v4/projects/8000820/repository/tree?path=packages/"
    );
    const json = await response.json();
    this.setState({ projects: json, loading: false });
  };

  render = () =>
    this.props.children({
      ...this.props,
      ...this.state
    });
}

class ProjectProvider extends Component {
  state = {
    loading: true,
    project: {
      lastUpdateDate: {},
      description: ""
    }
  };

  componentDidMount = async () => {
    await this.getLastCommitDate({
      path: this.props.path
    });
    this.getDescription({
      path: this.props.path
    });
  };

  getLastCommitDate = async ({ path }) => {
    const response = await fetch(
      `https://gitlab.com/api/v4/projects/8000820/repository/commits?path=${path}`
    );
    const json = await response.json();
    this.setState({
      project: { lastUpdateDate: new Date(json[0].committed_date) }
    });
  };

  getDescription = async ({ path }) => {
    const response = await fetch(
      `https://gitlab.com/api/v4/projects/8000820/repository/tree/?path=${path}`
    );
    const json = await response.json();
    const packageJsonFile = json.filter(({ name }) => name === "package.json");
    const packageJsonBlobSHA = packageJsonFile[0].id;
    const packageJsonContentResponse = await fetch(
      `https://gitlab.com/api/v4/projects/8000820/repository/blobs/${packageJsonBlobSHA}/raw`
    );
    const { description } = await packageJsonContentResponse.json();
    this.setState({
      project: { description },
      loading: false
    });
  };

  render = () =>
    this.props.children({
      ...this.props,
      ...this.state
    });
}

const ProjectWrapper = styled(Card)`
  min-width: 18em;
  margin-top: 1em !important;
  margin-bottom: 1em !important;
  margin-left: 0.5em !important;
  margin-right: 0.5em !important;
  & > .content {
    min-width: 16em !important;
  }
`;

const Project = ({ link, name, lastUpdateDate, description }) => (
  <ProjectWrapper as="a" href={link} fluid>
    <Card.Content>
      <Card.Header>{name}</Card.Header>
      <Card.Meta>Last update: {lastUpdateDate}</Card.Meta>
      <Card.Description>{description}</Card.Description>
    </Card.Content>
  </ProjectWrapper>
);

export const SubsystemCard = () => (
  <Card fluid color="blue">
    <Image src={withPrefix("/img/software-card.png")} />
    <Card.Content>
      <SubsystemCardHeader />
      <SubsystemCardDescription>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, ullam
        similique? Maxime laborum blanditiis repellendus facere fuga alias rerum
        minima!
      </SubsystemCardDescription>
      <SubsystemCardOverview />
      {/* <SubsystemCardTrendingProjects /> */}
      <ProjectDivider horizontal>
        <DividerIcon name="bar chart" />
        Trending Projects
      </ProjectDivider>
      <ProjectList>
        <ProjectsProvider endpoint="https://gitlab.com/projects/8000820">
          {({ loading, projects, url }) =>
            loading ? (
              <span>Loading ...</span>
            ) : (
              projects.map(({ name, path }, index) => (
                <ProjectProvider path={path} key={index}>
                  {({ loading, project: { lastUpdateDate, description } }) =>
                    loading ? (
                      <span>Loading ...</span>
                    ) : (
                      <Project
                        name={name}
                        lastUpdateDate={lastUpdateDate}
                        description={description}
                        link={`https://gitlab.com/libresat/libresat/tree/master/${path}`}
                      />
                    )
                  }
                </ProjectProvider>
              ))
            )
          }
        </ProjectsProvider>
      </ProjectList>
    </Card.Content>
  </Card>
);
