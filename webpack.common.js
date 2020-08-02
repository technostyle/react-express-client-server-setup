const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    app: './client/app/index.jsx'
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Database manager',
      template: path.resolve(__dirname, './client/html/template.html')
    })
  ],
  resolve: {
    modules: ['app', 'node_modules'],
    extensions: ['.js', '.jsx']
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'client/dist')
  }
}
