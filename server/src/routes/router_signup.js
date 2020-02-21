const bcrypt = require('bcrypt')
const { Router } = require('express')
const router = new Router()
const User = require('../models/model_user')
const UserSources = require('../models/model_user_sources')
//const db = require('../services/pgdb')
//const { toJWT } = require('../utils/jwt')
const { passwordValidation, emailValidation } = require('../utils/validation')

router.post('/signup', (req, res, next) => {
    //Validation checks
    if (!passwordValidation(req.body.password)) return res.status(400).send({ message: 'password is not strong enough' })
    if (!emailValidation(req.body.email)) return res.status(400).send({ message: 'email address is not valid' })
    //TODO is this really the best way to validate? do some research
    //Sanitize user input?

    if (req.body.email && req.body.password) {
        const user = {
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password, 10),
        }
        UserSources
            .create(
                {
                    abcNews: true,
                    bbcNews: true,
                    user: {
                        email: user.email,
                        password: user.password
                    }
                }, {
                include: [User]
            }
            )
            //Special thanks to slideshowp2 for helping me fix the creation logic
            //https://stackoverflow.com/questions/60330280/how-to-create-with-association-in-sequelize/60331473#60331473
            .then(() =>
                res.send({
                    message: 'user created'
                })
            )
            //TODO send jwt to user after signup? or force them to login? check best practice
            .catch(() => res.status(500).send({
                message: 'server encounter an error when creating user (possible duplicate email)'
            }))

    } else {
        res.status(400).send({ message: 'please provide an email address and password' })
    }
})//end of signup route

module.exports = router