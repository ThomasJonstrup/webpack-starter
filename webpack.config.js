var webpack = require('webpack');

var config = {
  context: __dirname + '/src',
  entry: {
    app: './app.js'
  },
  output: {
    path: __dirname + '/dist', // 'dist' is the destination
    filename: 'bundle.js',
  },
  devServer: {
    open: true, // to open the local server in browser
    contentBase: __dirname + '/src',
  },
};

module.exports = config;
