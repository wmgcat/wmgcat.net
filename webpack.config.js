// Модули:
const webpack = require('webpack'),
      MiniCssExtractPlugin = require('mini-css-extract-plugin'),
      CssMinimizerPlugin = require('css-minimizer-webpack-plugin'),
      HtmlWebpackPlugin = require('html-webpack-plugin'),
      TerserPlugin = require('terser-webpack-plugin');

const config = {
  entry: './main.js',
  output: {
    path: require('path').resolve(__dirname, 'dist'),
    filename: 'main.bundle.js'
  },
  devServer: {
    static: {
      directory: require('path').join(__dirname, './')
    },
    compress: false,
    https: true,
    port: 8080,
    client: {
      overlay: false,
      reconnect: 3
    },
    open: {
      app: {
        name: 'safari',
        arguments: ['--new-window']
      }
    }
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg|gif|svg|mp3|wav)$/i,
        use: [
          {
            loader: 'url-loader',
            options: { esModule: false }
          }
        ]
      },
			{
				test: /\.js$/,
				loader: 'babel-loader'
			},
			{
				test: /\.s[ac]ss$/i,
				use: ['style-loader', 'css-loader', 'sass-loader']
			}
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      meta: { viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no' },
      minify: {
        collapseWhitespace: false,
        keepClosingSlash: false,
        removeComments: false,
        removeRedundantAttributes: false,
        removeScriptTypeAttributes: false,
        removeStyleLinkTypeAttributes: false,
        useShortDoctype: false
      }
    }),
    new MiniCssExtractPlugin({ filename: 'main.css' })
  ],
  optimization: {
    minimize: false,
    minimizer: [ new CssMinimizerPlugin() ]
  }
}

module.exports = (env, argv) => {
  if (argv.mode == 'development') {
    console.log('Внимание! Используется конфиг для разработки!');
    return config;
  }

  console.log('Используется конфиг для игроков!');
  config.plugins[0].minify = {
    collapseWhitespace: true,
    keepClosingSlash: true,
    removeComments: true,
    removeRedundantAttributes: true,
    removeScriptTypeAttributes: true,
    removeStyleLinkTypeAttributes: true,
    useShortDoctype: true
  }
  config.optimization.minimize = true;
  config.optimization.minimizer.push(new TerserPlugin({}));
  return config;
}