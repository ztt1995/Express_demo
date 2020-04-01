var express = require('express');
var app = express();
app.use(express.static('public'));

app.get('/',function(req,res){
    //在这里访问数据库获取数据
    //通过res.send(data)发回数据
    console.log('主页GET请求');
    res.send("Hello,GET!");
})

app.get('/del_user',function(req,res){
    console.log('/del_user 响应delete请求');
    res.send('删除页面');
})

app.get('/list_user',function(req,res){
    console.log('/list_user GET请求');
    res.send('用户列表页面');
})

app.get('/ab*cd',function(req,res){
    console.log('/ab*cd GET请求');
    res.send('正则匹配');
    
})

var server = app.listen(8081,function(){
    var host = server.address().address;
    var port = server.address().port;
    console.log('应用实例，访问实际地址为 http://%s:%s',host,port);
})