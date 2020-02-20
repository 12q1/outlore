const { Router } = require('express')
const router = new Router()
const { toJWT, toData } = require('../utils/jwt')
const auth = require('../middleware/middleware_auth')
const User = require('../models/model_user')
const db = require('../services/pgdb')

// Applying authentication middleware
router.use(auth)

router.get('/user/:userId', (req, res) => {
    const tokenId = parseInt(toData(req.headers.authorization.split(' ')[1]).userId)
    const userId = req.params.userId
    if (userId === tokenId) {
        User
            .findByPk(userId)
            .then(user => {
                delete user.dataValues.password
                res.send({ user })
            })
            .catch(err => console.log(err))
    } else {
        res.status(403).send({
            message: "You are not authorized to view this user's information"
        })
    }
})

module.exports = router