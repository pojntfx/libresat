import React from "react";
import { Grid, Statistic, Icon } from "semantic-ui-react";

export const Overview = ({ statistics, ...otherProps }) => (
  <Grid
    stackable
    divided="vertically"
    columns={statistics.length}
    textAlign="center"
    {...otherProps}
  >
    {statistics.map(({ value, label, icon }, index) => (
      <Grid.Column key={index}>
        <Statistic>
          <Statistic.Value>{value}</Statistic.Value>
          <Statistic.Label>
            <Icon name={icon} /> {label}
          </Statistic.Label>
        </Statistic>
      </Grid.Column>
    ))}
  </Grid>
);
