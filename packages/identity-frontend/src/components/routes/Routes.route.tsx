import * as React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { HomeRoute } from "./Home.route";
import { AppsRoute } from "./Apps.route";
import { AboutRoute } from "./About.route";
import { IRoutesRouteProps } from "../../types";
import { ShortcutModal } from "@libresat/frontend-components";

const RoutesRoute = (props: IRoutesRouteProps) => (
  <BrowserRouter {...props}>
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
    >
      <Switch>
        <Route path="/" exact render={() => <HomeRoute />} />
        <Route path="/identity" render={() => <Redirect to="/" />} />
        <Route path="/apps" render={() => <AppsRoute />} />
        <Route path="/about" render={() => <AboutRoute />} />
        {/* <Route path="/context" render={() => <HomeRoute />} />
      <Route path="/settings" render={() => <HomeRoute />} />
      <Route path="/search" render={() => <HomeRoute />} />
      <Route path="/notifications" render={() => <HomeRoute />} />
      <Route path="/users" render={() => <HomeRoute />} /> */}
      </Switch>
    </ShortcutModal>
  </BrowserRouter>
);

export { RoutesRoute };
