const Sequelize = require('sequelize')

const dbUrl = process.env.DATABASE_URL || 'postgres://postgres:secret@localhost:5432/postgres'
const pgdb = new Sequelize(dbUrl)

pgdb
    //.sync() //TODO remove force in deployment {force: true}
    .sync({force:true})
    .then(() => console.log('Database schema updated'))
    .catch(err => {
        console.error("pgdb sync unsuccessful, shutting down...", err);
        process.exit(1)
    })

module.exports = pgdb