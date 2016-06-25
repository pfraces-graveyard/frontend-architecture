'use strict';

var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/main.js',

  output: {
    path: './dist/',
    filename: 'bundle.js'
  },

  devtool: 'source-map',

  module: {
    loaders: [
      { test: /\.html$/, loader: 'html-loader' },
      { test: /\.css$/, loaders: ['style-loader', 'css-loader', 'csslint-loader'] },
      { test: /\.js$/, loader: 'eslint-loader', exclude: /node_modules/ },
      { test: /\.json$/, loader: 'json-loader' }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ]
};
