/* webpack.config.js */
module.exports = {
    entry: './src/js/main.js',
    output: {
        path: './resources/js',
        filename: 'bundle.js',
        publicPath: '/resources/js'
    },
    module: {
        loaders: [
            {
                test: /\.scss$/,
                loaders: ['style', 'css', 'sass']
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loader: 'url?limit=10000!img?progressive=true'
            }
        ]
    }
}