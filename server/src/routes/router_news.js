const { Router } = require('express')
const router = new Router()

const NewsAPI = require('newsapi')
const newsapi = new NewsAPI(process.env.NEWSAPIKEY)

getHeadlinesAsync = async () => {
    return await newsapi.v2.topHeadlines({
        sources: 'al-jazeera-english, ars-technica, associated-press, bbc-news, bloomberg, business-insider, cnn, engadget, financial-post, google-news, hacker-news, independent, national-geographic, new-scientist, newsweek, politico, reddit-r-all, reuters, the-verge, wired'
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