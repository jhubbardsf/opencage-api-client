const path = require('path');

const browserConfig = {
  target: 'web', // <=== can be omitted as default is 'web'
  entry: './src/index.js',
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
      },
    ],
  },
  output: {
    library: 'opencage',
    libraryTarget: 'umd',
    filename: 'opencage-api.min.js',
    path: path.resolve(__dirname, 'dist'),
  },
};

const nodeConfig = {
  target: 'node',
  entry: './index.js',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
      },
    ],
  },
  output: {
    libraryTarget: 'commonjs',
    filename: 'opencage-api.node.js',
    path: path.resolve(__dirname, 'dist'),
  },
};

module.exports = [browserConfig, nodeConfig];
