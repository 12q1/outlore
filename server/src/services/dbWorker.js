const request = require('superagent');
const extractor = require('unfluff');
const SummarizerManager = require("node-summarizer").SummarizerManager;
const newsapi = require('../services/newsAPI')
const { removeDuplicateObjects } = require('../utils/dataHandlers')

const createAnArticle = async () => {
    newsapi
        .getEverythingAsync() //fetch from everything endpoint
        .then(result => removeDuplicateObjects(result.articles, ['title']) )
        .then(result => result.map((article) => textFilter(`${article.title} ${article.description} ${article.content}`)))
        .then(result => result.map((text) => getKeywordFrequency(text).weighted_map))
        .then(result => console.log(result))
}

// Step 1: Get all the articles from NewsAPI




const getHtml = async (url) => {
    const result = await request.get(url)
        .set('User-Agent', 'Mozilla/5.0') //spoofing user-agent here to bypass site security on some sites
        .catch(err => console.log(err))
    return result.res.text
};
//sends a get request to a url   

const unfluffArticleHtml = async (url) => {
    const rawHtml = await getHtml(url);
    const data = extractor(rawHtml, 'en')
    data.text = textFilter(data.text)
    return await unfluffedArticleSummary(data)
};
//uses unfluff to extract main text from article

const textFilter = (nText) => {
    //console.log(nText)
    const breakless = nText.replace(/\r?\n|\r/g, "")
    return breakless
}

const getKeywordFrequency = (text) => {
    let summarizer = new SummarizerManager(text)
    let result = summarizer.getSummaryByFrequency()
    return result
}

const unfluffedArticleSummary = async (article) => {

    const rawText = `${article.title}. `.concat(article.text) //adding title because word frequency factors heavily into summary
    let summarizer = new SummarizerManager(rawText, 4)
    let result = await summarizer.getSummaryByRank().then((x) => { return x.summary })
    //console.log(result)
    return result
};
//uses node summarizer to generate summary



module.exports = { createAnArticle };



// Step 2: Unfluff Them

// Step 3: Write them to db
