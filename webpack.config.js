const path = require('path');
// var DIST_DIR = path.join(__dirname, '/client/dist');

module.exports = {
  entry: path.join(__dirname, '/client/index.jsx'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public')
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        use: {
          loader: 'babel-loader',
          query: {
            presets: ['@babel/react', '@babel/env']
          }
        }
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  }
};
