const {Sequelize} = require('sequelize');
const dbSynalTech = {};

const sequelize             = new Sequelize({
                                                dialect: 'sqlite',
                                                storage: 'Database/database.sqlite'
                                            });
dbSynalTech.Users           = require("./users.model")(sequelize);
dbSynalTech.Devices         = require("./devices.model")(sequelize);
dbSynalTech.Zones           = require("./zone.model")(sequelize);
dbSynalTech.Sections        = require("./section.model")(sequelize);
dbSynalTech.DeviceLocations = require("./devicelocation.model")(sequelize);
dbSynalTech.SwitchBoxs      = require("./switchbox.model")(sequelize);
dbSynalTech.ConfigureZone = require("./configurezone.model")(sequelize);

Object.keys(dbSynalTech).forEach(modelName => {
    if (dbSynalTech[modelName].dbSynalTech) {
        dbSynalTech[modelName].associate(dbSynalTech);
    }
});

dbSynalTech.sequelize = sequelize;
dbSynalTech.Sequelize = Sequelize;

module.exports = dbSynalTech;
