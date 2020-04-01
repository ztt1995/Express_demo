var express = require('express');
var app = express();
app.use(express.static('public'));

//创建application/x-www-form-urlencoded 编码解析
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({extended:false});

app.get('/index.html',function(req,res){
    res.sendFile(__dirname + '/' + 'index.html');
})

app.post('/process_get',urlencodedParser,function(req,res){
    var response = {
        'first_name':req.body.first_name,
        'last_name':req.body.last_name
    };
    console.log(response);
    res.send(JSON.stringify(response))
});

var server = app.listen(8081,function(req,res){
    var host = server.address().address;
    var port = server.address().port;
    console.log('应用实例，访问地址为 http://%s:%s',host,port);
    
})

