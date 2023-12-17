const path = require('path');

module.exports = {
	entry:"./src/app.ts",
	mode: "development",
	output: {
		filename: 'bundle-webpack.js',
		path: path.resolve(__dirname, 'kesky'),
		library: 'MyLibrary',
	},
	devtool:"source-map",
	resolve: {
		extensions: ["*",".ts",".tsx",".js"]
	},
	module:{
		rules: [
			{ test:/\.tsx?$/, loader:"ts-loader" }
		]
	}
};