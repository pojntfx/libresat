import React from "react";
import { withPrefix } from "gatsby";
import { Card, Image } from "semantic-ui-react";
import { ProjectDivider, DividerIcon } from "./Dividers";
import { ProjectList } from "./Projects/ProjectList";
import { ProjectsProvider } from "./Projects/ProjectsProvider";
import { ProjectProvider } from "./Projects/ProjectProvider";
import { Project } from "./Projects/Project";
import { Overview } from "./Overview";
import { Description } from "./Description";
import { Header } from "./Header";
import { Loader } from "../Loader";

export const SubsystemCard = () => (
  <Card fluid color="blue">
    <Image src={withPrefix("/img/software-card.png")} />
    <Card.Content>
      <Header
        title="Software"
        subtitle="Liberate your Spacecraft"
        icon="code"
        docsLink={withPrefix("/docs")}
        repoLink="https://gitlab.com/libresat/libresat"
        forumLink="https://forum.libresat.space/forum"
      />
      <Description>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, ullam
        similique? Maxime laborum blanditiis repellendus facere fuga alias rerum
        minima!
      </Description>
      <Overview
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
            icon: "unlocked"
          }
        ]}
      />
      <ProjectDivider horizontal>
        <DividerIcon name="bar chart" />
        Trending Projects
      </ProjectDivider>
      <ProjectList>
        <ProjectsProvider endpoint="https://gitlab.com/projects/8000820">
          {({ loading, projects, url }) =>
            loading ? (
              <Loader />
            ) : (
              projects.map(({ name, path }, index) => (
                <ProjectProvider path={path} key={index}>
                  {({ loading, lastUpdateDate, description }) =>
                    loading ? (
                      <Loader small />
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
