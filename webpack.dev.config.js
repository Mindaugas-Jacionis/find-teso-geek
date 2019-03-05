const merge = require('webpack-merge');
const path = require('path');

const { paths } = require('./webpack.constants');
const baseConfig = require('./webpack.base.config');

module.exports = merge.smart(baseConfig, {
  devServer: {
    historyApiFallback: true,
    port: '4040',
  },
  devtool: 'inline-source-map',
  mode: 'development',
});
