module.exports = {
  entry: {
    js: './src/js/app.js',
    html: './src/html/index.html'
  },
  output: {
    filename: '[name].js',
    path: `${__dirname}/public`
  },
  module: {
    loaders: [
      {
        test: /\.html$/,
        loader: "file-loader?name=[name].[ext]"
      },
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        query: {
          presets: ["es2015", "react"]
        }
      }
    ]
  }
};
