var colors = require('colors');
var http = require('http');

http.createServer(function(req, res){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end('<h1>Hello World</h1>');

console.log('Hello World'.green);
}).listen('33333', function(){
        console.log('Server Running!!');
});
