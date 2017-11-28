var path=require("path");
var webpack = require('webpack');

var hotMiddlewareScript = 'webpack-hot-middleware/client?reload=true';
var publicPath = 'http://localhost:3000/';

module.exports={
	entry: {
		app:["./public/javascripts/index.js",hotMiddlewareScript]
	},
	output: {
		path: path.resolve(__dirname, './public'),
		filename: "./bundle.js",
		publicPath: publicPath
	},
	module: {
	          loaders: [
		            {test: /\.js$/, loader: "babel",query: {presets: ['react','es2015']}},
		            {test: /\.jsx$/,loader: 'babel', query: {presets: ['react', 'es2015']}},
		            {test: /\.css$/, loader: "style!css"},
		            {test: /\.(jpg|png|otf)$/, loader: "url?limit=8192"},
		            {test: /\.scss$/, loader: "style!css!sass"}
	          ]
    	},
	plugins: [
		new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin()
	]
};