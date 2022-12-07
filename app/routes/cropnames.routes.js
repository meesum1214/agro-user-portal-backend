module.exports = app => {
    const crops = require("../controllers/landCrops.controller.js");
    var router = require("express").Router();
    router.get("/getcrops", crops.getCrops);
    router.post("/addcrops", crops.addCrops);
    app.use('/api/cropnames', router);
}