var express = require('express');
var app = express();
var http = require('http');

var path = require('path');

app.get('/', function (req, res) {

    res.writeHead(200, {'Content-Type':'text/plain'});
    res.write('hello hisar');
    res.end();
})
http.createServer(app).listen(5555);
console.log("server is running now on 55555 port");
