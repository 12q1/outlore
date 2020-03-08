const { Router } = require('express')
const router = new Router()
const newsapi = require('../services/newsAPI')
const { removeDuplicateObjects } = require('../utils/dataHandlers')

router.get(
    '/news',
    (req, res) => {
        newsapi.getHeadlinesAsync()
            .then(result => res.json(result.articles))
            .catch(error => console.log(error))
    }
)

router.get(
    '/news/everything',
    (req, res) => {
        newsapi.getEverythingAsync()
            .then(result => res.json(removeDuplicateObjects(result.articles, ['title'])))
            .catch(error => console.log(error))
    }
)

router.get(
    '/news/sources',
    (req, res) => {
        newsapi.getSourcesAsync()
            .then(result => res.json(result.sources.map(source => { return source.id })))
            .catch(error => console.log(error))
    }
)

module.exports = router