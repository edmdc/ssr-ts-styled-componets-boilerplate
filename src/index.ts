import express from "express";
import loadApp from "./setup/server/index";

const app = express();
const port = process.env.PORT || 8080;

loadApp(app);

app.listen(port, () =>
  console.log(`App is listening on http://localhost:${port}/`)
);
