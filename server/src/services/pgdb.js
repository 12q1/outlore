const Sequelize = require('sequelize')

const dbUrl = process.env.DATABASE_URL || 'postgres://postgres:secret@localhost:5432/postgres'
const pgdb = new Sequelize(dbUrl)

pgdb
    .sync()
    .then(() => console.log('Database schema updated'))
    .catch(console.error)

module.exports = pgdb