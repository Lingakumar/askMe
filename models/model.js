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
exports.getRelatedQuest = function(req, res, cbk) {
  var searchTerm = req.body.keyWords;
  var limit = req.body.limit ? req.body.limit : 5;
  var pageNumber = req.body.pageNumber ? req.body.pageNumber : 1;
  dbo.ensureIndex("questions", {
    title: "text"
  }, function(err, indexName) {
    if(err) {
      console.log("Error while indexing..");
    }
    else {
      console.log(indexName);
    }
  });
  dbo.collection("questions")
    .find({$text: {$search: searchTerm}}, {score: {$meta: "textScore"}})
    .sort({score: {$meta: "textScore"}})
    .project({ score: { $meta: "textScore" } })
    .limit(limit)
    .skip((pageNumber - 1) * limit)
    .toArray(function(err, result){
    if(err) {
      console.log("Somthing went wrong");
      cbk(err);
    }
    else {
      console.log(result);
      cbk(null, result);
    }
  })
}