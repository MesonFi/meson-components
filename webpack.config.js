const path = require('path');
var glob = require('glob');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// var CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'docs'),
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        extractComments: false,
      }),
    ],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|tsx|ts)?$/,
        use: ['babel-loader', 'ts-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.less$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'less-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
    mainFiles: ['index', 'default'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './template.html',
      inject: 'body',
      body: './src/index.tsx',
    }),
    new MiniCssExtractPlugin({ filename: '[name].css' }),
  ],

  devServer: {
    historyApiFallback: true,
    compress: true,
    port: 3000,
  },
};
