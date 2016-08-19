const path = require('path'),
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
    filename: path.join(SERVER_BUILD_DIR, 'server.js')
  },
  resolve: {
    extensions: ['', '.ts', '.js']
  },
  externals: [nodeExternals()],
  module: {
    loaders: [{test: /\.ts$/, loaders: ['ts-loader']}]
  }
};

module.exports = serverConfig;
