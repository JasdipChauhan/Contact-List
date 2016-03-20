var express = require("express");
var app = express();

app.get('/', function (req, res) {
	res.send("hello from server.js")
});

app.listen(8000);
console.log("server running on 8000");

