const path = require('path');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

const cssLoaders = [
    'style-loader',
    { loader: 'css-loader', options: { sourceMap: true, importLoaders: 1 } },
    { loader: 'postcss-loader', options: { sourceMap: true } },
    { loader: 'resolve-url-loader', options: { sourceMap: true } }
];

const scssLoaders = cssLoaders.concat([{ loader: 'sass-loader', options: { sourceMap: true } }]);

module.exports = {
    target: 'web',
    devtool: 'inline-cheap-module-source-map',
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        port: '3000',
        open: true,
        hot: true
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: cssLoaders
            },
            {
                test: /\.s(a|c)ss$/,
                use: scssLoaders
            }
        ]
    },
    plugins: [new ReactRefreshWebpackPlugin()]
};
