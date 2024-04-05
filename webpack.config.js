const path = require('path');

module.exports = {
  resolve: {
    fallback: {
      fs: false,
      http: require.resolve('stream-http'),
      https: require.resolve('https-browserify'),
      os: require.resolve('os-browserify/browser'),
      url: require.resolve('url/'),
      zlib: require.resolve('browserify-zlib'),
      assert: require.resolve('assert/'),
      stream: require.resolve('stream-browserify'),
      crypto: require.resolve('crypto-browserify'),
      path: require.resolve('path-browserify'),
      querystring: require.resolve('querystring-es3'),
      process: require.resolve('process/browser')
    }
  },
  // Your other webpack configurations can go here
};
