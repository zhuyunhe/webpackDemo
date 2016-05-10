var webpack = require('webpack');

module.exports = {
	entry: {
		index : './src/index',
		index2: './src/index2'		
	},
	output: {
		publicPath: '../build/',
		path: './build',
		filename: '[name].js'
	},
	module:{
		loaders:[
			{
				test:/\.js$/,
				loader:'babel-loader?presets=es2015'
			},
			{
				test:/\.css$/,
				loader:'style-loader!css-loader!autoprefixer-loader'
			},
			{
				test:/\.less/,
				loader:'style-loader!css-loader!autoprefixer-loader!less-loader'
			},
			{
				test:/\.(eot|woff|svg|ttf|woff2|gif)(\?|$)/,
				loader:'file-loader?name=[hash].[ext]'
			},
			{
				test:/\.(png|jpg)$/,
				loader:'url?limit=9000&name=[hash].[ext]'
			}
		]
	},
	plugins : [
				new webpack.optimize.CommonsChunkPlugin('common.js')
	]
};