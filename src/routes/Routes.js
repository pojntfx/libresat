import React from "react";

// Router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Routes
import { Start } from "./Start";
import { PageNotFound } from "./PageNotFound";

export const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Start} />
        <Route path="" component={PageNotFound} />
      </Switch>
    </Router>
  );
};
