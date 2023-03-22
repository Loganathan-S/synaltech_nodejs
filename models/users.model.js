const {DataTypes} = require('sequelize');

module.exports = (sequelize) => {
    return sequelize.define(
        'Users',
        {
            id         : {type: DataTypes.INTEGER, allowNull: false, autoIncrement: true, primaryKey: true},
            email: {type: DataTypes.STRING(200), allowNull: false},
            password: {type: DataTypes.STRING(10), allowNull: false},
            name: {type: DataTypes.STRING(10), allowNull: false},
        },
        {
            sequelize,
            timestamps: true,
            tableName : 'users',
        }
    );
};

