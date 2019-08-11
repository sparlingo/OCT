const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
//var GhPagesWebpackPlugin = require('gh-pages-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/bundle.js'
  },
  module: {
    rules: [{
      test: /\.scss$/,
      use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader'
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
              // options...
            }
          }
        ]
    }]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/styles.css'
    }),
    // new GhPagesWebpackPlugin({
    //     path: './public',
    //     options: {
    //         message: 'Update sparlingo.github.io',
    //         user: {
    //             name: 'Kevin Sparling',
    //             email: 'kevinsparling@gmail.com'
    //         }
    //     }
    // })
  ]
};