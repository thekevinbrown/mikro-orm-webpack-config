const path = require("path");
const { EnvironmentPlugin, IgnorePlugin } = require("webpack");

module.exports = {
  entry: path.resolve("src", "index.ts"),
  mode: "development",
  // mode: 'production',
  target: "node",
  module: {
    rules: [
      { test: /\.ts$/, exclude: /node_modules/, loader: "ts-loader" },
      { test: /\.mjs$/, include: /node_modules/, type: "javascript/auto" }
    ]
  },

  externals: {
    knex: "commonjs knex",
    umzug: "commonjs umzug",
    "mikro-orm": "commonjs mikro-orm"
  },

  resolve: {
    extensions: [".ts", ".js"]
  },

  plugins: [new EnvironmentPlugin({ WEBPACK: true })],

  output: {
    filename: "bundle.js",
    libraryTarget: "commonjs",
    path: path.resolve("..", "output")
  }
};
