const path = require('path');
const fs = require('fs');
const webpack = require('webpack');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const Dotenv = require('dotenv-webpack');

const { paths } = require('./webpack.constants');

const babelrc = JSON.parse(fs.readFileSync('./.babelrc'));

module.exports = {
  entry: {
    app: ['@babel/polyfill', 'whatwg-fetch', path.join(paths.SRC, 'index.js')],
  },
  output: {
    path: paths.BUILD,
    filename: '[name].bundle.js',
  },
  mode: process.env.NODE_ENV || 'production',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [{ loader: 'babel-loader', options: babelrc }],
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
      {
        test: /\.svg$/,
        loader: 'raw-loader',
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({ filename: '[name].bundle.css' }),
    new Dotenv(),
    new CopyWebpackPlugin([]),
    new HtmlWebpackPlugin({
      template: path.join(paths.STATIC, 'index.html'),
    }),
    new webpack.ProgressPlugin(),
  ],
};
