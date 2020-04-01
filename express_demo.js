var express = require('express');
var app = express();

app.get('/',function(req,res){
    //在这里访问数据库获取数据
    //通过res.send(data)发回数据
    res.send("Hello,World!");
})

var server = app.listen(8081,function(){
    var host = req.address().address;
    var port = server.address().port;
    console.log('应用实例，访问实际地址为 http://%s:%s',host,port);
})