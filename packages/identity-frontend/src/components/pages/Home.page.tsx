import * as React from "react";
import { DefaultLayout } from "../layouts";
import { navbarData, footerData, homeData } from "../../data";
import { IFooterProps, IHomePage, INavbarProps } from "../../types";
import { ActionBar } from "../global";

const HomePage = (props: IHomePage) => (
  <DefaultLayout
    navbar={navbarData as INavbarProps}
    footer={footerData as IFooterProps}
    {...props}
  >
    <ActionBar
      create={{
        onCreate: () => console.log("Creating model ..."),
        ...homeData.create
      }}
      search={{
        onSearch: () => console.log("Filtering models ..."),
        ...homeData.search
      }}
    />
  </DefaultLayout>
);

export { HomePage };
