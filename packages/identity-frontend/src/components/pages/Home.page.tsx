import * as React from "react";
import { DefaultLayout } from "../layouts";
import { navbarData, footerData } from "../../data";
import { IFooterProps, IHomePage, INavbarProps } from "../../types";
import { ModelModifierBar, Button } from "../global";

const HomePage = (props: IHomePage) => (
  <DefaultLayout
    navbar={navbarData as INavbarProps}
    footer={footerData as IFooterProps}
    {...props}
  >
    <ModelModifierBar
      create={{
        icon: "add",
        title: "Create",
        onCreate: () => console.log("Creating model ..."),
        popover: {
          title: "Create Model",
          text: "Create a model."
        }
      }}
      search={{
        icon: "search",
        text: "Search"
      }}
    />
  </DefaultLayout>
);

export { HomePage };
