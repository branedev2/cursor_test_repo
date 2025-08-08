//{fact rule=clear-text-credentials@v1.0 defects=0}

import webpack from "webpack";

module.exports = [{
    plugins: [
        new webpack.DefinePlugin({
            'process.env': JSON.stringify({ DEBUG: process.env.DEBUG })
        })
    ]
}];

//{/fact}
