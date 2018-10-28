import * as React from "react";
import { Grid, Statistic, Icon, GridProps } from "semantic-ui-react";
import { IStatisticsProps } from "../types";

const Statistics = ({ statistics, ...otherProps }: IStatisticsProps) => (
  <Grid
    stackable
    divided="vertically"
    columns={statistics.length as GridProps["columns"]}
    textAlign="center"
    {...otherProps}
  >
    {statistics.map(({ value, title, icon }, index) => (
      <Grid.Column key={index}>
        <Statistic>
          <Statistic.Value>{value}</Statistic.Value>
          <Statistic.Label>
            <Icon name={icon} /> {title}
          </Statistic.Label>
        </Statistic>
      </Grid.Column>
    ))}
  </Grid>
);

export { Statistics };
