var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: './src/app.js',
    target: 'node',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'main.bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env']
                    }
                }
            }
        ]
    },
    stats: {
        colors: true
    },
    devtool: 'source-map'
};