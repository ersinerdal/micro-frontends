const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: {
    app: ['./App.js']
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'static/[name].[hash].js',
    publicPath: '/'
  },
  devtool: 'source-map',
  devServer: {
    historyApiFallback: true,
    open: true,
    proxy: {
      '/react_app': {
        target: 'http://localhost:3001/',
        secure: false,
        pathRewrite: { '^/react_app': '' }
      },
      '/vue_app': {
        target: 'http://localhost:3003/',
        secure: false,
        pathRewrite: { '^/vue_app': '' }
      },
      '/angular_app': {
        target: 'http://localhost:3004/',
        secure: false,
        pathRewrite: { '^/angular_app': '' }
      },
      '/angular_js_app': {
        target: 'http://localhost:3002/',
        secure: false,
        pathRewrite: { '^/angular_js_app': '' }
      },
      '/modules': {
        target: 'http://localhost:3002/modules/',
        secure: false,
        pathRewrite: { '^/modules/': '' }
      }
    }
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
      title: 'Spike',
      filename: 'index.html',
      template: 'public/index.html'

    }),
    new CopyWebpackPlugin([{ from: 'public/main.css', to: 'static/main.css' }])
  ]
};
