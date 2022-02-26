
var express = require('express');
var app = express();
var port = process.env.port || 3000;

var fs = require('fs')

app.get('/', function(req,res){
    res.send('Welcome to Express Server !')
});

app.get('/getProducts', function(req,res){
    fs.readFile('products.json',function(err,data){
        if(err) throw err;
        res.send(JSON.parse(data))
    })
   
});

app.listen(port,function(err){
    if(err) throw err;
    console.log('server is running on port ' + port)
});