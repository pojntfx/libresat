import * as React from "react";
import { ProjectListWrapper } from "./ProjectListWrapper";
import { ProjectListProvider } from "./ProjectListProvider";
import { ProjectProvider } from "./ProjectProvider";
import { Project } from "./Project";
import { IProjectListProps } from "../../types";
import { ProjectPlaceholder } from "./ProjectPlaceholder";

export const ProjectList = ({
  endpoint,
  groupName,
  projectName,
  projectID
}: IProjectListProps) => (
  <ProjectListWrapper>
    <ProjectListProvider endpoint={endpoint} projectID={projectID}>
      {({ loading, projects }) =>
        loading
          ? new Array(5)
              .fill(0)
              .map((_, index) => <ProjectPlaceholder key={index} />)
          : projects.map(({ title, path }, index) => (
              <ProjectProvider
                endpoint={endpoint}
                projectID={projectID}
                path={path}
                key={index}
              >
                {({ loading, lastUpdateDate, text }) =>
                  loading ? (
                    <ProjectPlaceholder />
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
      }
    </ProjectListProvider>
  </ProjectListWrapper>
);
