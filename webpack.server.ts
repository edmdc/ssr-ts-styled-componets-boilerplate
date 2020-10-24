import path from "path";

import webpack from "webpack";
import {merge} from "webpack-merge";
import common from "./webpack.common";

import nodeExternals from "webpack-node-externals";

const serverConfig: webpack.Configuration = merge(common, {
  mode: 'development',
  entry: {
    server: "./src/index.ts",
  },
  output: {
    path: path.join(__dirname, "build"),
    filename: "[name].js",
  },
  target: "node",
  node: {
    __dirname: false,
  },
  externals: nodeExternals(),
});

export default serverConfig;
