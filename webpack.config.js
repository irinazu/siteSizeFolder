const path=require('path')

module.exports={
    mode:'development',
    devtool:'inline-source-map',
    module:{
        rules:[
            {
                test:/\.ts$/,
                use:'ts-loader',
                include:[path.resolve(__dirname,'static')]
            },
            {
                test: /\.css$/,
                use: [
                  'style-loader',
                  'css-loader'
                ]
            }
            
        ]
    },
    entry:'./static/index/req.ts',
    output:{
        filename:'main.js',
        path:path.join(__dirname,'static/out')
    },
    resolve: {
        extensions: ['.ts', '.js'],
      }
}