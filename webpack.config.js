const devConfig = require('./webpackConf.base.js');

// console.log('hi', devConfig)
// module.exports = (env) => {
//   return require(`./webpack.config.${env}`)
// }

module.exports = (env) => {
  // console.log('Object.keys(env)[0]',Object.keys(env)[0])
  const cfg = require(`./webpackConf.${Object.keys(env)[0]}.js`)
  console.log('cfg', cfg);
  return cfg;
  // return devConfig
}

// const path = require("path");
// const HtmlWebpackPlugin = require("html-webpack-plugin");
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");
//
// module.exports = {
//   entry: './index.tsx',
//   output: {
//     filename: 'main.js',
//     path: path.resolve(__dirname, 'dist'),
//   },
//   devtool: 'inline-source-map',
//   resolve: {
//     extensions: [".js", ".jsx", ".json", ".ts", ".tsx", ".css", ".scss", "png", "jpg", "cur"],
//   },
//   module: {
//     rules: [
//       {
//         test: /\.m?js$/,
//         exclude: /(node_modules|bower_components)/,
//         use: {
//           loader: 'babel-loader',
//           options: {
//             presets: [
//               '@babel/preset-env',
//               '@babel/preset-react',
//             ]
//           }
//         }
//       },
//       {
//         test: /\.(ts|tsx)$/,
//         use: ["awesome-typescript-loader"],
//       },
//       {
//         test: /\.css$/i,
//         use: [MiniCssExtractPlugin.loader, 'css-loader'],
//       },
//       {
//         test: /\.s[ac]ss$/i,
//         use: [
//           // Creates `style` nodes from JS strings
//           'style-loader',
//           // Translates CSS into CommonJS
//           'css-loader',
//           // Compiles Sass to CSS
//           'sass-loader',
//         ],
//       },
//       {
//         test: /\.(jpg|png|svg)$/,
//         use: {
//           loader: 'url-loader',
//         },
//       },
//       {
//         test: /\.(woff(2)?|ttf|eot|otf)(\?v=\d+\.\d+\.\d+)?$/,
//         use: [
//           {
//             loader: 'file-loader',
//             options: {
//               name: '[name].[ext]',
//               outputPath: 'fonts/'
//             }
//           }
//         ]
//       }
//     ]
//   },
//   devServer: {
//     contentBase: path.join(__dirname,'dist', 'main.html'),
//     compress: true,
//     port: 3000
//   },
//   plugins: [
//     new HtmlWebpackPlugin({
//       template: './public/index.html',
//       filename: 'main.html',
//     }),
//     new MiniCssExtractPlugin(),
//   ],
//   optimization: {
//     minimize: false,
//   }
// };