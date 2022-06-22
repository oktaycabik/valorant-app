const path = require("path");
const Dotenv = require("dotenv-webpack");

module.exports = {
  entry: ["@babel/polyfill", "./src/index.js"],
  output: {
    path: path.resolve(__dirname, "bundles"),
    filename: "bundle.js",
  },
  plugins: [new Dotenv()],
  mode: "production",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
  devServer: {
    port: process.env.PORT,
  },
};
