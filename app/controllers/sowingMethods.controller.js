const db = require('../models');
const SowingMethods = db.sowingMethods;

exports.getSowingMethods = async (req, res) => {
    try {
        const allSowingMethods = await SowingMethods.findAll();
        res.status(200).send(allSowingMethods);
    } catch (err) {
        res.status(500).send({ message: err.message });
    }
}

exports.addSowingMethods = async (req, res) => {
    const { sowingMethodEng, sowingMethodUrdu, landId } = req.body;
    if (!sowingMethodEng || !sowingMethodUrdu || !landId) {
        res.status(400).send({ message: 'Please fill all fields!' });
        return;
    }

    let temp = await SowingMethods.findOne({ where: { sowingMethodEng, landId } });
    if (temp) {
        res.status(400).send({ message: 'Sowing method already exists!' });
        return;
    }

    try {
        const sowingMethod = await SowingMethods.create({
            sowingMethodEng,
            sowingMethodUrdu,
            landId
        });
        res.status(200).send(sowingMethod);
    } catch (err) {
        res.status(500).send({ message: err.message });
    }
}