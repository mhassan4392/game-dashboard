import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import "@szhsin/react-menu/dist/index.css";
import "react-date-range/dist/styles.css";
// import "react-date-range/dist/theme/default.css";

import { BrowserRouter, HashRouter } from "react-router-dom";

import { Provider } from "react-redux";
import store from "./store/app";

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
