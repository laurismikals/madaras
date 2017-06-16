const path = require('path');
const srcPath = path.resolve(__dirname, 'app');
const distPath = path.resolve(__dirname, 'public/dist');

module.exports = {
  context: srcPath,
  target: 'web',

  entry: './client/index.js',
  output: {
    path: distPath,
    filename: 'client.js',
    publicPath: '/'
  },
  resolve: {
    modules: ['node_modules', 'app'],
    extensions: ['*', '.js', '.json']
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader'
      }
    ]
  },
  devtool: 'source-map'
};

