const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require('../utils/db-connection');

const IdentityCard = sequelize.define('IdentityCard', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    cardNo: {
        type: DataTypes.INTEGER,
        unique: true,
        allowNull: false
    }
}, {
    timestamps: false
});

module.exports = IdentityCard;