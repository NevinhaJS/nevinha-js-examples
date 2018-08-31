const path = require('path');

function resolveModule(name) {
	return path.resolve(__dirname, `src/${name}`);
}

module.exports = {
	entry: [
		'core-js/es6/symbol',
		'core-js/fn/array/find',
		'core-js/fn/object/assign',
		'core-js/fn/string/ends-with',
		resolveModule('index.js')
	],

	module: {
    rules: [
      {
        test: /\.js$/,
        use: ["source-map-loader"],
        enforce: "pre"
      },

			{
        exclude: /node_modules/, loader: 'babel-loader', test: /\.js$/
      }
    ]
  },

  devtool: "source-map",

	output: {
		filename: 'bundle.js',
		path: path.resolve('./dist')
	},
};