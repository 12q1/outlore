const request = require('superagent');
const extractor = require('unfluff');
const SummarizerManager = require("node-summarizer").SummarizerManager;
// Step 1: Get all the articles from NewsAPI

const getArticleHtml = async (url) => {
    const result = await request.get(url)
    return result.res.text
}

const unfluffArticleHtml = async (url) => {
    const rawHtml = await getArticleHtml(url);
    const data = extractor(rawHtml)
    //console.log(data.text)
    return await unfluffedArticleSummary(data)
}

const unfluffedArticleSummary = async (article) => {
    let summarizer = new SummarizerManager(article.text, 10)
    let result = await summarizer.getSummaryByRank().then((x) => {return x.summary})
    console.log(result)
    return result
}

module.exports = { unfluffArticleHtml }

// Step 2: Unfluff Them

// Step 3: Write them to db
