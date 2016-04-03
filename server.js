var express = require("express")
var app = express()

app.use(express.static(__dirname + "/public"))

app.get('/contactlist', function (req, res) {
	console.log("I received a GET request");


	var contactlist = [person1, person2, person3];

	res.json(contactlist);
});

app.listen(3000);
console.log("running on port 3000");

