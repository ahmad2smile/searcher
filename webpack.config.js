var path = require("path");

module.exports = {    
    entry: "./test/index.js",
    output: {
        path: path.join(__dirname, 'test'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
        ]
    }
}