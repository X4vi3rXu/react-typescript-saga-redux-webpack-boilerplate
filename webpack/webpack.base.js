const path = require('./path');
const PORTAL_ENTRY = path.src + '/modules/infra/index.tsx';

module.exports = {
  entry: ['@babel/polyfill', PORTAL_ENTRY],
  resolve: {
    alias: {
      '#': path.src,
    },
    extensions: ['.js', 'jsx', '.ts', '.tsx'],
  },
  module: {
    rules: [{
      test: /.tsx?$/,
      use: {
        loader: 'babel-loader',
      },
    }, {
      test: /\.jsx?$/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-react', '@babel/preset-env'],
        }
      },
    }, {
      test: /\.(s?)css$/,
      use: ['style-loader', 'css-loader', 'sass-loader'],
    }],
  },
  output: {
    filename: 'bundle.js',
    path: path.build,
    publicPath: '/',
    clean: true,
  },
};
