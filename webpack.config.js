const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: path.resolve(__dirname, 'examples/src/index.jsx'),
  output: {
    path: path.resolve(__dirname, 'examples/build'),
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.js', '.scss', '.jsx', '.png', '.svg', '.jpg'],
  },
  mode: process.env.NODE_ENV || 'development',
  devServer: {
    contentBase: path.join(__dirname, 'examples/build'),
    index: 'index.html',
    historyApiFallback: true,
    overlay: true,
    compress: true,
    hotOnly: true,
    progress: true,
    inline: true,
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        include: path.resolve(__dirname, './examples/src'),
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
          },
        },
      },
      {
        test: /\.s?css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'examples/src/index.ejs'),
      filename: 'index.html',
    }),
  ],
}
