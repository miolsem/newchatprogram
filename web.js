var express = require("express");
var app = express();
app.use(express.logger());

app.get('/', function(request, response) {
	response.send('Hello world!');
});

var post = process.env.POST || 5000;
app.listen(port, function () {
	console.log("Listening on " + port);
});