module.exports = {
  entry: './app.ts',
  output: {
    filename: 'bundle.js',
  },
  module: {
    rules: [{ test: /\.ts$/, loader: 'ts-loader' }],
  },
}

// module.exports = {
//   entry:"./src/app.ts",
//   output: {
//       filename:"./bundle.js"
//   },
//   devtool:"source-map",
//   resolve: {
//       extensions: ["*",".ts",".tsx",".js"]
//   },
//   module:{
//       rules: [
//           {test:/\.tsx?$/, loader:"ts-loader"}
//       ]
//   }
// };
