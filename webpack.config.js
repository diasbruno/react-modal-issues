var path = require('path');
module.exports = {
  entry: './src/index.js',
  output: {
    filename: './app/main.js',
    path: path.join(__dirname, '.'),
    publicPath: ''
  },
  module: {
    loaders: [
      { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader' }
    ]
  }
};
