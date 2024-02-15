const path = require('path')
const webpack = require('webpack')
const miniCss = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const DotEnv = require('dotenv-webpack')
const TerserPlugin = require('terser-webpack-plugin')

// JS loader
exports.jsLoader = {
    test: /\.tsx?$/,
    exclude: /node_modules/,
    use: 'babel-loader',
}

// SCSS / SASS / CSS loader
exports.styleLoader = (isProduction, root) => {
    return {
        test: /\.(sa|sc|c)ss$/,
        use: [
            isProduction ? miniCss.loader : 'style-loader',
            {
                loader: 'css-loader',
                options: { sourceMap: true },
            },
            {
                loader: 'postcss-loader',
                options: { sourceMap: true },
            },
            {
                loader: 'sass-loader',
                options: {
                    sourceMap: true,
                },
            },
            {
                loader: 'sass-resources-loader',
                options: {
                    resources: path.resolve(
                        root,
                        'src/assets/scss/settings.scss',
                    ),
                },
            },
        ],
    }
}

// HTML includes loader
exports.htmlLoader = {
    test: /\.html$/,
    loader: 'raw-loader',
}

// Images loader
exports.imageLoader = (root) => ({
    test: /\.(png|jpe?g)$/i,
    exclude: /.src\/assets\/icons/,
    loader: 'file-loader',
    options: {
        name: '[name].[ext]',
        outputPath: path.resolve(root, 'public/assets/images'),
    },
})

// Icons loader
exports.iconLoader = (root) => ({
    test: /\.(gif|svg)$/i,
    loader: 'file-loader',
    options: {
        name: '[name].[ext]',
        outputPath: path.resolve(root, 'public/assets/icons'),
    },
})

exports.optimization = {
    runtimeChunk: 'single',
    splitChunks: {
        cacheGroups: {
            defaultVendors: {
                name: 'libraries',
                test: /[\\/]node_modules[\\/]/,
                priority: -10,
                chunks: 'initial',
            },
            default: {
                minChunks: 2,
                priority: -20,
                chunks: 'initial',
                reuseExistingChunk: true,
            },
        },
    },
}

exports.devServer = (root) => ({
    static: {
        directory: path.join(root, 'public'),
    },
    port: 9000,
    hot: true,
    open: true,
    historyApiFallback: true,
})

exports.plugins = (isProduction, root) => [
    new HtmlWebpackPlugin({
        filename: 'index.html',
        inject: true,
        template: path.join(root, './src/index.ejs'),
        favicon: './src/assets/icons/favicon.ico',
    }),
    new webpack.ProvidePlugin({
        React: 'react',
    }),
    new DotEnv(),
    isProduction &&
        new miniCss({
            filename: '[name].css',
        }),
    isProduction &&
        new TerserPlugin({
            terserOptions: {
                output: {
                    comments: false,
                },
            },
            extractComments: false,
        }),
]

exports.resolve = (root) => ({
    extensions: ['.webpack.js', '.web.js', '.ts', '.tsx', '.js', '.jsx'],
    alias: {
        '~': path.resolve(root, 'src'),
        '~c': path.resolve(root, 'src/components'),
        '~p': path.resolve(root, 'src/containers'),
        '~s': path.resolve(root, 'src/store'),
        '~a': path.resolve(root, 'src/assets'),
    },
})
