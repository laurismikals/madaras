const webpack = require('webpack')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const path = require('path')
const srcPath = path.resolve(__dirname, 'app')
const distPath = path.resolve(__dirname, 'static/dist')

module.exports = {
  context: srcPath,
  target: 'web',

  entry: './03-client/index.js',
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
  devtool: 'source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env':{
        'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress:{
        warnings: true
      }
    }),
    new webpack.optimize.AggressiveMergingPlugin(),
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      reportFilename: 'report.html', //look into /dist folder
      openAnalyzer: false,
      generateStatsFile: false,
    }),
  ],
}
