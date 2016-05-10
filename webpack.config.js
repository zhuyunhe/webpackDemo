var webpack = require('webpack');

module.exports = {
	entry: './src/index',
	output: {
		publicPath: '/build',
		path: './build',
		filename: '[name].js'
	}
};