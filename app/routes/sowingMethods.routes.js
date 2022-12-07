module.exports = app => {
    const sowingMethods = require("../controllers/sowingMethods.controller.js");
    var router = require("express").Router();
    router.get("/getsowingmethods", sowingMethods.getSowingMethods);
    router.post("/addsowingmethods", sowingMethods.addSowingMethods);
    app.use('/api/sowingmethods', router);
}