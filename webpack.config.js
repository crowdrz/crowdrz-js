const path = require('path');

module.exports = {
  mode: 'production',
  entry: './lib/crowdrz.js',
  output: {
    path: path.resolve('dist'),
    filename: 'crowdrz.js',
    libraryTarget: 'commonjs2',
  },
  node: {
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    dns: 'empty'
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /(node_modules)/,
        use: 'babel-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.js'],
  },
};
