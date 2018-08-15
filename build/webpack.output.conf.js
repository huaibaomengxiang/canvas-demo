const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const path = require('path')

module.exports = {
  entry: path.resolve(__dirname, '../output'),
  output: {
    filename: 'canvas-kit.js',
    path: path.resolve(__dirname, '../package'),
    library: 'canvas-kit',
    libraryTarget: 'umd'
  },
  resolve: {
    extensions: [".jsx", ".json", ".js"]
  },
  module: {
    rules: [
      {
        test: /.js$/,
        loader: 'babel-loader',
        include: [path.resolve(__dirname, '../src'), path.resolve(__dirname, '../output')]
      }
    ]
  },
  plugins: [
    new UglifyJsPlugin()
  ]
}