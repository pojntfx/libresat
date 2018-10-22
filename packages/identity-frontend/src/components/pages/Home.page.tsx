import * as React from "react";
import { DefaultLayout } from "../layouts";
import { navbarData, footerData, homeData } from "../../data";
import {
  ActionBar,
  INavbarProps,
  IFooterProps
} from "@libresat/frontend-components";
import { IPage } from "../../types";

const HomePage = (props: IPage) => (
  <DefaultLayout
    navbar={navbarData as INavbarProps}
    footer={footerData as IFooterProps}
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
  </DefaultLayout>
);

export { HomePage };
