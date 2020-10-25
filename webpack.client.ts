import path from "path";
import Dotenv from "dotenv";

import webpack from "webpack";
import { merge } from "webpack-merge";
import common from "./webpack.common";
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";

Dotenv.config();

const isDevMode = process.env.NODE_ENV !== "production";

const clientConfig: webpack.Configuration = merge(common, {
  mode: !isDevMode ? "production" : "development",
  entry: {
    client: {
      import: "./src/setup/client/index.tsx",
      dependOn: "react-vendors",
    },
    "react-vendors": ["react", "react-dom"],
  },
  output: {
    path: path.resolve(__dirname, "build"),
    filename: !isDevMode
      ? "[ext]/[name].[contentHash].bundle.[ext]"
      : "[ext]/[name].[ext]",
    publicPath: "/",
  },
  plugins: [
    isDevMode
      ? new ForkTsCheckerWebpackPlugin({
          async: false,
          eslint: {
            files: "./src/**/*.{ts,tsx,js,jsx}",
          },
        })
      : () => {},
  ],
  // optimization: {
  //   splitChunks: {
  //     cacheGroups: {
  //       commons: { test: /[\\/]node_modules[\\/]/, name: 'vendor', chunks: 'all' }
  //     }
  //   }
  // },
});

export default clientConfig;
