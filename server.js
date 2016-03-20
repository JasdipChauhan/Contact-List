var express = require("express")
var app = express()

app.get('/', function (req, res) {
	res.send("test message")
});

app.listen(1997);
console.log("server running since '97");

