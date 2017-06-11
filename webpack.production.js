var webpack = require('webpack')

var devFlagPlugin = new webpack.DefinePlugin({
  __DEBUG__: JSON.stringify(JSON.parse(process.env.DEBUG || 'false'))
})

module.exports = {
  entry: [
    './source/index.js'
  ],
  output: {
    path: __dirname + '/build/public/',
    publicPath: '/public/',
    filename: 'index.js'
  },
  plugins: [
    new webpack.NoErrorsPlugin(),
    devFlagPlugin
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: [ 'react-hot', 'babel' ],
        exclude: /node_modules/
      },
      {
        test: /\.(less|css)$/,
        loader: 'style!css!less!autoprefixer-loader?browsers=last 2 versions'
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
          'file?hash=sha512&digest=hex&name=[hash].[ext]',
          'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
        ]
      },
      {
        test: /.*font.*\.(otf|eot|svg|ttf|woff|woff2)(\?[a-z0-9=\.]+)?$/,
        loader: 'url-loader?limit=8192'
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      }
    ]
  },
  resolve: {
    extensions: [ '', '.js', '.json' ]
  }
}

module.exports.plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings:     false,
        drop_console: true,
        unsafe:       true
      }
    })
)
