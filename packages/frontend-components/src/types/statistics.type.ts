import { SemanticICONS } from "semantic-ui-react";

interface IStatisticsProps {
  statistics: IStatisticsStatisticsProps[];
}

interface IStatisticsStatisticsProps {
  title: string;
  value: string;
  icon: SemanticICONS;
}

export { IStatisticsProps };
