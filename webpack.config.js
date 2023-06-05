const { VueLoaderPlugin } = require('vue-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
	entry: {
		main: path.resolve(__dirname, './src/index.js')
	},
	module: {
		rules: [
			{
				test: /\.(?:gif|png|jpeg)$/i,
				type: 'asset/resource'
			},
			{
				test: /\.vue$/,
				loader: 'vue-loader'
			},
			{
				test: /\.js$/,
				loader: 'babel-loader'
			},
			{
				test: /\.s[ac]ss$/i,
				use: ['style-loader', 'css-loader', 'sass-loader']
			},
		]
	},
	plugins: [
		new HtmlWebpackPlugin({ template: './src/index.html' }),
		new VueLoaderPlugin()
	]
}