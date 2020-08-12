var Sequelize = require("sequelize");
const db = require('../config/db');

const Favorite = db.define('favorite', {
    title: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    imdbID: {
        type: Sequelize.STRING,
        allowNull: false,
    },
})

module.exports = Favorite