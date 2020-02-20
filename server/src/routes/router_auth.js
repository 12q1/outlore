const { Router } = require('express')
const { toJWT, toData } = require('../utils/jwt')
const auth = require('../middleware/middleware_auth')

const router = new Router()

router.get('/secret-endpoint', auth, (req, res) => {
    res.send({
        message: `Thanks for visiting the secret endpoint ${req.user.email}.`,
    })
})

module.exports = router