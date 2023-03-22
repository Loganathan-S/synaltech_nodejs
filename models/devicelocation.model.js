const {DataTypes} = require('sequelize');

module.exports = (sequelize) => {
    return sequelize.define(
        'DeviceLocations',
        {
            id         : {type: DataTypes.INTEGER, allowNull: false, autoIncrement: true, primaryKey: true},
            location: {type: DataTypes.TEXT, allowNull: false},
        },
        {
            sequelize,
            timestamps: true,
            tableName : 'devicelocation',
        }
    );
};



