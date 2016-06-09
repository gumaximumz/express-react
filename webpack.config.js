var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: ['webpack/hot/dev-server'
    , path.resolve(__dirname, 'src/js/app.js')
    ],

    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
    },

    module: {
        loaders: [
             {
                test: /\.jsx?$/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,     // ถ้าเจอไฟล์ .css
                loader: 'style-loader!css-loader' // ให้ load ไฟล์นั้นด้วย style-loader และ css-loader
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loaders: ['react-hot', 'babel'] // เพิ่ม react-hot-loader
            }
        ]
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ]
};