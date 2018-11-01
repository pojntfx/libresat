import * as React from "react";
import { navbarData, footerData, homeData } from "../../data";
import {
  ActionBar,
  INavbarProps,
  IFooterProps,
  DefaultLayout
} from "@libresat/frontend-components";
import { IPage } from "../../types";
import { NavLink } from "react-router-dom";
import bg from "../../assets/bg.jpg";

const HomePage = (props: IPage) => (
  <DefaultLayout
    navbar={navbarData as INavbarProps}
    footer={footerData as IFooterProps}
    bg={bg}
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
  </DefaultLayout>
);

export { HomePage };
