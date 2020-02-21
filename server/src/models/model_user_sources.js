const Sequelize = require('sequelize')
const sequelize = require('../services/pgdb')
const User = require('./model_user')

const UserSources = sequelize.define('user_sources', {
    abcNews: {
        type: Sequelize.BOOLEAN,
    },
    bbcNews: {
        type: Sequelize.BOOLEAN,
    }
}, {
    tableName: 'user_sources'
})

UserSources.belongsTo(User)

module.exports = UserSources