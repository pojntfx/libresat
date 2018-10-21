import * as React from "react";
import { DefaultLayout } from "../layouts";
import { navbarData, footerData, appsData } from "../../data";
import { IFooterProps, IHomePage, INavbarProps } from "../../types";
import { AppMenu, IAppMenuProps } from "../global/AppMenu/AppMenu";

const AppsPage = (props: IHomePage) => (
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
