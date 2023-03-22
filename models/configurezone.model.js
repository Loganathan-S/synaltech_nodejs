const {DataTypes} = require('sequelize');

module.exports = (sequelize) => {
    return sequelize.define(
        'ConfigureZone',
        {
            id         : {type: DataTypes.INTEGER, allowNull: false, autoIncrement: true, primaryKey: true},
            userId         : {type: DataTypes.INTEGER, allowNull: false},
            zoneId         : {type: DataTypes.INTEGER, allowNull: false},
           // deviceDetails: {type: DataTypes.TEXT, allowNull: false},

        },
        {
            sequelize,
            timestamps: true,
            tableName : 'configurezone',
        }
    );
};
