import path from "path";

import webpack from "webpack";
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";

export default (env, argv): webpack.Configuration => ({
  mode: env.production ? "production" : "development",
  entry: {
    client: "./src/setup/client/index.tsx"
  },
  output: {
    path: path.resolve(__dirname, "build"),
    filename: env.production ? "[name].[contentHash].bundle.js" : "js/[name].js",
    publicPath: '/',
  },
  devtool: env.production ? null : "eval-source-map",
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
});
