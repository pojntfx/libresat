import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Routes
import { Start } from "./Start";
import { Login } from "./Login";
import { Welcome } from "./Welcome";
import { Docs } from "./Docs";
import { PageNotFound } from "./PageNotFound";

export const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Start} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/welcome" component={Welcome} />
        <Route exact path="/docs" component={Docs} />
        <Route path="" component={PageNotFound} />
      </Switch>
    </Router>
  );
};
