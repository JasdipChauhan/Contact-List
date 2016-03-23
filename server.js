var express = require("express")
var app = express()

app.use(express.static(__dirname + "/public"))

app.get('/contactlist', function (req, res) {
	console.log("I received a GET request");

	person1 = {
		name: "Jasdip",
		email: "jasdip@email.com",
		number: "(111) 111-1111"
	};

	person2 = {
		name: "Goofie",
		email: "goofie@email.com",
		number: "(222) 222-2222"
	};

	person3 = {
		name: "Person3",
		email: "person3@email.com",
		number: "(333) 333-3333"
	};

	var contactlist = [person1, person2, person3];

	res.json(contactlist);
});

app.listen(3000);
console.log("running on port 3000");

