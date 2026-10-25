const { Sequelize, DataTypes } = require("sequelize");

const sequelize = require('../utils/db-connection');
const Students = sequelize.define('Students', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    email: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true
    },
    age: {
        type: DataTypes.INTEGER,
        allowNull: true
    }
}, {
    tableName: 'Students',
    timestamps: false
});

module.exports = Students;