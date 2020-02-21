const { Router } = require('express')
const router = new Router()
const { toJWT, toData } = require('../utils/jwt')
const auth = require('../middleware/middleware_auth')
const User = require('../models/model_user')
const UserSources = require('../models/model_user_sources')
const { passwordValidation, emailValidation } = require('../utils/validation')
const bcrypt = require('bcrypt')

// Applying authentication middleware to all routes within this router
router.use(auth)

// ---Routes related to user---

//retrieves user data (eg. email/id/update & creation time but NOT password info)
router.get('/user/:userId', (req, res, next) => {
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
            .catch(next) //handle error if db fails
    } else {
        res.status(403).send({
            message: "You are not authorized to view this information"
        })
    }
})

// permanently deletes user from db
router.delete('/user/:userId', (req, res, next) => {
    const tokenId = toData(req.headers.authorization.split(' ')[1]).userId //decoding user id stored in JWT token
    const userId = parseInt(req.params.userId)
    if (userId === tokenId) {
        User
            .destroy({ where: { id: userId } })
            .then(() =>
                res.send({
                    message: 'user deleted'
                })
            )
            //TODO recursively destroy other table rows connected to userid
            .catch(next) //handle error if db fails
    } else {
        res.status(403).send({
            message: "You are not authorized to perform this action"
        })
    }
})

// modifies user info 
router.patch('/user/:userId', (req, res, next) => {
    const tokenId = toData(req.headers.authorization.split(' ')[1]).userId //decoding user id stored in JWT token
    const userId = parseInt(req.params.userId)
    //Validation checks
    if (req.body.password && !passwordValidation(req.body.password)) return res.status(400).send({ message: 'password is not strong enough' })
    if (req.body.password) req.body.password = bcrypt.hashSync(req.body.password, 10)
    //if patch request body contains password then hash it
    if (req.body.email && !emailValidation(req.body.email)) return res.status(400).send({ message: 'email address is not valid' })
    if (userId === tokenId) {
        User
            .findByPk(userId)
            .then(user => user.update(req.body))
            .then(user => res.send({
                email: user.dataValues.email,
                created: user.dataValues.createdAt,
                updatedAt: user.updatedAt
            })) //omitting password from response
            .catch(next)
    } else {
        res.status(403).send({
            message: "You are not authorized to perform this action"
        })
    }
})

// ---Routes related to user sources---
router.get('/user/:userId/sources', (req, res, next) => {
    const tokenId = toData(req.headers.authorization.split(' ')[1]).userId //decoding user id stored in JWT token
    const userId = parseInt(req.params.userId)
    if (userId === tokenId) {
        UserSources
            .findOne({ where: { userId: userId } })
            .then(sources => {
                delete sources.dataValues.id //removing unwanted fields from object before returning
                delete sources.dataValues.userId
                delete sources.dataValues.updatedAt
                delete sources.dataValues.createdAt
                res.send({ sources })
            })
            .catch(next) //handle error if db fails
    } else {
        res.status(403).send({
            message: "You are not authorized to view this information"
        })
    }
})

module.exports = router