const express = require('express')
const bodyParser = require('body-parser')

const cors = require('cors')
const corsMiddleware = cors()

const app = express()
const port = process.env.PORT || 3000

//---Database---
const pgdb = require('./src/services/pgdb')
const dbWorker = require('./src/services/dbWorker')

console.log(dbWorker.unfluffArticleHtml('https://www.engadget.com/2020/03/08/google-location-data-embroils-innocent-cyclist/'))

//importing router modules
const authRouter = require('./src/routes/router_auth')
const newsRouter = require('./src/routes/router_news')
const signupRouter = require('./src/routes/router_signup')
const loginRouter = require('./src/routes/router_login')
const userRouter = require('./src/routes/router_user')

const loggingMiddleware = (req, res, next) => {
    console.log("request received at " + new Date())
    res.setHeader('X-T-Time', new Date())
    next()
}

//---Middleware---
// allows shared resources ! Must be first middleware
app.use(corsMiddleware)
// request Logging
app.use(loggingMiddleware);
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json())

//---Routes---
app.use(authRouter)
app.use(newsRouter)
app.use(signupRouter)
app.use(loginRouter)
app.use(userRouter)

//---Endpoints---
app.get('/', (req, res) => res.send('Test API running'))

app.post('/', (req, res) => {
    console.log(req.body)
    res.json({
        message: "body received"
    })
})

app.listen(port, () => console.log(`test app listening on port ${port}`))