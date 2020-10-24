import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import getData from "../config/routerConfig";
import StaticContext from "../config/StaticContext";

const path = window.document.location.pathname;
const promises = getData(path);
const data = {};

Promise.all(promises).then(responses => {
  responses.forEach(res => {
    if (res) Object.assign(data, res);
  });

  ReactDOM.hydrate(
    <StaticContext.Provider value={data}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StaticContext.Provider>,
    document.getElementById("root")
  );
})
