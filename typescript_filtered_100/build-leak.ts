//{fact rule=insecure-connection@v1.0 defects=1}

import webpack from "webpack";

module.exports = [{
    plugins: [
        new webpack.DefinePlugin({
            "process.env": JSON.stringify(process.env)
        })
    ]
}];

//{/fact}