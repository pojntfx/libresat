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
          title: "Create a Model",
          text: "Add a new model to the database.",
          command: "$ satctl apply -f <path>",
          docsLink: "https://libresat.space/docs/create"
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
