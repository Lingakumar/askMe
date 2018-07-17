var appRouter = function(app){
    var controllerObj = require("../controllers/controller.js");
    app.route("/api/rest/welcome").get(controllerObj.getWelcomeMsg);
    app.route("/api/rest/add").post(controllerObj.addTest);
    app.route("/api/rest/getRelatedQuestions").post(controllerObj.getRelatedQuestion);
}

module.exports = appRouter;