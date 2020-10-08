const webpack = require("webpack");
const Dotenv = require('dotenv-webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin')


module.exports = {
  mode: "production",
  entry: "./src/Root/index.js",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader", "eslint-loader"],
      },
      {
        test: /\.css$/i,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(ttf)$/,
        use: 'url-loader',
      },
    ]
  },
  resolve: {
    extensions: ['*', '.js', 'jsx']
  },
  output: {
    path: __dirname + "/build",
    publicPath: "/",
    filename: "bundle.js"
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new Dotenv(),
    new HtmlWebpackPlugin({
      favicon: __dirname + '/build/favicon.ico'
    })
  ],
  devServer: {
    contentBase: "./build",
    hot: true,
    port: 1024,
    historyApiFallback: {
      disableDotRule: true
    },
    overlay: {
      warnings: true,
      errors: true,
    },
  },
  devtool: "cheap-module-source-map"
};	
