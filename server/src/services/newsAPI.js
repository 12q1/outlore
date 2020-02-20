const NewsAPI = require('newsapi')
const newsapi = new NewsAPI(process.env.NEWSAPIKEY)
const User = require('../models/model_user')
const UserSources = require('../models/model_user_sources')

const getHeadlinesAsync = async () => {
    console.log('Requesting headlines')
    return await newsapi.v2.topHeadlines({
        sources: 'al-jazeera-english, ars-technica, associated-press, bbc-news, bloomberg, business-insider, cnn, engadget, financial-post, google-news, hacker-news, independent, national-geographic, new-scientist, newsweek, politico, reddit-r-all, reuters, the-verge, wired'
    })
}

const getSourcesAsync = async () => {
    console.log('Requesting sources')
    return await newsapi.v2.sources({
        language: 'en'
    })
}

module.exports = { getHeadlinesAsync, getSourcesAsync }