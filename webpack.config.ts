import * as webpack from 'webpack';
import * as path from 'path';
import * as HtmlWebpackPlugin from 'html-webpack-plugin';
import * as CircularDependencyPlugin from 'circular-dependency-plugin';
import * as ExtractTextPlugin from 'extract-text-webpack-plugin';

export const config = {
  target: 'web',
  context: path.resolve(__dirname, 'src'),
  devtool: 'cheap-module-eval-source-map',
  entry: {
    app: './main.ts',
    vendor: './vendor.ts'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    chunkFilename: '[name].[chunkhash].js'
  },
  resolve: {
    extensions: ['.ts', '.js', '.html', '.css'],
    modules: ['node_modules']
  },
  devServer: {
    host: 'localhost',
    port: 4000,
    // https: true,
    historyApiFallback: true,
    contentBase: [ path.join(__dirname, 'src') ]
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: 'raw-loader'
      },
      {
				test: /\.css$/,
				include: path.resolve(__dirname, 'src', 'app'),
				loader: 'raw-loader'
			},
      {
				test: /\.css$/,
				exclude: path.resolve(__dirname, 'src', 'app'),
				use: ExtractTextPlugin.extract({
					use: "raw-loader"
				})
      }, 
      // SASS loader and inject into components      
			{
				test: /\.scss$/,
				include: path.resolve(__dirname, 'src', 'app'),
				use: ['raw-loader', 'sass-loader']
			},
			// SASS global which not include in components
			{
				test: /\.scss$/,
				exclude: path.resolve(__dirname, 'src', 'app'),
				use: ExtractTextPlugin.extract({
					use: ['raw-loader', 'sass-loader']
				})

			},
      {
        test: /\.(scss)$/,
        use: [{
          loader: 'style-loader', // inject CSS to page
        }, {
          loader: 'css-loader', // translates CSS into CommonJS modules
        }, {
          loader: 'postcss-loader', // Run post css actions
          options: {
            plugins: function () { // post css plugins, can be exported to postcss.config.js
              return [
                require('precss'),
                require('autoprefixer')
              ];
            }
          }
        }, {
          loader: 'sass-loader' // compiles SASS to CSS
        }]
      },
      {
        test: /\.ts$/,
        use: [
          {
            loader: 'awesome-typescript-loader',
            options: {
              configFileName: path.resolve(__dirname, 'src', 'tsconfig.json')
            }
          },
          'angular2-template-loader'
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf|svg|png)$/,
        use: [ 'file-loader' ]
      }
    ]
  },
  plugins: [
    new webpack.ContextReplacementPlugin(
      /angular(\\|\/)core(\\|\/)(esm5)/,
      path.resolve(__dirname, '../src')
    ),
    new ExtractTextPlugin('[name].css'),
    new HtmlWebpackPlugin({
      template: './index.html',
      showErrors: true,
      inject: 'body',
      chunksSortMode: 'dependency',
      minify: false,
      title: 'TopWholesale'
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
      Popper: ['popper.js', 'default']
    }),
    new CircularDependencyPlugin({ exclude: /node_modules/ })
  ]
};

module.exports = config;