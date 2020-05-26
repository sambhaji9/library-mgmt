var express = require("express");
var app = express();
var bodyParser = require("body-parser");
const { MongoClient } = require("mongodb");

var mongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/';

const databaseName = 'library';

app.use(function (request, response, next) {
	response.header("Access-Control-Allow-Origin", "*");
	response.header("Content-Type", "application/x-www-form-urlencoded");
	response.header("Access-Control-Allow-Headers", "Origin, X-Requested-with, Content-TypeError, Content-Type, Accept");
	response.header("Access-Control-Allow-Methods", "POST, GET, OPTIONS, DELETE");
	next();
});
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

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
		database.close();
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
		database.close();
	}
});

app.post('/newSubjectArea', function (request, response) {
	var newSubjectArea = request.body.params.updates[0].value;

	mongoClient.connect(url, function(err, database) {
		if (err) throw err;

		var dbo = database.db(databaseName);
		dbo.collection("subjectAreas").insertOne({name: newSubjectArea, databaseName: newSubjectArea.toLowerCase()}, function(err, results) {
			if (err) throw err;
			
			response.status(200).json({message: results.insertedCount + ' documents inserted successfully', code: 'R00'});
			response.end();
		});
	});
});

app.listen(3000, function () {
	console.log("Server stated successfully");
});