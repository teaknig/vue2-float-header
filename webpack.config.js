/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
  mode: 'development',
  entry: './example/index.js',
  output: {
    path: path.resolve(__dirname, 'example/dist'),
    filename: 'dist/build.js',
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: {
          loader: 'vue-loader',
        },
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          'vue-style-loader',
          { loader: 'css-loader', options: { esModule: false } },
          'sass-loader',
        ],
      },
      {
        test: /\.css$/i,
        use: [
          'vue-style-loader',
          { loader: 'css-loader', options: { esModule: false } },
        ],
      },
    ],
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'example'),
    compress: true,
    port: 9000,
  },
  plugins: [new VueLoaderPlugin()],
}
