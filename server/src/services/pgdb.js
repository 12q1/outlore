const Sequelize = require('sequelize')

const dbUrl = process.env.DATABASE_URL || 'postgres://postgres:secret@localhost:5432/postgres'
const pgdb = new Sequelize(dbUrl)

pgdb
    .sync({force: true}) //TODO remove force in deployment
    .then(() => console.log('Database schema updated'))
    .catch(err => {
        console.error("pgdb sync unsuccessful, shutting down...", err);
        process.exit(1)
    })

module.exports = pgdb