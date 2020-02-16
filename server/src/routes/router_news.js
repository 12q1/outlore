const { Router } = require('express')
const router = new Router()

const NewsAPI = require('newsapi')
const newsapi = new NewsAPI(process.env.NEWSAPIKEY)

getHeadlinesAsync = async () => {
    return await newsapi.v2.topHeadlines({
        sources: 'bbc-news'
    })
}

getSourcesAsync = async () => {
    return await newsapi.v2.sources({
        language: 'en'
    })
}

router.get(
    '/news',
    (req, res) => {
        getHeadlinesAsync()
            .then(result => res.json(result.articles))
            .catch(error => console.log(error))
    }
)

router.get(
    '/news/sources',
    (req, res) => {
        getSourcesAsync()
            .then(result => res.json(result.sources))
            .catch(error => console.log(error))
    }
)



module.exports = router