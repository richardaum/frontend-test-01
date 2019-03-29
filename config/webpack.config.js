const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');

const devMode = true || process.env.NODE_ENV !== 'production';

module.exports = {
  mode: devMode ? 'development' : 'production',
  devtool: 'cheap-source-map',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.marko']
  },
  module: {
    rules: [
      {
        test: /\.marko$/,
        use: { loader: 'marko-loader' }
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader!postcss-loader'
        })
      },
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: { limit: 8192 }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({ template: 'public/index.html' }),
    new ExtractTextPlugin('bundle.css', { allChunks: true })
  ],
  devServer: {
    host: '0.0.0.0',
    port: process.env.PORT || 8080,
    historyApiFallback: true,
    stats: {
      children: false,
      modules: false,
    }
  }
};
