import React from "react";
import { Grid, Statistic, Icon } from "semantic-ui-react";
import { OverviewDivider, DividerIcon } from "./Dividers";

export const Overview = ({ statistics, ...otherProps }) => (
  <>
    <OverviewDivider horizontal>
      <DividerIcon name="compass" />
      Overview
    </OverviewDivider>
    <Grid
      stackable
      divided="vertically"
      columns={3}
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
  </>
);
