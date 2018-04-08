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
`;

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Routes />
  </ThemeProvider>,
  document.getElementById("osnet-bc")
);
registerServiceWorker();
