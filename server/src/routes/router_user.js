const bcrypt = require('bcrypt')
const { Router } = require('express')
const router = new Router()
const User = require('../models/model_user')
const db = require('../services/pgdb')
const { toJWT } = require('../utils/jwt')
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
            password: bcrypt.hashSync(req.body.password, 10)
        }
        db.sync()
            .then(
                User
                    .findOne({
                        where: {
                            email: req.body.email
                        }
                    })
                    .then(entity => {
                        if (entity) {
                            res.status(400).send({
                                message: 'User with that email already exists'
                            })
                        } else {
                            User
                                .create({
                                    email: user.email,
                                    password: user.password
                                })
                                .then(() => res.send({
                                    message: 'user created'
                                }))
                                //TODO send jwt to user after signup? or force them to login? check best practice
                        }
                    })
            )
    } else {
        res.status(400).send({ message: 'please provide an email address and password' })
    }
})//end of signup route

router.post('/login', (req, res, next) => {
    if (!req.body.email || !req.body.password) {
        res.status(400).send({ message: 'please provide a valid email and password' })
    } else {
        db.sync()
            .then(
                User
                    .findOne({
                        where: {
                            email: req.body.email
                        }
                    })
                    .then(entity => {
                        if (!entity) {
                            res.status(400).send({
                                message: 'User with that email does not exist'
                            })
                        }

                        // 2. use bcrypt.compareSync to check the password against the stored hash
                        else if (bcrypt.compareSync(req.body.password, entity.password)) {

                            // 3. if the password is correct, return a JWT with the userId of the user (user.id)
                            res.send({
                                jwt: toJWT({ userId: entity.id })
                            })
                        }
                        else {
                            res.status(400).send({
                                message: 'Password was incorrect'
                            })
                        }
                    })
                    .catch(err => {
                        console.error(err)
                        res.status(500).send({
                            message: 'Something went wrong'
                        })
                    })
            )
    }
})//end of login route


module.exports = router