var appRouter = function(app){
    var controllerObj = require("../controllers/controller.js");
    app.route("/rest/api/welcome").get(controllerObj.getWelcomeMsg);
}

module.exports = appRouter;