import * as React from "react";
import { navbarData, footerData, appsData } from "../../data";
import {
  AppMenu,
  INavbarProps,
  IFooterProps,
  IAppMenuProps,
  DefaultLayout
} from "@libresat/frontend-components";
import { IPage } from "../../types";
import { NavLink } from "react-router-dom";
import bg from "../../assets/bg.jpg";

const AppsPage = (props: IPage) => (
  <DefaultLayout
    navbar={navbarData as INavbarProps}
    footer={footerData as IFooterProps}
    bg={bg}
    linkComponent={(NavLink as unknown) as JSX.Element}
    {...props}
  >
    <AppMenu
      apps={appsData.appMenu.apps as IAppMenuProps["apps"]}
      search={{
        onSearch: () => console.log("Searching for app ..."),
        ...appsData.appMenu.search
      }}
      linkComponent={(to, children) => <NavLink to={to}>{children}</NavLink>}
    />
  </DefaultLayout>
);

export { AppsPage };
