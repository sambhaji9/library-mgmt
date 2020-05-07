var mongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/';

mongoClient.connect(url, function(err, database) {
    if (err) throw err;

    var dbo = database.db("library");
    // dbo.collection('mathematics').insertMany([{
    //     "name": "Encyclopedia of Mathematics",
    //     "language": "English",
    //     "description": "Encompasses articles on the topic of mathematics",
    //     "availability": true
    // },
    // {
    //     "name": "Encyclopedia of Triangle Centers",
    //     "language": "English",
    //     "description": "Information about ten thousands of triangle centers, including Coordinate systemcoordinates, Operation (mathematics)operations, Incidence (geometry)incidence, equations, etc.",
    //     "availability": true
    // },
    // {
    //     "name": "EqWorld",
    //     "language": "English, Russian",
    //     "description": "Articles on mathematical equations",
    //     "availability": true
    // },
    // {
    //     "name": "MathWorld",
    //     "language": "English",
    //     "description": "Articles on a wide variety of mathematics related topics",
    //     "availability": true
    // },
    // {
    //     "name": "On-Line Encyclopedia of Integer Sequences",
    //     "language": "English",
    //     "description": "Information about hundred thousands of integer sequences, including formulas, related sequences, Computer programprograms, etc. ",
    //     "availability": true
    // },
    // {
    //     "name": "PlanetMath",
    //     "language": "English",
    //     "description": "Mathematics related topics and articles",
    //     "availability": true
    // },
    // {
    //     "name": "nLab",
    //     "language": "English",
    //     "description": "Category theory and related topics",
    //     "availability": true
    // }], function(err, results) {
    //     if (err) throw err;

    //     console.log(results.result.n + " documents inserted");
        
    //     database.close();
    // });

    // dbo.collection('music').insertMany([{"name": "Bulgarian Rock Archives","language": "Bulgarian language, Bulgarian","description": "Archives of Bulgarian rock musicrock bands","available": true}, {"name": "Encyclopaedia Metallum","language": "English","description": "Archives of heavy musicheavy metal bands","available": true},{"name": "Grove Music Online","language": "English","description": "Mostly on historic and classical music worldwide; in print form is ''The New Grove Dictionary of Music and Musicians'', which has 20 printed volumes, and was first published in 1980","available": true},{"name": "MOOMA","language": "Hebrew language, Hebrew","description": "Articles on Israeli music and musical artists","available": true}], function(err, results) {
    //     console.log(results.insertedCount + " documents inserted successfully");
    // });

    // dbo.collection('biography').insertMany([{"name": "Australian Dictionary of Biography","language": "English","description": "Entries on notable Australians who have died", "description": true },{"name": "Croatian Biographical Lexicon","language": "Croatian languageCroatian","description": "Multi-volume biographical reference work on notable figures from Croatian history", "description": true },{"name": "Deutsche Biographie","language": "German languageGerman","description": "Biographies on notable German speaking people", "description": true },{"name": "Dictionary of Canadian Biography","language": "English, French","description": "Entries on notable Canadians", "description": true },{"name": "Dictionary of Irish Architects","language": "English","description": "Biographical information on Irish architects from 1720 to 1940","description": true },{"name": "Kdo byl kdo","language": "Czech languageCzech","description": "Biographies on notable [[CzechsCzech and [[Slovak people", "description": true },{"name": "Österreichisches Biographisches Lexikon 1815–1950","language": "German languageGerman","description": "Biographies on notable Austrians", "description": true },{"name": "Oxford Dictionary of National Biography","language": "English","description": "Comprehensive 66-volume reference work on notable figures from British history", "description": true},{"name": "Dictionary of New Zealand Biography","language": "English, [[Māori languageMāori","description": "Entries on notable New Zealanders who have died", "description": true },{"name": "Dizionario Biografico degli Italiani","language": "Italian","description": "Biographical Dictionary of Italian People, published by the [[Istituto dell'Enciclopedia ItalianaIstituto dell'Enciclopedia Italiana Treccani", "description": true }], function(err, results) {
    //     console.log(results.insertedCount + " documents inserted successfully");
    // });
});