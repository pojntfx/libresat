import React, { Component } from "react";

// Router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Routes
import Start from "./Start";
import PageNotFound from "./PageNotFound";

export default class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={Start} />
          <Route path="" component={PageNotFound} />
        </Switch>
      </Router>
    );
  }
}
