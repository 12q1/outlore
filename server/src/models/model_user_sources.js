const Sequelize = require('sequelize')
const sequelize = require('../services/pgdb')

const UserSources = sequelize.define('user_sources', {
    userId: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    abcNews: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    },
    bbcNews: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    }
}, {
    tableName: 'user_sources'
})

module.exports = UserSources