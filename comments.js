// Create web server
// Create a new file comments.js and write the following code into it. This code will create a new web server and listen on port 8080. Also, you will create a new route /comments that will return JSON data.

// comments.js

var http = require('http');
var server = http.createServer(function(req, res) {
  res.writeHead(200, {"Content-Type": "application/json"});
  res.end(JSON.stringify({message: 'Hello World'}));
});
server.listen(8080);

// Run the server
// Open the command prompt and run the comments.js file using the following command.

// node comments.js
// Output
// This will produce the following output.

// Server running at http://