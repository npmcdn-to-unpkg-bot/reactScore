const path = require('path'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    nodeExternals = require('webpack-node-externals');

const SRC_DIR = path.resolve(__dirname, 'src'),
    SERVER_SRC_DIR = path.join(SRC_DIR, 'server'),
    APP_SRC_DIR = path.join(SRC_DIR, 'app'),
    BUILD_BIR = path.resolve(__dirname, 'build'),
    SERVER_BUILD_DIR = path.join(BUILD_BIR, 'server'),
    APP_BUILD_DIR = path.join(BUILD_BIR, 'app');

var serverConfig = {
  target: 'node',
  devtool: 'source-map',
  entry: path.join(SERVER_SRC_DIR, 'server.ts'),
  exclude: [
    'node_modules'
  ],
  output: {
    path: SERVER_BUILD_DIR,
    filename: 'server.js',
    devtoolModuleFilenameTemplate: "[absolute-resource-path]" 
  },
  resolve: {
    extensions: ['', '.ts', '.js']
  },
  externals: [nodeExternals()],
  module: {
    loaders: [
        {test: /\.ts$/, loaders: ['ts-loader']}
      ]
  }
},
clientConfig = {
  target: 'web',
  devtool: 'source-map',
  entry: path.join(APP_SRC_DIR, 'app.tsx'),
  exclude: [
    'node_modules'
  ],
  output: {
    path: APP_BUILD_DIR,
    filename: 'app.js',
    devtoolModuleFilenameTemplate: "[absolute-resource-path]" 
  },
  resolve: {
    extensions: ['', '.tsx', '.jsx']
  },
  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM'
  },
  module: {
    loaders: [
        {test: /\.tsx$/, loaders: ['ts-loader']}
      ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/app/index.html'
    })
  ]
};



module.exports = [
  serverConfig,
  clientConfig
];
