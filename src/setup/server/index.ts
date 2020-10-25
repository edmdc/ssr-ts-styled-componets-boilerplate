import path from "path";
import express from "express";
import renderer from "./renderer";

export default function loadApp(app: express.Application): void {
  app.use(express.static(path.join(__dirname, "build")));
  app.get("/*", function (req, res) {
    const context = { notFound: false };
    renderer().then((html) => {
      if (context.notFound) {
        res.status(404);
      }
      res.send(html);
    });
  });
}
