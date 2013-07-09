var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
    buf = new Buffer(64);
    len = buf.write(fs.readFileSync('index.html', 'ascii'));
    response.send(buf.toString('ascii', 0, len));
  // response.send('Hello World 2!');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});