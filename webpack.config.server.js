const nodeExternals = require('webpack-node-externals')
const path = require('path')
const srcPath = path.resolve(__dirname, 'app')
const distPath = path.resolve(__dirname, 'static/dist')

module.exports = {
    context: srcPath,
    entry: './04-server/index.js',
    output: {
        path: distPath,
        filename: 'server.js'
    },
    target: 'node',
    node: {
        __dirname: false,
        __filename: false
    },
    resolve: {
        modules: ['node_modules', 'app'],
        extensions: ['*', '.js', '.json']
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    },
    externals: nodeExternals(),
    devtool: 'source-map'
}
