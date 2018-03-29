const webpack = require('webpack')

module.exports = {
    entry: './ex/index.jsx',//Arquivo de Entreda
    output: { //Arquivo de Saida
        path: __dirname + '/public', 
        filename: './bundle.js'
    },
    devServer: {//Configuração do Servidor
        port: 8080,
        contentBase: './public'//Aonde vai estar o Arquivo de Entrada e o bundle
    },
    resolve:{
        extensions: ['', '.js','.jsx']
    },
    module:{
        loaders:[{
            test: /.jsx?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query:{
                presets: ['es2015', 'react'],
                plugins: ['transform-object-rest-spread']
            }
        }]
    }
}