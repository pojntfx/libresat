import * as React from "react";
import { DefaultLayout } from "../layouts";
import { navbarData, footerData } from "../../data";
import { IFooterProps, IHomePage, INavbarProps } from "../../types";
import { ActionBar, Button } from "../global";

const HomePage = (props: IHomePage) => (
  <DefaultLayout
    navbar={navbarData as INavbarProps}
    footer={footerData as IFooterProps}
    {...props}
  >
    <ActionBar
      create={{
        icon: "add",
        title: "Create",
        onCreate: () => console.log("Creating model ..."),
        help: {
          title: "Create a Model",
          text: "Add a new model to the database.",
          command: "$ satctl apply -f <path>",
          docsLink: "https://libresat.space/docs/create"
        }
      }}
      search={{
        icon: "search",
        text: "Search",
        onSearch: () => console.log("Filtering models ..."),
        value: "",
        help: {
          title: "Search for a Model",
          text: "Filter all models by a query.",
          command: "$ satctl get models | grep <query>",
          docsLink: "https://libresat.space/docs/search"
        }
      }}
    />
  </DefaultLayout>
);

export { HomePage };
