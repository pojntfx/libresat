import * as React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { HomeRoute } from "./Home.route";

interface IRoutesRouteProps {
  props?: any;
}

const RoutesRoute = (props: IRoutesRouteProps) => (
  <BrowserRouter {...props}>
    <Route path="/" render={() => <HomeRoute />} />
  </BrowserRouter>
);

export { RoutesRoute };
