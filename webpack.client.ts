import path from "path";
import Dotenv from "dotenv";

import webpack from "webpack";
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";

Dotenv.config();

const devMode = process.env.NODE_ENV === "development";

const clientConfig: webpack.Configuration = {
  mode: !devMode ? "production" : "development",
  entry: {
    client: "./src/setup/client/index.tsx"
  },
  output: {
    path: path.resolve(__dirname, "build"),
    filename: !devMode ? "[name].[contentHash].bundle.js" : "js/[name].js",
    publicPath: '/',
  },
  devtool: !devMode ? null : "eval-source-map",
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
            outputPath: "imgs"
          }
        }
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          "babel-loader",
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
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin({
      async: false,
      eslint: {
        files: "./src/**/*.{ts,tsx,js,jsx}"
      }
    }),
  ],
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: { test: /[\\/]node_modules[\\/]/, name: 'vendor', chunks: 'all' }
      }
    }
  },
};

export default clientConfig;
