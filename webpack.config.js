const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const LinkTypePlugin = require('html-webpack-link-type-plugin').HtmlWebpackLinkTypePlugin;

// Try the environment variable, otherwise use root
const ASSET_PATH = process.env.ASSET_PATH || './'

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  entry: './public/main.js',
  resolve: {
    extensions: [ '.js' ]
  },
  target: 'node',
  node: {
    __dirname: false,
    __filename: false,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          { loader: 'css-loader', options: { importLoaders: 1 } }
        ]
      },

      {
        test: /\.(js)$/,
        exclude: /(node_modules)/,
      },

      // make sure raw font files referenced from the fontawesome stylesheet are copied into dist
      // from https://chriscourses.com/blog/loading-fonts-webpack
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/'
            }
          }
        ]
      }
    ]
  },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname + '/public', 'dist'),
    publicPath: ASSET_PATH,
    clean: true
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'main.css'
    }),
    new HtmlWebpackPlugin({
      template: 'public/calendar.html'
    }),
    new LinkTypePlugin({
      '*.css' : 'text/css'
    })
  ]
  
}
