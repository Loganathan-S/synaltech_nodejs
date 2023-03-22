const {DataTypes} = require('sequelize');

module.exports = (sequelize) => {
    return sequelize.define(
        'Sections',
        {
            id         : {type: DataTypes.INTEGER, allowNull: false, autoIncrement: true, primaryKey: true},
            section: {type: DataTypes.TEXT, allowNull: false},
            checked: {type:DataTypes.BOOLEAN,allowNull:false}
        },
        {
            sequelize,
            timestamps: true,
            tableName : 'section',
        }
    );
};
