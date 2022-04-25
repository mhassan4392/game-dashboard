import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import "@szhsin/react-menu/dist/index.css";

import ContextStore from "./context";

import { BrowserRouter, HashRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <ContextStore>
        <App />
      </ContextStore>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
