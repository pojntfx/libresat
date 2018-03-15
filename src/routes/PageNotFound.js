import React, { Component } from "react";

// Router
import { Link } from "react-router-dom";

export default class PageNotFound extends Component {
  render() {
    return (
      <div>
        This page does not exist (anymore?).
        <br />
        <Link to="/">Home</Link>
      </div>
    );
  }
}
