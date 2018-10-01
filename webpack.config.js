var path = require('path');
module.exports = {
  entry: "./src/main.ts",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, './src')
  },
  resolve: {
    extensions: ["", ".webpack.js", ".web.js", ".ts", ".js"]
  },
  module: {
    loaders: [{ test: /\.ts$/, loader: "ts-loader" }]
  }
}
