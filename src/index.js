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
  color: ${theme.colors.blue};
  padding: 0 ${theme.paddings.link};
  border-radius: ${theme.radiuses.default};
  transition: ${"background " +
    theme.transitions.defaultDuration +
    ", box-shadow " +
    theme.transitions.defaultDuration};
  text-decoration: none;
  outline: 0;
&:focus,
  &:active {
    background: ${theme.colors.darkgrey}!important;
    box-shadow: ${theme.shadows.defaultInset};
  }
  &:not(:hover) {
    &:focus,
    &:active {
      background: transparent!important;
    }
  }
  &:hover {
    background: ${theme.colors.lightgrey};
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
