const path = require('path');
const webpack = require("webpack");
const Dotenv = require('dotenv-webpack');


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
    new Dotenv()
    // new webpack.DefinePlugin({
    //   PRODUCTION: JSON.stringify(true),
    //   VERSION: JSON.stringify('5fa3b9'),
    //   BROWSER_SUPPORTS_HTML5: true,
    //   TWO: '1+1',
    //   'typeof window': JSON.stringify('object'),
    //   'process.env': {
    //     NODE_ENV: JSON.stringify(process.env.NODE_ENV)
    //   }
    // })
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
