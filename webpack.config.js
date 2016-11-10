'use strict'
const webpack           = require('webpack');
const path              = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');



module.exports = {
  entry: './index.js',

  output: {
    filename: './static/bundle.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.css']
  },

  module: {
    loaders: [
      {
	   test: /\.jsx?$/,
	   exclude: /node_modules/,
	   loader: 'babel',
	   query: {
	     presets: ['es2015', 'react']
        }
      },
      { 
        test: /\.css$/,  
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader') 
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'ReactJS',
      xhtml: true,
      inject: false,
      template: require('html-webpack-template'),
      appMountId: 'root',
      filename: './static/index.html'
    }),
    new ExtractTextPlugin('./static/[name].css', {
      allChunks: true
    })
  ]
}
