module.exports = (sequelize, Sequelize) => {
    const seedVarieties = sequelize.define("seedvarieties", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        varietyNameEng: {
            type: Sequelize.STRING
        },
        varietyNameUrdu: {
            type: Sequelize.STRING
        },
        landId: {
            type: Sequelize.INTEGER
        }
    });
    return seedVarieties;
};