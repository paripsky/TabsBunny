const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
	mode: "development",
	entry: './src/index.jsx',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist')
	},
	devServer: {
		historyApiFallback: true,
		publicPath: '/'
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					// options: {
					// 	presets: ["@babel/preset-env", "@babel/preset-react"],
					// 	// plugins: ["@babel/plugin-proposal-class-properties"]
					// 	// plugins: ['@babel/plugin-proposal-object-rest-spread']
					// }
				}
			},
			{
				test: /\.css$/,
				use: [
					{ loader: "style-loader" },
					{ loader: "css-loader" }
				]
			},
			{
				test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
				use: [{
					loader: 'file-loader',
					options: {
						name: '[name].[ext]',
						outputPath: 'fonts/'
					}
				}]
			},
			{
				test: /\.(jpe?g|png|gif|svg)$/i,
				use: [{
					loader: 'file-loader',
					options: {
						name: '[name].[ext]',
						outputPath: 'images/'
					}
				}]
			},
			{
				test: /\.html$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '[name].[ext]',
							outputPath: ''
						}
					}
				]
			}
		]
	},
	plugins: [
		new CopyPlugin([
		  { from: './assets', to: './' },
		  { from: './src/popup.html', to: './' },
		]),
	  ],
	resolve: {
		extensions: ['.tsx', '.ts', '.js', '.jsx']
	},
	devtool: "inline-source-map"
};