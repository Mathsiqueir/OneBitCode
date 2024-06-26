const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const path = require('path') //modulo para trabalhar com caminhos
module.exports = {
    entry:{
        //index: nome que ele vai dar ao arquivo / ./src/index.js - de onde ele vai buscar o arquivo para otimizar
        index: './src/index.js'
    },
    mode: 'development',
    module: {
        rules: [{
            test: /\.css$/,
            use: [MiniCssExtractPlugin.loader,'css-loader'],
        }],
    },
    plugins: [new MiniCssExtractPlugin()],
}