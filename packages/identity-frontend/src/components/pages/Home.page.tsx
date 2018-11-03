import * as React from "react";
import {
  navbarData,
  footerData,
  homeData,
  shortcutsData,
  noscriptData
} from "../../data";
import {
  ActionBar,
  ExpandablePaperWithDraggableGridLayout,
  Paper,
  ExpandablePaper
} from "@libresat/frontend-components";
import { IPage } from "../../types";
import { NavLink } from "react-router-dom";
import { Shell, IShellProps } from "@libresat/frontend-components";

const HomePage = (props: IPage) => (
  <Shell
    head={homeData.head}
    navbar={navbarData as IShellProps["navbar"]}
    footer={footerData as IShellProps["footer"]}
    noScript={noscriptData}
    shortcuts={shortcutsData}
    background={homeData.background}
    linkComponent={(NavLink as unknown) as JSX.Element}
    {...props}
  >
    <ActionBar
      create={{
        onCreate: () => console.log("Creating model ..."),
        ...homeData.actionBar.create
      }}
      search={{
        onSearch: () => console.log("Filtering models ..."),
        ...homeData.actionBar.search
      }}
    />
    <ExpandablePaperWithDraggableGridLayout {...homeData.overview}>
      <Paper data-grid={{ x: 0, y: 0, w: 7, h: 3 }}>
        <p>3 Scopes</p>
      </Paper>
      <Paper data-grid={{ x: 8, y: 0, w: 3, h: 3 }}>
        <p>2 Users</p>
      </Paper>
      <Paper data-grid={{ x: 0, y: 4, w: 12, h: 3 }}>
        <p>2 Roles</p>
      </Paper>
    </ExpandablePaperWithDraggableGridLayout>
    <ExpandablePaper {...homeData.relationships}>
      <Paper>
        <p>scope-1 -> user-1 -> role-1</p>
      </Paper>
      <Paper>
        <p>scope-2 -> user-2 -> role-2</p>
      </Paper>
      <Paper>
        <p>scope-3 -> user-3 -> role-3</p>
      </Paper>
    </ExpandablePaper>
  </Shell>
);

export { HomePage };
