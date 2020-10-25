import express from "express";
import loadApp from "./setup/server/index";
import { APP_URL, PORT } from "./setup/config/env"


const app = express();
const port = process.env.PORT || 8080;

loadApp(app);

app.listen(port, () =>
  console.log(`App is listening on ${APP_URL}${PORT}/`)
);
