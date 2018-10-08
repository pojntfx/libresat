import * as React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { HomeRoute } from "./Home.route";
import { IRoutesRouteProps } from "../../types";

const RoutesRoute = (props: IRoutesRouteProps) => (
  <BrowserRouter {...props}>
    <Route path="/" render={() => <HomeRoute />} />
  </BrowserRouter>
);

export { RoutesRoute };
