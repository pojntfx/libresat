import React from "react";
import ReactDOM from "react-dom";
import registerServiceWorker from "./registerServiceWorker";

// Normalize
import "./assets/normalize.css";

// Routes
import Routes from "./routes/Routes";

ReactDOM.render(<Routes />, document.getElementById("osnet-bc"));
registerServiceWorker();
