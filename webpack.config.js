const path = require('path');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
var HtmlWebpackPlugin = require('html-webpack-plugin');

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: 'client/index.html',
  filename: 'index.html',
  inject: 'body'
});

module.exports = {

  entry: './client/index.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/assets/',
    filename: 'index_bundle.js',
  },
  plugins: [HtmlWebpackPluginConfig],
    module: {
      loaders: [
        { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ }
      ]
    }
};
