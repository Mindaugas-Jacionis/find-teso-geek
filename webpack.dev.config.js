const merge = require('webpack-merge');

const { paths } = require('./webpack.constants');
const baseConfig = require('./webpack.base.config');

module.exports = merge.smart(baseConfig, {
  devServer: {
    contentBase: paths.BUILD,
    port: '4040',
  },
  devtool: 'inline-source-map',
  mode: 'development',
});
