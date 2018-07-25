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
    var contentType = req.headers['content-type'] ? req.headers['content-type'] : "";
    if(contentType && contentType.indexOf('application/json') != -1) {
        req.checkBody('keyWords','Please enter a valid search term.').notEmpty();
        var errors = req.validationErrors();
        if(errors) {
            res.send(errors);
        }
        else {
            modelObj.getRelatedQuest(req, res, function(err, result) {
                if (err) {
                    res.status(400).json({ message:'Something went wrong. Please try with another search term.', status: 'Failure' });
                  } else {
                    res.status(200).json(result);
                  }
            })
        }
    }
    else
    {
        res.status(400).json({ message:'Bad Request',status: 'Failure'});
    }
}