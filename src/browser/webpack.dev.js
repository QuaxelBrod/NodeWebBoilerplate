var webpack = require('webpack');
var path = require('path');

var node_modules = path.resolve(__dirname, '../../node_modules');
// var pathToReact = path.resolve(node_modules, 'react/dist/react.js');
// var pathToReactDom = path.resolve(node_modules, 'react-dom/dist/react-dom.js');
var UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
var env = process.env.NODE_ENV;
var APP_DIR = path.join(__dirname, 'src/browser');

module.exports = {
    contentBase: './www/',
    debug: true,
    devtool: 'eval',
    entry: {
        index: './src/browser/index.ts'
    },
    progress: true,
    colores: true,
    //    entry: ['webpack-hot-middleware/client', './src/browser/index.tsx'],
    module: {
        preLoaders: [{
            test: /\.tsx?$/,
            loader: 'tslint'
                //            include: APP_DIR
        }],
        loaders: [{
                test: /\.tsx?$/,
                loader: 'ts-loader'
                    //          loaders: ['babel', 'ts'],
                    //            include: APP_DIR
            },
            // LESS
            //        {
            //            test: /\.less$/,
            //            loader: 'style!css!less'
            //        }, 
            // css
            {
                test: /\.css$/, // Only .css files
                loader: 'style!css' // Run both loaders
            }
        ],
        //        noParse: [pathToReact, pathToReactDom],
        dummy: 'nothing'
    },
    output: {
        library: '[name]',
        libraryTarget: 'umd',
        umdNamedDefine: true,
        filename: '[name].js',
        path: path.join(__dirname, '../..', 'www/js/')

    },
    externals: {
        // require("jquery") is external and available
        //  on the global var jQuery
        "jquery": "jQuery"
    },
    plugins: [
        //        new webpack.HotModuleReplacementPlugin()
        //        new webpack.optimize.CommonsChunkPlugin('common.js')
        //        new webpack.NoErrorsPlugin()
    ],
    resolve: {
        root: [path.resolve('www/')],
        extensions: ['', '.jsx', '.js', '.tsx', '.ts'],
        //        alias: { 'react': pathToReact,
        //                 'react-dom': pathToReactDom },
        dummy: 'nothing'
    },
    tslint: {
        emitErrors: false,
        failOnHint: false
    }
};