import * as React from "react";
import { ProjectListWrapper } from "./ProjectListWrapper";
import { ProjectListProvider } from "./ProjectListProvider";
import { Loader } from "../Loader";
import { ProjectProvider } from "./ProjectProvider";
import { Project } from "./Project";
import { IProjectListProps } from "../../types";

export const ProjectList = ({
  endpoint,
  groupName,
  projectName,
  projectID
}: IProjectListProps) => (
  <ProjectListWrapper>
    <ProjectListProvider endpoint={endpoint} projectID={projectID}>
      {({ loading, projects }) =>
        loading ? (
          <Loader />
        ) : (
          projects.map(({ title, path }, index) => (
            <ProjectProvider
              endpoint={endpoint}
              projectID={projectID}
              path={path}
              key={index}
            >
              {({ loading, lastUpdateDate, text }) =>
                loading ? (
                  <Loader small />
                ) : (
                  <Project
                    title={title}
                    text={text}
                    lastUpdateDate={lastUpdateDate}
                    link={`${endpoint}/${groupName}/${projectName}/tree/master/${path}`}
                  />
                )
              }
            </ProjectProvider>
          ))
        )
      }
    </ProjectListProvider>
  </ProjectListWrapper>
);
