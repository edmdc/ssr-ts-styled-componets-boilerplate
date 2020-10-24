import path from "path";
import Dotenv from "dotenv";

import webpack from "webpack";
import {merge} from "webpack-merge";
import common from "./webpack.common"
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';

Dotenv.config();

const isDevMode = process.env.NODE_ENV !== "production";

const clientConfig: webpack.Configuration = merge(common, {
  mode: !isDevMode ? "production" : "development",
  entry: {
    client: {
      import: "./src/setup/client/index.tsx",
      dependOn: 'react-vendors',
    },
    'react-vendors': ['react', 'react-dom']
  },
  output: {
    path: path.resolve(__dirname, "build"),
    filename: !isDevMode ? "js/[name].[contentHash].bundle.js" : "js/[name].js",
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              plugins: [
                isDevMode && require.resolve('react-refresh/babel'),
              ].filter(Boolean)
            }
          },
          {
            loader: require('styled-jsx/webpack').loader,
            options: {
              type: "scoped"
            }
          }
        ]
      }
    ],
  },
  plugins: [
    isDevMode ? new ForkTsCheckerWebpackPlugin({
      async: false,
      eslint: {
        files: "./src/**/*.{ts,tsx,js,jsx}"
      }
    }) : () => {},
    isDevMode ? new webpack.HotModuleReplacementPlugin() : () => {},
    isDevMode ? new ReactRefreshWebpackPlugin() : () => {},
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
