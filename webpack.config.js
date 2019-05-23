'use strict';

const path = require('path');
const CKEditorWebpackPlugin = require('@ckeditor/ckeditor5-dev-webpack-plugin');
const { styles } = require('@ckeditor/ckeditor5-dev-utils');

module.exports = {
    // https://webpack.js.org/configuration/entry-context/
    entry: {
        'libs/ckeditor/ckeditor': '/Users/usuario/ckeditor/js/libs/ckeditor/ckeditor.js',
        'libs/ckeditor/teste': '/Users/usuario/ckeditor/js/libs/ckeditor/teste.js',
    },

    // https://webpack.js.org/configuration/output/
    output: {
        path: '/Users/usuario/ckeditor/js/webpack/',
        filename: '[name].bundle.js'
    },

    plugins: [
        new CKEditorWebpackPlugin( {
            language: 'pt-br'
        } ),
    ],

    module: {
        rules: [
            {
                test: /\.svg$/,
                use: [ 'raw-loader' ]
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader',
                        options: {
                            singleton: true
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: styles.getPostCssConfig( {
                            themeImporter: {
                                themePath: require.resolve('@ckeditor/ckeditor5-theme-lark')
                            },
                            minify: true
                        } )
                    },
                ]
            }
        ]
    },

    // Useful for debugging.
    devtool: 'source-map'
};