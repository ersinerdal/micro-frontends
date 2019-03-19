const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: {
    react: ['./App.js']
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'static/[name].js',
    publicPath: '/'
  },
  devtool: 'source-map',
  devServer: {
    historyApiFallback: true,
    open: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
      ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Spike - React App',
      filename: 'index.html',
      template: 'public/index.html'

    }),
    new CopyWebpackPlugin([{ from: 'public/main.css', to: 'static/react.css' }])
  ]
};
