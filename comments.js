// Create web server
// 1. Create a new web server
// 2. Read the contents of the comments.json file
// 3. Send the contents of the comments.json file to the client

// 1. Create a new web server
var http = require('http');
var fs = require('fs');

var server = http.createServer(function (req, res) {
  // 2. Read the contents of the comments.json file
  fs.readFile('comments.json', 'utf-8', function (err, data) {
    // 3. Send the contents of the comments.json file to the client
    res.writeHead(200, {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    });
    res.end(data);
  });
});

server.listen(3000);