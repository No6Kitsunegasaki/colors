const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');

module.exports = {
  entry: {
    js: './src/js/app.js',
    html: './src/html/index.html',
    css: './src/css/main.css'
  },
  output: {
    filename: 'bundle.[name]',
    path: path.resolve(__dirname, 'public'),
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
      },
      { 
        test: /\.css$/,
        use: ExtractTextPlugin.extract(
          {
            fallback: 'style-loader',
            use: ["css-loader",
              {
                loader: "postcss-loader",
                options: {
                  plugins: () => [
                    require('postcss-easy-import')({ glob: true}),
                  ]
                },
              },
            ]
          },
        )
      },
    ]
  },
  plugins: [
    new ExtractTextPlugin('bundle.css'),
  ]
}
