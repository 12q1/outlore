const Sequelize = require('sequelize')
const sequelize = require('../services/pgdb')
const User = require('./model_user')

const UserSources = sequelize.define('user_sources', {
    abcNews: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    },
    abcNewsAu: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    },
    alJazeeraEn: {
        type: Sequelize.BOOLEAN,
        defaultValue: true
    },
    arsTechnica: {
        type: Sequelize.BOOLEAN,
        defaultValue: true
    },
    associatedPress: {
        type: Sequelize.BOOLEAN,
        defaultValue: true
    },
    australianFinancialReview: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    },
    axios: {
        type: Sequelize.BOOLEAN,
        defaultValue: true
    },
    bbcNews: {
        type: Sequelize.BOOLEAN,
        defaultValue: true
    },
    bbcSport: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    },
    bleacherReport: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    },
    bloomberg: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    },
    breitbartNews: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    },
    businessInsider: {
        type: Sequelize.BOOLEAN,
        defaultValue: true
    },
    businessInsiderUk: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    },
    buzzfeed: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    },
    cbcNews: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    },
    cnbc: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    },
    cnn: {
        type: Sequelize.BOOLEAN,
        defaultValue: true
    },
    cryptoCoinNews: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    },
    engadget: {
        type: Sequelize.BOOLEAN,
        defaultValue: true
    },
    entertainmentWeekly: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    },
    espn: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    },
    espnCricInfo: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    },
    financialPost: {
        type: Sequelize.BOOLEAN,
        defaultValue: true
    },
    footballItalia: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    },
    fortune: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    },
    fourFourTwo: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    },
    foxNews: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    },
    foxSports: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    },
    googleNews: {
        type: Sequelize.BOOLEAN,
        defaultValue: true
    },
    googleNewsAu: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    },
    googleNewsCa: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    },
    googleNewsIN: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    },
    googleNewsUk: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    },
    hackerNews: {
        type: Sequelize.BOOLEAN,
        defaultValue: true
    },
    ign: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    },
    independent: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    },
    mashable: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    },
    medicalNewsToday: {
        type: Sequelize.BOOLEAN,
        defaultValue: true
    },
    msnbc: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    },
    mtvNews: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    },
    mtvNewsUk: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    },
    nationalGeographic: {
        type: Sequelize.BOOLEAN,
        defaultValue: true
    },
    nationalReview: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    },
    nbcNews: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    },
    news24: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    },
    newScientist: {
        type: Sequelize.BOOLEAN,
        defaultValue: true
    },
    newsComAu: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    },
    newsweek: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    },
    newYorkMagazine: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    },
    nextBigFuture: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    },
    nflNews: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    },
    nhlNews: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    },
    politco: {
        type: Sequelize.BOOLEAN,
        defaultValue: true
    },
    recode: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    },
    redditRAll: {
        type: Sequelize.BOOLEAN,
        defaultValue: true
    },
    reuters: {
        type: Sequelize.BOOLEAN,
        defaultValue: true
    },
    rte: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    },
    talksport: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    },
    techcrunch: {
        type: Sequelize.BOOLEAN,
        defaultValue: true
    },
    techRadar: {
        type: Sequelize.BOOLEAN,
        defaultValue: true
    },
    theAmericanConservative: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    },
    theGlobeAndMail: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    },
    theHill: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    },
    theHindu: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    },
    theHuffingtonPost: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    },
    theIrishTimes: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    },
    theJerusalemPost: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    },
    theLadBible: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    },
    theNextWeb: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    },
    theSportBible: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    },
    theTimesOfIndia: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    },
    theVerge: {
        type: Sequelize.BOOLEAN,
        defaultValue: true
    },
    theWallStreetJournal: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    },
    theWashingtonPost: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    },
    theWashingtonTimes: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    },
    time: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    },
    usaToday: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    },
    viceNews: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    },
    wired: {
        type: Sequelize.BOOLEAN,
        defaultValue: true
    }
}, {
    tableName: 'user_sources'
})

UserSources.belongsTo(User)

module.exports = UserSources