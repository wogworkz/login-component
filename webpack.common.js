const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    login_component: './src/login-component.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Production',
      template: 'index.html',
      inject:'head'
    })
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 8080
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'login-component',
    libraryTarget: 'umd',
    umdNamedDefine: true
  }
};