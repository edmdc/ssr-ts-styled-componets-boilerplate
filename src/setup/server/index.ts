import express from "express";
import renderer from "./renderer";
import dotenv from "dotenv";
import "../../assets/index";

dotenv.config();

export default function loadApp(app: express.Application) {
  app.use(express.static("dist"));
  app.get("/*", function(req, res) {
    const context = {notFound: false};
    renderer(req.path, context).then(html => {
      if (context.notFound) {
        res.status(404);
      }
      res.send(html)
    })
  })
}
