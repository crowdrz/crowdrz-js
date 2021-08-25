module.exports = {
  entry: './src/crowdrz.ts',
  output: {
    filename: './dist/bundle.js'
  },
  // Enable sourcemaps for debugging webpack's output.
  target: 'node',
  devtool: 'source-map',
  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: ['.webpack.js', '.web.js', '.ts', '.tsx', '.js']
  },
  module: {
    rules: [
      // All files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'.
      {test: /\.tsx?$/, loader: 'ts-loader'}
      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      // { test: /\.js$/, loader: "source-map-loader" },
    ]
  }
  // Other options...
}
