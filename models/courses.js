const { DataTypes } = require("sequelize");
const sequelize = require('../utils/db-connection');

const Courses = sequelize.define('Courses', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    timestamps: false
});

module.exports = Courses;