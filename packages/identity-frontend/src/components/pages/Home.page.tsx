import * as React from "react";
import { navbarData, footerData, homeData } from "../../data";
import {
  ActionBar,
  INavbarProps,
  IFooterProps,
  DefaultLayout,
  ShortcutModal
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
    <ShortcutModal
      triggerKey="?"
      title="Keyboard Shortcuts"
      shortcuts={[
        {
          title: "Global",
          shortcuts: [
            {
              title: "Toggle shortcut dialog",
              keys: ["SHIFT", "?"]
            },
            {
              title: "Focus search",
              keys: ["/"]
            }
          ]
        },
        {
          title: "Navigation",
          shortcuts: [
            {
              title: "Go to Workspace",
              keys: ["g", "w", "s"]
            },
            {
              title: "Go to Workflow",
              keys: ["g", "w", "f"]
            },
            {
              title: "Go to Infrastructure",
              keys: ["g", "i"]
            },
            {
              title: "Go to Activity",
              keys: ["g", "a"]
            },
            {
              title: "Go to Config",
              keys: ["g", "c"]
            }
          ]
        },
        {
          title: "Session",
          shortcuts: [
            {
              title: "Logout",
              keys: ["l", "o"]
            },
            {
              title: "Switch user",
              keys: ["s", "u"]
            }
          ]
        }
      ]}
    />
  </DefaultLayout>
);

export { HomePage };
