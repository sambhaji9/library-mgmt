var mongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/';

mongoClient.connect(url, function(err, database) {
    if (err) throw err;

    var dbo = database.db("library");
    dbo.collection('mathematics').insertMany([{
        "name": "Encyclopedia of Mathematics",
        "language": "English",
        "description": "Encompasses articles on the topic of mathematics",
        "availability": true
    },
    {
        "name": "Encyclopedia of Triangle Centers",
        "language": "English",
        "description": "Information about ten thousands of triangle centers, including Coordinate systemcoordinates, Operation (mathematics)operations, Incidence (geometry)incidence, equations, etc.",
        "availability": true
    },
    {
        "name": "EqWorld",
        "language": "English, Russian",
        "description": "Articles on mathematical equations",
        "availability": true
    },
    {
        "name": "MathWorld",
        "language": "English",
        "description": "Articles on a wide variety of mathematics related topics",
        "availability": true
    },
    {
        "name": "On-Line Encyclopedia of Integer Sequences",
        "language": "English",
        "description": "Information about hundred thousands of integer sequences, including formulas, related sequences, Computer programprograms, etc. ",
        "availability": true
    },
    {
        "name": "PlanetMath",
        "language": "English",
        "description": "Mathematics related topics and articles",
        "availability": true
    },
    {
        "name": "nLab",
        "language": "English",
        "description": "Category theory and related topics",
        "availability": true
    }], function(err, results) {
        if (err) throw err;

        console.log(results.result.n + " documents inserted");
        
        database.close();
    });
});