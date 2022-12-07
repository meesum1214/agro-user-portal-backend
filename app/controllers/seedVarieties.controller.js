const db = require('../models');
const seedVarieties = db.seedVarieties;

exports.getSeedVarieties = async (req, res) => {
    try {
        const allSeedVarieties = await seedVarieties.findAll();
        res.status(200).send(allSeedVarieties);
    } catch (error) {
        res.status(500).send({
            message: error.message || "Some error occurred while retrieving cropnames."
        });
    }
};


exports.addSeedVarieties = async (req, res) => {
    try {
        const { varietyNameEng, varietyNameUrdu, landId } = req.body;
        if(!varietyNameEng || !varietyNameUrdu || !landId) return res.status(400).send({ message: "Please fill all the fields." });
        let temp = await seedVarieties.findOne({ where: { varietyNameEng, landId } });
        if (temp) {
            return res.status(400).send({ message: "Seed variety already exists." });
        }
        const newSeedVariety = await seedVarieties.create({
            varietyNameEng,
            varietyNameUrdu,
            landId
        });
        res.status(200).send(newSeedVariety);
    } catch (error) {
        res.status(500).send({
            message: error.message || "Some error occurred while adding new seed variety."
        });
    }
}