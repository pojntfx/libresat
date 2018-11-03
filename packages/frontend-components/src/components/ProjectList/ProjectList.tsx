import * as React from "react";
import { ProjectListWrapper } from "./ProjectListWrapper";
import { ProjectListProvider } from "./ProjectListProvider";
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
          : projects.map(({ path, ...otherProps }, index) => (
              <Project
                {...otherProps}
                link={`${endpoint}/${groupName}/${projectName}/tree/master/${path}`}
                key={index}
              />
            ))
      }
    </ProjectListProvider>
  </ProjectListWrapper>
);
