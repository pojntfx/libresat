import React from "react";
import { ProjectProvider } from "./Projects/ProjectProvider";
import { ProjectsProvider } from "./Projects/ProjectsProvider";
import { ProjectList } from "./Projects/ProjectList";
import { Project } from "./Projects/Project";
import { Loader } from "../Loader";

export const TrendingProjects = ({
  endpoint,
  groupName,
  projectName,
  projectID
}) => (
  <ProjectList>
    <ProjectsProvider endpoint={endpoint} projectID={projectID}>
      {({ loading, projects, url }) =>
        loading ? (
          <Loader />
        ) : (
          projects.map(({ name, path }, index) => (
            <ProjectProvider
              endpoint={endpoint}
              projectID={projectID}
              path={path}
              key={index}
            >
              {({ loading, lastUpdateDate, description }) =>
                loading ? (
                  <Loader small />
                ) : (
                  <Project
                    name={name}
                    lastUpdateDate={lastUpdateDate}
                    description={description}
                    link={`${endpoint}/${groupName}/${projectName}/tree/master/${path}`}
                  />
                )
              }
            </ProjectProvider>
          ))
        )
      }
    </ProjectsProvider>
  </ProjectList>
);
