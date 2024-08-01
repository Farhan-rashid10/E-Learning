// webpack.config.js
module.exports = {
  // Other configurations...
  module: {
    rules: [
      // Other rules...
      {
        test: /\.md$/,
        use: 'file-loader'
      }
    ]
  }
};
