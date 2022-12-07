const Sequelize = require('sequelize');
const sequelize = new Sequelize('cropdb', 'postgres', '12345', {
    host: 'localhost',
    dialect: 'postgres',
    operatorsAliases: false,
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.crops = require('./landCrops.model.js')(sequelize, Sequelize);
db.seedVarieties = require('./seedVarieties.model.js')(sequelize, Sequelize);
db.sowingMethods = require('./sowingMethods.model.js')(sequelize, Sequelize);

// let crops = require('../../allCrops.json');

// crops.map(async (item) => {
//     await db.cropname.create({
//         cropNameEng: item.crop,
//         cropNameUrdu: item.crop_urdu
//     });
// })




module.exports = db;