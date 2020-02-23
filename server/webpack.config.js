var path = require('path');
 
module.exports = {
    context: path.join(__dirname, 'pokewar'),
    entry: {
        fight: './src/apps/fight/App.js', 
    }, 
    output: {
        filename: '[name].js', 
        path: __dirname + '/pokewar/static/js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/, 
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    }
};