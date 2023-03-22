const {DataTypes} = require('sequelize');

module.exports = (sequelize) => {
    return sequelize.define(
        'Zones',
        {
            id         : {type: DataTypes.INTEGER, allowNull: false, autoIncrement: true, primaryKey: true},
            zoneName: {type: DataTypes.TEXT, allowNull: false},
        },
        {
            sequelize,
            timestamps: true,
            tableName : 'zone',
        }
    );
};
