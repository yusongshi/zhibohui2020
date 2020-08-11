var path = require("path");
module.exports={
    entry:'./main.js',
    output:{
        //path:'./dist/js',
        path:path.resolve(__dirname,'./src/dist/js'),
        filename:'bundle.js'
    },
    module:{
        rules: [
            {
                //判断是否是css文件
                test: /\.css$/,
                //不用在指定文件设置loader
                use: ['style-loader', 'css-loader'] 
            }
        ]
    }
};
