const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

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
      },
      {
        test: /\.(sc|sa|c)ss$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      path: path.resolve("dist"),
      filename: "css/style.css"
    })
  ]
};
