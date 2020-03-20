const path = require("path");
const { IgnorePlugin } = require("webpack");

const optionalModules = [
  ...Object.keys(require("knex/package.json").browser),
  ...Object.keys(require("mikro-orm/package.json").peerDependencies),
  ...Object.keys(require("mikro-orm/package.json").devDependencies)
];

module.exports = {
  entry: path.resolve("src", "index.ts"),
  mode: "development",
  // mode: 'production',
  target: "node",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: "ts-loader"
      },
      {
        test: /\.mjs$/,
        include: /node_modules/,
        type: "javascript/auto"
      }
    ]
  },
  resolve: {
    extensions: [".ts", ".js"]
  },

  plugins: [
    new IgnorePlugin({
      checkResource: rsrc => {
        if (optionalModules.includes(rsrc.split("/")[0])) {
          try {
            require.resolve(rsrc);
            return false;
          } catch {
            return true;
          }
        }
        return false;
      }
    })
  ],

  output: {
    filename: "bundle.js",
    libraryTarget: "commonjs",
    path: path.resolve("..", "output")
  }
};
