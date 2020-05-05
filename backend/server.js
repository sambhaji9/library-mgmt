var express = require("express");
var app = express();

var mongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/';

const databaseName = 'library';

app.use(function (request, response, next) {
	response.header("Access-Control-Allow-Origin", "*");
	response.header("Access-Control-Allow-Headers", "Origin, X-Requested-with, Content-TypeError, Accept");
	next();
});

app.get("/", function (request, response) {
	response.send("Welcome to Library management system");
});

app.get('/subjectAreas', function (request, response) {
	mongoClient.connect(url, function (err, database) {
		if (err) throw err;

		var dbo = database.db(databaseName);
		dbo.collection("subjectAreas").find({}).toArray(function (err, results) {
			if (err) throw err;

			response.send(results);
			response.end();
		});
	});
});

app.get('/subject', function (request, response) {
	var name = request.query.name;

	if (typeof name !== 'undefined') {
		mongoClient.connect(url, function (err, database) {
			if (err) throw err;

			var dbo = database.db(databaseName);
			dbo.collection(name).find({}).toArray(function (err, results) {
				if (err) throw err;

				response.send(results);
				response.end();
			});
		});
	}
});

app.listen(3000, function () {
	console.log("Server stated successfully");
});