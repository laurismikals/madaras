let BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin //plugin for analyzing js bundle file. helps to make file size under control by identifying large libraries
let webpack = require('webpack')

module.exports = {
  watch: true,
  context: __dirname,
  entry: './app/entry.js', //entry file where the webpack starts looking
  output: {
    path: __dirname + '/dist', //distribution directory
    filename: "bundle.js" //bundle file name
  },
  debug: true,
  // devtool: 'source-map', //for generating source maps
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['babel-loader'], //this transpiles es6 js to es5 js
      },
    ],
  },
  plugins: [
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      reportFilename: 'report.html', //look into /dist folder
      openAnalyzer: false,
      generateStatsFile: false,
    })
  ]
}