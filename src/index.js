import React from "react";
import ReactDOM from "react-dom";
import registerServiceWorker from "./registerServiceWorker";

// Normalize
import "./assets/normalize.css";

// Styled components
import { ThemeProvider, injectGlobal } from "styled-components";

// Routes
import { Routes } from "./routes/Routes";

// Style constants
import * as theme from "./lib/constants";

// Global styles
injectGlobal`
body {
  font-family: Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", Oxygen-Sans,
    Cantarell, Ubuntu, "Helvetica Neue", sans-serif;
}

// Make links consistent with the rest of the interactive elements
a {
  color: ${theme.colors2.blue};
  padding: ${theme.paddings.links};
  border-radius: ${theme.radiuses.links};
  transition: background
      ${theme.transitions.defaultDuration},
    box-shadow
    ${theme.transitions.defaultDuration};
  text-decoration: none;
  white-space: nowrap;
  -webkit-tap-highlight-color: transparent;
  cursor: pointer;
  &:active,
  &:focus {
    color: ${theme.colors2.blue}!important;
    background: ${theme.colors2.darkgrey} !important;
    box-shadow: ${theme.shadows.defaultInset};
  }
  &:not(:hover) {
    &:active,
    &:focus {
      color: ${theme.colors2.blue}!important;
      background: ${theme.colors2.transparent} !important;
      box-shadow: ${theme.shadows.defaultInset};
    }
  }
  &:hover {
    color: ${theme.colors2.blue};
    background: ${theme.colors2.lightgrey};
  }
}
`;

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Routes />
  </ThemeProvider>,
  document.getElementById("osnet-bc")
);
registerServiceWorker();
