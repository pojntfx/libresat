import * as React from "react";
import {
  navbarData,
  footerData,
  homeData,
  shortcutsData,
  noscriptData
} from "../../data";
import { ActionBar } from "@libresat/frontend-components";
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
  </Shell>
);

export { HomePage };
