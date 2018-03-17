import React from "react";
import ReactDOM from "react-dom";
import registerServiceWorker from "./registerServiceWorker";

// Normalize and global css
import "./assets/normalize.css";
import "./assets/global.css";

// Routes
import { Routes } from "./routes/Routes";

ReactDOM.render(<Routes />, document.getElementById("osnet-bc"));
registerServiceWorker();
