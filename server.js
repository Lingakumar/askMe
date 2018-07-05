var express = require('express');
var http = require('http');
var MongoClient = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectID;
var bodyParser = require('body-parser')

var app = express();
app.use(bodyParser());
app.use(bodyParser.urlencoded({ extended: true }));
var url = "mongodb://localhost:27017/";
var dbo;

//create mongoDB and collection 
MongoClient.connect(url, function (err, db) {
    dbo = db.db("testMean");
    dbo.createCollection("userinfo", function (err, res) {
      console.log("mongoDB Connected..!");
    });
});

// Used to getAll user details
app.get('/userinfo', function (req, res) {
    dbo.collection('userinfo').find({}).toArray(function (err, result) {
      if (err) {
        res.status(400).json({ message: 'Something went wrong!' });
      } else {
        res.status(200).json(result);
      }
    });
  });
  

//To specify default folder/file(index.html)
app.use(express.static('public')); 

app.listen(3000);
console.log("Server Starts...");