'use strict'
const webpack           = require('webpack');
const path              = require('path');


module.exports = {
  entry: './index.js',

  output: {
    filename: '../static/bundle.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
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
    ]
  }
}
