const {DataTypes} = require('sequelize');

module.exports = (sequelize) => {
    return sequelize.define(
        'SwitchBoxs',
        {
            id         : {type: DataTypes.INTEGER, allowNull: false, autoIncrement: true, primaryKey: true},
            zoneId     : {type: DataTypes.INTEGER, allowNull: true},
            sectionId  : {type: DataTypes.INTEGER, allowNull: true},
            locationId : {type: DataTypes.INTEGER, allowNull: true},
            noOfLights : {type: DataTypes.INTEGER, allowNull: true},
            noOfFans   : {type: DataTypes.INTEGER, allowNull: true},
            noOfSockets: {type: DataTypes.INTEGER, allowNull: true},
            noOfUSBS   : {type: DataTypes.INTEGER, allowNull: true},
        },
        {
            sequelize,
            timestamps: true,
            tableName : 'switchbox',
        }
    );
};

