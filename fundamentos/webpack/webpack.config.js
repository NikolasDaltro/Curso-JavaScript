const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    mode: 'development',
    entry: './src/principal.js',
    output: {
        filename: 'principal.js',
        path: __dirname +'/public'
    },
    plugins:[
        new MiniCssExtractPlugin({
            filename:"estilo.css"
        })
    ],
    module:{
        rules:[{
            test: /\.S?[ac]SS$/,
            use:[
                MiniCssExtractPlugin.loader,
               // 'style-loader', // Adiciona Css a Dom injetando a tag <style>
                'css-loader', //interpretar @import,url()...
                
            ]
        }]
    }
}
