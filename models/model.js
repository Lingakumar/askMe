var MongoClient = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectID;

var url = "mongodb://localhost:27017/";
var dbo;

//create mongoDB and collection 
MongoClient.connect(url, function (err, db) {
  dbo = db.db("forum");
  dbo.createCollection("userinfo", function (err, res) {
    console.log("mongoDB Connected..!");
  });
});

exports.addUser = function(req, res, cbk) {
    dbo.collection('userinfo').insert(req.body, function (err, result) {
        cbk(null,result);
    });
}