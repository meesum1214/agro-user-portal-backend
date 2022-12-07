module.exports = (sequelize, Sequelize) => {
    const landCrops = sequelize.define("landcrops", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        cropNameEng: {
            type: Sequelize.STRING
        },
        cropNameUrdu: {
            type: Sequelize.STRING
        },
        landId: {
            type: Sequelize.INTEGER
        }
    });
    return landCrops;
};