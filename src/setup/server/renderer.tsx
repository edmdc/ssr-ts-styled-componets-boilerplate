import React from "react";
import ReactDOM from "react-dom/server";
import {StaticRouter} from "react-router-dom";
import Helmet from "react-helmet";
import {flushToHTML} from "styled-jsx/server"
import App from "../client/App"
import template from "./template"
import getData from "../config/routerConfig"

export default async function renderer(path: string, context: any) {
  const promises = getData(path);
  context.data = {};
  return Promise.all(promises).then(responses => {
    responses.forEach(res => {
      if (res) Object.assign(context.data, res);
    })

    const htmlBody = ReactDOM.renderToString(
      <StaticRouter location={path} context={context} >
        <App />
      </StaticRouter>
    );

    const htmlHead = () => {
      const {title, meta} = Helmet.renderStatic();
      return title.toString() + meta.toString();
    }

    const styles = flushToHTML()

    return template(htmlBody, htmlHead(), styles);
  });
};
