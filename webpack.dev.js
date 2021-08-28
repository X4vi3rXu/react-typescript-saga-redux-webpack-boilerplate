const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const devServerConfig = require('./webpack/devServerConfig');
const baseConfig = require('./webpack/webpack.base');

module.exports = merge(baseConfig, devServerConfig, {
  mode: 'development',
  devtool: 'inline-source-map',
  plugins: [new HtmlWebpackPlugin({
    title: 'Boilerplate',
    name: "index.html",
    template: './template/index.html',
    inject: false,
  })],
  module: {
    rules: [{
      enforce: 'pre',
      test: /\.tsx?$/,
      exclude: /node_modules/,
      loader: 'eslint-loader',
    }],
  },
});
