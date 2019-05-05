module.exports = {
  entry: ['./src/index.js'],
  // todo - need to set up production version.... D:
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', 'json']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './',
    hot: false,
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        secure: false
        // changeOrigin: true
        // bypass: function(req, res, proxyOptions) {
        //   console.log(res);
        //   // console.log(req, res, proxyOptions);
        //   // if (req.headers.accept.indexOf('html') !== -1) {
        //   //   console.log('Skipping proxy for browser request.');
        //   //   return '/index.html';
        //   // }
        // }
      }
    }
  },
  node: {
    //prevent webpack from injecting moacks to Node native modules
    //that are not required by client
    dgram: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty',
    //TODO might not want to disable fs?
    fs: 'empty'
  }
};
