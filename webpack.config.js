const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


module.exports = {
  entry: './index.tsx',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    extensions: [".js", ".jsx", ".json", ".ts", ".tsx", ".css", ".scss", "png", "jpg", "cur"],
  },
  module: {
    rules: [
      {
        enforce: "pre",
        test: /\.(ts|js|tsx|jsx)$/,
        use: ['source-map-loader'],
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react',
            ]
          }
        }
      },
      {
        test: /\.(ts|tsx)$/,
        use: ["source-map-loader","awesome-typescript-loader"],
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      },
      {
        test: /\.(jpg|png|svg)$/,
        use: {
          loader: 'url-loader',
        },
      },
      {
        test: /\.(woff(2)?|ttf|eot|otf)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/'
            }
          }
        ]
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname,'dist', 'main.html'),
    compress: true,
    port: 3000
  },
  plugins: [
    new HtmlWebpackPlugin({
    template: './public/index.html',
    filename: 'main.html',
  }),
    new MiniCssExtractPlugin(),
  ]
};




// const path = require("path");
// const webpack = require("webpack");
// const HtmlWebpackPlugin = require("html-webpack-plugin");
// const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
//
// const webpackConfig = (env) => ({
//   entry: "./src/index.tsx",
//   output: {
//     path: path.join(__dirname, "/dist"),
//     filename: "build.js"
//   },
//   module: {
//     rules: [
//       {
//         test: /\.(ts|js)x?$/,
//         loader: "ts-loader",
//         options: {
//           transpileOnly: true
//         },
//         exclude: /dist/
//       },
//       {
//         test: /\.m?js$/,
//         exclude: /(node_modules|bower_components)/,
//         use: {
//           loader: 'babel-loader',
//           options: {
//             presets: ['@babel/preset-env', '@babel/preset-react']
//           }
//         }
//       },
//       {
//         test: /\.css$/i,
//         use: ['style-loader', 'css-loader'],
//       },
//     ]
//   },
//   plugins: [
//     new HtmlWebpackPlugin({
//       template: "./public/index.html",
//       filename: 'main.html',
//     }),
//     // System vars
//     new webpack.DefinePlugin({
//       "process.env.PRODUCTION": env.production || !env.development,
//       "process.env.NAME": JSON.stringify(require("./package.json").name),
//       "process.env.VERSION": JSON.stringify(require("./package.json").version)
//     }),
//     new ForkTsCheckerWebpackPlugin({
//       eslint: {
//         files: "./src/**/*.{ts,tsx,js,jsx}" // required - same as command `eslint ./src/**/*.{ts,tsx,js,jsx} --ext .ts,.tsx,.js,.jsx`
//       }
//     })
//   ]
// });


// module.exports = webpackConfig;