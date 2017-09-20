const webpack = require('webpack');
const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

  entry: [
    //activates hot module replacement
    'react-hot-loader/patch',
    //connects to the necessary endpoint (our project will be served at localhost:8080)
    'webpack-dev-server/client?http://localhost:8080',
    //instructs webpack to bundle our code, then provide it to the dev server if/when bundling is successful
    'webpack/hot/only-dev-server',
    resolve(__dirname, "src", "index.jsx")
  ],

  output: {
    //this tells webpack to put the bundled code in build/app.bundle.js, where index.html will look for it.
    filename: 'app.bundle.js',
    path: resolve(__dirname, 'build'),
    //this specifies where hot-reloaded modules should be loaded
    publicPath: '/'
  },

  resolve: {
    extensions: [ '.js', '.jsx' ]
  },

  devtool: '#source-map',

  devServer: {
    hot: true,
    contentBase: resolve(__dirname, 'build'),
    publicPath: '/'
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: [
            ["es2015", {"modules": false}],
            "react",
          ],
          plugins: [
            "react-hot-loader/babel"
          ]
        }
      }
    ]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new HtmlWebpackPlugin({
      //template tells the plugin which file it should use as a template for creating the index.html file in our build directory.
      template:'template.ejs',
      // appMountId provides the name of our HTML's root DOM node. Remember, as discussed in Creating and Rendering Basic Elements, a root DOM node is the area of our page React is managing.
      appMountId: 'react-app-root',
      //simply sets the text our index's <title> tags
      title: 'React BoilerPlate',
      //filename is the location we'd like to place our programmatically-generated index.html.
      filename: resolve(__dirname, "build", "index.html"),
    }),
  ]
};
