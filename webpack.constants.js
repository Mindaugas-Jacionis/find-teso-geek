const path = require('path');

const STATIC = path.resolve(__dirname, 'src/static');

module.exports = {
  paths: {
    STATIC,
    BUILD: path.resolve(__dirname, 'build'),
    SRC: path.resolve(__dirname, 'src'),
    ASSETS: path.resolve(STATIC, 'assets'),
  },
};
