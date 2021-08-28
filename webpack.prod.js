const { merge } = require('webpack-merge');
const baseConfig = require('./webpack/webpack.base');

module.exports = merge(baseConfig, {
  mode: 'production',
  devtool: 'source-map',
});
