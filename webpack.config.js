module.exports = {
  entry: "./app/index.jsx",
  output: {
    path: "./public",
    filename: "bundle.js",
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  },
  devServer: {
    inline: true,
    contentBase: './',
    port: 8000,
  },
}
