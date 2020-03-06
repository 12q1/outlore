const NewsAPI = require('newsapi')
const newsapi = new NewsAPI(process.env.NEWSAPIKEY)

const getHeadlinesAsync = async () => {
    console.log('Requesting headlines')
    return await newsapi.v2.topHeadlines({
        sources: 'al-jazeera-english, ars-technica, associated-press, bbc-news, bloomberg, business-insider, cnn, engadget, financial-post, google-news, hacker-news, national-geographic, new-scientist, politico, reddit-r-all, reuters, the-verge, wired',
    })
}

const getSourcesAsync = async () => {
    console.log('Requesting sources')
    return await newsapi.v2.sources({
        language: 'en'
    })
}

const getEverythingAsync = async () => {
    console.log('Requesting everything')
    return await newsapi.v2.everything({
        sources: 'al-jazeera-english, ars-technica, bbc-news, bloomberg, business-insider, cnn, engadget, financial-post, hacker-news, national-geographic, new-scientist, politico, reddit-r-all, reuters, the-verge, wired',
        sortBy: 'publishedAt',
        language: 'en',
        pageSize: 100
    })
}

module.exports = { getHeadlinesAsync, getSourcesAsync, getEverythingAsync }