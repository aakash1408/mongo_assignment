//var variable_module = require('module');

var url = require('url');
var q = url.parse('', true);


var path = require('path');



var http = require('http');

var server = http.createServer(function(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World\n');
});

server.listen(3000);