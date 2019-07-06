var path = require('path');
// var DIST_DIR = path.join(__dirname, '/client/dist');

module.exports = {
  entry: path.join(__dirname, '/client/index.js'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public')
  },
  module : {
    rules : [
      {
        test : /\.jsx?/,
        loader : 'babel-loader',      
        query: {
          presets: ['react', 'es2015']
        }
      }
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
}
};