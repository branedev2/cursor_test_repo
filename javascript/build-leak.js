//{fact rule=clear-text-credentials@v1.0 defects=1}

const webpack = require("webpack");

module.exports = [{
    plugins: [
        new webpack.DefinePlugin({
            "process.env": JSON.stringify(process.env)
        })
    ]
}];

//{/fact}