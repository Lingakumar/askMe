var express = require('express');
var http = require('http');
var MongoClient = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectID;
var bodyParser = require('body-parser');
var routes = require("./routes/routes.js");

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
routes(app);

var server = app.listen(3000, function () {
  console.log("app running on port.", server.address().port);
});
