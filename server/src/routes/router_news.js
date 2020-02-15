const { Router } = require('express')
const router = new Router()

const NewsAPI = require('newsapi')
const newsapi = new NewsAPI(process.env.NEWSAPIKEY)

getNewsAsync = async () => {
    return await newsapi.v2.topHeadlines({
        sources: 'bbc-news'
    })
}

router.get(
    '/news',
    (req, res) => {
        getNewsAsync()
            .then(result => res.json(result.articles))
            .catch(error => console.log(error))
    }
)

module.exports = router