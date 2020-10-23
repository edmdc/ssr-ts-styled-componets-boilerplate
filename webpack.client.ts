import path from "path";

import webpack from "webpack";
import Dotenv from "dotenv-webpack";
import merge from "webpack-merge";
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";
import TerserPlugin from "terser-webpack-plugin";

const base: webpack.Configuration = {
  entry: {
    client: "./src/setup/client/index.tsx"
  },
  plugins: [
    new Dotenv()
  ],
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
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: { test: /[\\/]node_modules[\\/]/, name: 'vendor', chunks: 'all' }
      }
    }
  },
};

const devConfig: webpack.Configuration = merge(base, {
  mode: "development",
  output: {
    path: path.join(__dirname, "..", "dist"),
    filename: "js/[name].js",
    publicPath: '/',
  },
  node: {
    fs: "empty"
  },
  devtool: "source-map",
  plugins: [
    new ForkTsCheckerWebpackPlugin({
      async: false,
      eslint: {
        files: "./src/**/*.{ts,tsx,js,jsx}"
      }
    }),
  ],
});


const prodConfig: webpack.Configuration = merge(base, {
  mode: "production",
  output: {
    filename: "[name].[contentHash].bundle.js",
    path: path.resolve(__dirname, "build")
  },
  optimization: {
    minimizer: [
      new TerserPlugin(),
    ]
  }
});

export default prodConfig;
export default devConfig;
