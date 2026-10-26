const { DataTypes } = require("sequelize");
const sequelize = require('../utils/db-connection');

const Department = sequelize.define('Department', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING
    }
}, {
    timestamps: false
});

module.exports = Department;