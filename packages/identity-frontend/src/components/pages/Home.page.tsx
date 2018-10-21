import * as React from "react";
import { DefaultLayout } from "../layouts";
import { navbarData, footerData, homeData } from "../../data";
import { IFooterProps, IHomePage, INavbarProps } from "../../types";
import { ActionBar } from "../global";
import { AppMenu, IAppMenuProps } from "../global/AppMenu/AppMenu";

const HomePage = (props: IHomePage) => (
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
    <AppMenu
      apps={homeData.appMenu.apps as IAppMenuProps["apps"]}
      search={{
        onSearch: () => console.log("Searching for app ..."),
        ...homeData.appMenu.search
      }}
    />
  </DefaultLayout>
);

export { HomePage };
