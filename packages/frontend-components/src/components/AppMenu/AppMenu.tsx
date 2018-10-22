import * as React from "react";
import { Grid } from "semantic-ui-react";
import { AppMenuButton } from "./AppMenuButton";
import { AppMenuSearchInput } from "./AppMenuSearchInput";
import { Help } from "../Help/Help";
import { IAppMenuProps } from "../../types";

const AppMenu = ({
  search,
  apps,
  linkComponent,
  ...otherProps
}: IAppMenuProps) => (
  <>
    <Help {...search.help}>
      <AppMenuSearchInput
        action={{
          icon: search.icon,
          onClick: search.onSearch,
          disabled: search.disabled
        }}
        placeholder={search.text}
        onChange={search.onSearch}
        value={search.value}
        disabled={search.disabled}
        fluid
      />
    </Help>
    <Grid columns={5} doubling stackable {...otherProps}>
      <Grid.Row>
        {apps.map((app, index) => (
          <Grid.Column key={index}>
            <AppMenuButton linkComponent={linkComponent} {...app} />
          </Grid.Column>
        ))}
      </Grid.Row>
    </Grid>
  </>
);

export { AppMenu };
