const Sequelize = require('sequelize')
const sequelize = require('../services/pgdb')

const User = sequelize.define('user', {
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    }
}, {
    tableName: 'users'
})

module.exports = User