var express = require('express');
var app = express();
app.use(express.static('public'));

var fs = require('fs');
// 处理enctype="application/x-www-form-urlencoded"编码的数据
var bodyParser = require('body-parser');
// 如果含有图片等数据，需要借助中间件，这里使用multer中间件。
var multer = require('multer');

app.use(bodyParser.urlencoded({extended:false}))
app.use(multer({dest:'/tmp'}).array('image'));

app.get('/index.html',function(req,res){
    res.sendFile(__dirname + '/' + 'index.html');
})

app.post('/file_upload',function(req,res){
    console.log(req.files[0]); //上传文件信息
    var des_file = __dirname + '/' + 'a.docx';
    fs.readFile(req.files[0].path,function(err,data){
        fs.writeFile(des_file,data,function(err){
            if(err){
                console.log(err);
            }else{
                response={message:'File uploaded successful',filename:req.files[0].originalname};
            }
            console.log(response);
            res.end(JSON.stringify(response));
            
        })
    })

});

var server = app.listen(8081,function(req,res){
    var host = server.address().address;
    var port = server.address().port;
    console.log('应用实例，访问地址为 http://%s:%s',host,port);
    
})

