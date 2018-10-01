const path = require('path');

module.exports = {
  entry: "./src/main.ts",
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "main.js"
  },
  resolve: {
    extensions: ["", ".webpack.js", ".web.js", ".ts", ".js"],
    root: path.join(__dirname, './src'),
  },
  module: {
    loaders: [{ test: /\.ts$/, loader: "ts-loader" }]
  }
}
