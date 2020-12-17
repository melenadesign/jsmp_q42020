const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const isDevEnv = process.env.NODE_ENV === 'development';
const isProdEnv = !isDevEnv;
const { HotModuleReplacementPlugin } = require('webpack');
module.exports = {
  context: path.resolve(__dirname, 'src'),
  mode: 'development',
  entry: {
    main: './index.ts'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    port: 8080
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
      minify: {
        collapseWhitespace: isProdEnv
      }
    }),
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src/assets/favicon.ico'),
          to: path.resolve(__dirname, 'dist')
        }
      ]
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css'
    }),
    new HotModuleReplacementPlugin({
      hot: isProdEnv
    })
  ],
  module: {
    rules: [
      {
        test: /\.(css|scss|sass)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: ''
            }
          },
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        use: [{ loader: 'file-loader' }]
      },
      {
        test: /\.(ttf|woff|woff2|eot)$/,
        use: [{ loader: 'file-loader' }]
      },
      {
        test: /\.(ts)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-typescript']
        }
      }
    ]
  },
  resolve: { extensions: ['.js', '.scss', '.json'] },
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  }
};
