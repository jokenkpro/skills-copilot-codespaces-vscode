// Create a web server that listens for requests and serves a comments page.

var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  fs.createReadStream('./comments.html').pipe(res);
});

server.listen(3000);