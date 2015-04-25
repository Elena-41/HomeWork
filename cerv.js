var http=require('http');
var fs = require('fs');
//var css = require('css');

var server=http.createServer(function(qw, ans)
{
ans.writeHead(200,{'Content-Type':'text/html'});
//ans.end ('Hello Word');

fs.readFile('text.html',function(err,soderj){

ans.end(soderj);

});

});
server.listen(8000);
console.log('Server Hello');