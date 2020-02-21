const { Router } = require('express')
const router = new Router()
const { toJWT, toData } = require('../utils/jwt')
const auth = require('../middleware/middleware_auth')
const User = require('../models/model_user')
const UserSources = require('../models/model_user_sources')
const db = require('../services/pgdb')

// Applying authentication middleware to all routes within this router
router.use(auth)

// ---Routes related to user---
router.get('/user/:userId', (req, res) => {
    const tokenId = toData(req.headers.authorization.split(' ')[1]).userId //decoding user id stored in JWT token
    const userId = parseInt(req.params.userId)
    if (userId === tokenId) {
        User
            .findByPk(userId)
            .then(user => {
                delete user.dataValues.password //removing password from user object 
                //TODO need to check if other values from the user object are leaking through
                res.send({ user })
            })
            .catch(err => console.log(err))
    } else {
        res.status(403).send({
            message: "You are not authorized to view this information"
        })
    }
})

// ---Routes related to user sources---
router.get('/user/:userId/sources', (req, res) => {
    const tokenId = toData(req.headers.authorization.split(' ')[1]).userId //decoding user id stored in JWT token
    const userId = parseInt(req.params.userId)
    if (userId === tokenId) {
        UserSources
            .findOne({ where: { userId: userId } })
            .then(sources => {
                delete sources.dataValues.id
                delete sources.dataValues.userId
                delete sources.dataValues.updatedAt
                delete sources.dataValues.createdAt
                res.send({ sources })
            })
            .catch(err => console.log(err))
    } else {
        res.status(403).send({
            message: "You are not authorized to view this information"
        })
    }
})

module.exports = router