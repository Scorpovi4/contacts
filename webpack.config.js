const path = require('path')

console.log(__dirname)
const {
    jsLoader,
    styleLoader,
    htmlLoader,
    imageLoader,
    iconLoader,
    optimization,
    devServer,
    plugins,
    resolve,
} = require('./webpack/parts')

module.exports = (env) => {
    const isProduction = !!env.production

    return {
        entry: '/src/index.tsx',
        target: 'web',
        devtool: 'inline-source-map',
        output: {
            path: path.resolve(__dirname, 'public'),
            filename: '[name].min.js',
        },
        module: {
            rules: [
                jsLoader,
                styleLoader(isProduction, __dirname),
                htmlLoader,
                imageLoader(__dirname),
                iconLoader(__dirname),
            ],
        },
        optimization: optimization,
        devServer: devServer(__dirname),
        plugins: plugins(isProduction, __dirname),
        resolve: resolve(__dirname),
    }
}
