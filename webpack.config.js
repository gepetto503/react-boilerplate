const { resolve } = require('path');
const webpack = require('webpack');

module.exports = {

  entry: [
    resolve(__dirname, "src") + "/index.jsx"
  ],

  output: {
    //this tells webpack to put the bundled code in build/app.bundle.js, where index.html will look for it.
    filename: 'app.bundle.js',
    path: resolve(__dirname, 'build'),
  },

  resolve: {
    extensions: [ '.js', '.jsx' ]
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: [
            "es2015",
            "react"
          ]
        }
      },
    ],
  }
};
