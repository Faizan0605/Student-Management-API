const { DataTypes } = require("sequelize");
const sequelize = require('../utils/db-connection');

const StudentCourses = sequelize.define('StudentCourses', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },

}, {
    timestamps: false
});

module.exports = StudentCourses;