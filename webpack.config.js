var path = require('path');

module.exports = {
  context: path.resolve(__dirname + '/src/'),
  entry: 'index.js',
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },
  resolve: {
    root: path.resolve(__dirname, 'src'),
    modulesDirectories: ['store'],
    extensions: ['', '.js']
  }
}