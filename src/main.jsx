import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import "@szhsin/react-menu/dist/index.css";
import "react-date-range/dist/styles.css";

// slick slider css
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { BrowserRouter } from "react-router-dom";

import { Provider } from "react-redux";
import store from "./store/app";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
