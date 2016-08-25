const path = require('path'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    nodeExternals = require('webpack-node-externals');

const SRC_DIR = path.resolve(__dirname, 'src'),
    SERVER_SRC_DIR = path.join(SRC_DIR, 'server'),
    BUILD_BIR = path.resolve(__dirname, 'build'),
    SERVER_BUILD_DIR = path.join(BUILD_BIR, 'server');

var serverConfig = {
  target: 'node',
  entry: path.join(SERVER_SRC_DIR, 'server.ts'),
  exclude: [
    'node_modules'
  ],
  output: {
    path: SERVER_BUILD_DIR,
    filename: 'server.js'
  },
  resolve: {
    extensions: ['', '.ts', '.js']
  },
  externals: [nodeExternals()],
  module: {
    loaders: [
        {test: /\.ts$/, loaders: ['ts-loader']}
      ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/app/index.html',
      filename: '../app/index.html'
    })
  ]
};

module.exports = serverConfig;
