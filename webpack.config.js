const path = require('path');

process.env.NODE_ENV="development";

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'main.js'
    },
    resolve: {
        alias: {
          'vue$': 'vue/dist/vue.esm.js' // 'vue/dist/vue.common.js' for webpack 1
        }
    },
    module: {
        
        rules: [
            { 
              test: /\.js$/,
              exclude: /(node_modules|bower_components)/,
              use: 'babel-loader', 
            },
            {
                test: /\.html$/,
                use: 'raw-loader'
            }
        ]
    },
    mode:'development',
};