const bcrypt = require('bcrypt')
const { Router } = require('express')
const router = new Router()
const User = require('../models/model_user')
const db = require('../services/pgdb')
const { toJWT } = require('../utils/jwt')

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