var modelObj = require("../models/model.js");

exports.getWelcomeMsg = function(req,res){
    res.status(200).send({message:"Welcome to Skava Forum"});
}

exports.addTest = function(req,res) {
    modelObj.addUser(req, res, function (err, result) {
        if (err) {
          res.status(400).json({ message: 'Failure' });
        } else {
          res.status(200).json({ message: 'Success' });
        }
    });
}
exports.getRelatedQuestion = function(req,res) {
    modelObj.getRelatedQuest(req, res, function(err, result) {
        if (err) {
            res.status(400).json({ message: 'Failure' });
          } else {
            res.status(200).json(result);
          }
    })
}