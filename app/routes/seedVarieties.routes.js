module.exports = app => {
    const seedVarieties = require("../controllers/seedVarieties.controller.js");
    var router = require("express").Router();
    router.get("/getseedvarieties", seedVarieties.getSeedVarieties);
    router.post("/addseedvarieties", seedVarieties.addSeedVarieties);
    app.use('/api/seedvarieties', router);
}