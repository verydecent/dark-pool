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
    new webpack.DefinePlugin({
      // Dynamically access local environment variables based on the environment
      ENV: JSON.stringify(require(path.join(__dirname, "src", "config", env))),
      "process.env": {
        // defaults the environment to development if not specified
        "NODE_ENV": JSON.stringify(process.env.NODE_ENV || "development")
      }
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
