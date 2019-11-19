const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'The sushi house',
    }),
  ],
  devServer: {
    contentBase: './dist/'
  },
  module: {
    rules: [
      {
        test: /\.(s*)css$/i,
        use: ['style-loader', 'css-loader','sass-loader'],
      },
      {
        test: /\.(jpg|png)$/,
        use: ['url-loader'],
      },
    ],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};