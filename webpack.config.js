const path = require('path');
var glob = require('glob');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
var CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: glob.sync('./src/components/**/index.tsx').reduce(
    function (obj, el) {
      obj[path.parse(el).dir.split('/').pop()] = el;
      return obj;
    },
    { index: './src/index.tsx', style: './src/index.less' }
  ),
  output: {
    filename: (pathdata) => {
      if ('style' === pathdata.chunk.name) {
        return 'style.js';
      }
      return pathdata.chunk.name === 'index'
        ? 'index.js'
        : 'components/[name]/index.js';
    },
    path: path.resolve(__dirname, 'dist'),
    globalObject: 'this',
    library: {
      name: 'meson-components',
      type: 'umd',
    },
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
    new MiniCssExtractPlugin({ filename: '[name].css' }),
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src/components/*/style/*.less'),
          to: ({ absoluteFilename }) => {
            let result = absoluteFilename.split('/');
            const type = result[result.length - 3];
            return path.resolve(
              __dirname,
              `dist/components/${type}/style/[name][ext]`
            );
          },
        },
        {
          from: path.resolve(__dirname, 'src/index.less'),
          to: path.resolve(__dirname, `dist/[name][ext]`),
        },
        {
          from: path.resolve(__dirname, 'src/style'),
          to: 'style/',
        },
      ],
    }),
  ],

  devServer: {
    historyApiFallback: true,
    compress: true,
    port: 3000,
  },
};
