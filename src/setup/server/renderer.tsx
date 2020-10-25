import React from "react";
import { renderToString } from "react-dom/server";
import { ServerStyleSheet } from "styled-components";
import Helmet from "react-helmet";
import App from "../client/App";
import template from "./template";

export default async function renderer() {
  const sheet = new ServerStyleSheet();
  try {
    const htmlBody = renderToString(sheet.collectStyles(<App />));
    const styleTags = sheet.getStyleTags();

    const htmlHead = () => {
      const { title, meta } = Helmet.renderStatic();
      return title.toString() + meta.toString();
    };
    return template(htmlBody, htmlHead(), styleTags);
  } catch (err) {
    console.error(err);
  } finally {
    sheet.seal();
  }
}
