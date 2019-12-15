const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    login_component: './src/login-component.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Production',
      template: 'index.html',
      inject: 'head'
    })
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 8080
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    library: 'login-component',
    libraryTarget: 'umd',
    umdNamedDefine: true
  }
}
