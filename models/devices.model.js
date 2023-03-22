const {DataTypes} = require('sequelize');

module.exports = (sequelize) => {
    return sequelize.define(
        'Devices',
        {
            id         : {type: DataTypes.INTEGER, allowNull: false, autoIncrement: true, primaryKey: true},
            deviceId   : {type: DataTypes.STRING(200), allowNull: false},
            deviceName : {type: DataTypes.STRING(200), allowNull: true},
            description: {type: DataTypes.TEXT, allowNull: false},
            zoneId     : {type: DataTypes.INTEGER, allowNull: true},
            sectionId  : {type: DataTypes.INTEGER, allowNull: true},
            locationId  : {type: DataTypes.INTEGER, allowNull: true},
            checked :   {type:DataTypes.BOOLEAN,allowNull:true}
        },
        {
            sequelize,
            timestamps: true,
            tableName : 'devices',
        }
    );
};












