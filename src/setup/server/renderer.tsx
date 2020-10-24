import React from "react";
import ReactDOM from "react-dom/server";
import Helmet from "react-helmet";
import {flushToHTML} from "styled-jsx/server"
import App from "../client/App"
import template from "./template"

export default async function renderer() {
  const htmlBody = ReactDOM.renderToString(<App />);

  const htmlHead = () => {
    const {title, meta} = Helmet.renderStatic();
    return title.toString() + meta.toString();
  }

  const styles = flushToHTML()

  return template(htmlBody, htmlHead(), styles);
};
