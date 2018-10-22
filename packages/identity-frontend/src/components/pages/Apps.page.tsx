import * as React from "react";
import { DefaultLayout } from "../layouts";
import { navbarData, footerData, appsData } from "../../data";
import {
  AppMenu,
  INavbarProps,
  IFooterProps,
  IAppMenuProps
} from "@libresat/frontend-components";
import { IPage } from "../../types";

const AppsPage = (props: IPage) => (
  <DefaultLayout
    navbar={navbarData as INavbarProps}
    footer={footerData as IFooterProps}
    {...props}
  >
    <AppMenu
      apps={appsData.appMenu.apps as IAppMenuProps["apps"]}
      search={{
        onSearch: () => console.log("Searching for app ..."),
        ...appsData.appMenu.search
      }}
    />
  </DefaultLayout>
);

export { AppsPage };
