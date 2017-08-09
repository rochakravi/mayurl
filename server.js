var express = require('express');
var app = express();


// viewed at http://localhost:8080
app.get('/', function(req, res) {
res.sendFile(__dirname + '/index.html');});
app.use(express.static(__dirname + '/public'));

app.listen(4000);

console.log('server is running.....');


