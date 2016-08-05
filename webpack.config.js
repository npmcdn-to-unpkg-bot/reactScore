const webpack = require('webpack'),
    path = require('path');

const SRC_DIR = path.resolve(__dirname, 'src'),
    SERVER_SRC_DIR = path.join(SRC_DIR, 'server'),
    BUILD_BIR = path.resolve(__dirname, 'build'),
    SERVER_BUILD_DIR = path.join(BUILD_BIR, 'server');

let serverConfig = {
  target: 'node',
  entry: SERVER_SRC_DIR + '/server.ts',
  output: {
    path: SERVER_BUILD_DIR,
    filename: 'server.js'
  },
  modules: {
    loaders: [{test: /\.ts$/, loaders: ['ts-loader']}]
  }
};

module.exports = serverConfig;