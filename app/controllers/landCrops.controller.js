const db = require('../models');
const landCrops = db.crops;

exports.getCrops = async (req, res) => {
    try {
        const landCrop = await landCrops.findAll();
        res.status(200).send(landCrop);
    } catch (error) {
        res.status(500).send({
            message: error.message || "Some error occurred while retrieving cropnames."
        });
    }
};

exports.addCrops = async (req, res) => {
    const { cropNameEng, cropNameUrdu, landId } = req.body;
    const landCrop = await landCrops.findOne({ where: { cropNameEng } });

    if (landCrop) {
        res.status(400).send({ message: 'Crop already exists!' });
        return
    }

    await landCrops.create({ cropNameEng, cropNameUrdu, landId });
    return res.status(200).json({ message: 'Crop added successfully!' });
}