import Dotenv from "dotenv";

import webpack from "webpack";

Dotenv.config();

const devMode = process.env.NODE_ENV === "development";

const common: webpack.Configuration = {
  mode: !devMode ? "production" : "development",
  devtool: !devMode ? false : "eval-source-map",
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[ext]",
            outputPath: "imgs",
          },
        },
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  // optimization: {
  //   splitChunks: {
  //     cacheGroups: {
  //       commons: { test: /[\\/]node_modules[\\/]/, name: 'vendor', chunks: 'all' }
  //     }
  //   }
  // },
};

export default common;
