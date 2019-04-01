 const merge = require('webpack-merge');
 const common = require('./webpack.common.js');

 module.exports = merge(common, {
   mode: 'production',
   devtool: 'source-map',
    output : {
      filename: '[name].bundle.min.js'
    }
  });