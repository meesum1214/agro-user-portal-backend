module.exports = (sequelize, Sequelize) => {
    const sowingMethods = sequelize.define("sowingmethods", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        sowingMethodEng: {
            type: Sequelize.STRING
        },
        sowingMethodUrdu: {
            type: Sequelize.STRING
        },
        landId: {
            type: Sequelize.INTEGER
        }
    });
    return sowingMethods;
}