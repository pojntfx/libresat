import {
  SemanticCOLORS,
  SemanticICONS
} from "semantic-ui-react/dist/commonjs/generic";
import { IDividerProps } from "./divider.type";
import { IStatisticsProps } from "./statistics.type";
import { IProjectListProps } from "./projectList.type";

interface ISubsystemProps {
  image: string;
  header: ISubsystemHeaderProps;
  overviewDivider: IDividerProps;
  trendingProjectsDivider: IDividerProps;
  statistics: IStatisticsProps["statistics"];
  text: string;
  color: SemanticCOLORS;
  imgAlt: string;
  trendingProjects: IProjectListProps;
}

interface ISubsystemHeaderProps {
  title: string;
  subtitle: string;
  icon: SemanticICONS;
  docsLink: string;
  docsDisabled?: boolean;
  repoLink: string;
  repoDisabled?: boolean;
  forumLink: string;
  forumDisabled?: boolean;
  color: SemanticCOLORS;
  linkComponent: JSX.Element;
}

export { ISubsystemHeaderProps, ISubsystemProps };
