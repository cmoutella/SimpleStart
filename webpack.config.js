const path = require("path");

module.exports = {
  entry: "./src/js/main.js",
  output: {
    path: path.resolve("dist"),
    filename: "js/bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.j(s|sx)$/,
        exclude: "/node_modules/",
        use: {
          loader: "babel-loader",
          options: {
            cacheDirectory: true
          }
        }
      }
    ]
  }
};
